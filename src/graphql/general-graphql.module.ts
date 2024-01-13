import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { Neo4jGraphQL, /makeAugmentedSchema } from '@neo4j/graphql';
import { Neo4jGraphQL } from 'sgnm-neo4j-graphql';
import { Neo4jService } from 'sgnm-neo4j/dist';
import { Driver } from 'neo4j-driver';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import introspectedSchema from './type-defs/introspected';
import { HttpModule } from '@nestjs/axios';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import axios from 'axios';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

/**
 *
 * @note there is an issue with http request
 * handler, can't be injected to useFactory method
 */
export const gqlProviderFactory = async (
  neo4jService: Neo4jService,
  configService: ConfigService,
  cacheManager: Cache,
) => {
  const getUserToken = async () => {
    try {
      let token;
      token = await cacheManager.get('KC_TOKEN');
      if (!token) {
        const userUrl = await configService.get('USER_URL');
        const username = await configService.get('WORKORDER_USER_NAME');
        const password = await configService.get('WORKORDER_USER_PASS');
        const loginResponse = await axios.post(
          `${userUrl}/login`,
          {
            username,
            password,
          },
          {},
        );
        token = loginResponse.data.token_type + ' ' + loginResponse.data.access_token;
      }
      return token;
    } catch (e) {
      throw e;
    }
  };

  const vNodeHandler = async ({ urlType, url, ...restOfArgs }) => {
    try {
      if (urlType.toLowerCase() === 'post') {
        const req = await axios.post(url, restOfArgs?.payload ? restOfArgs.payload : {}, {
          headers: {
            Authorization: await getUserToken(),
          },
        });
        return req.data;
      } else {
        const req = await axios.get(url, {
          headers: {
            Authorization: await getUserToken(),
          },
        });
        return req.data;
      }
    } catch (e) {
      console.error(e);
    }
  };
  const driver = neo4jService.getDriver() as unknown as Driver;

  const typeDefs = introspectedSchema;

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    features: {
      authorization: {
        key: {
          url: `${configService.get<string>('KEYCLOAK_URL')}/realms/${configService.get<string>(
            'KEYCLOAK_REALM',
          )}/protocol/openid-connect/certs`,
          // issuer: `${configService.get<string>('KEYCLOAK_URL')}/realms/${configService.get<string>('KEYCLOAK_REALM')}`,
        },
      },
      filters: {
        String: {
          MATCHES: true,
        },
        ID: {
          MATCHES: true,
        },
      },
    },
    resolvers: {
      // MaintenanceMain: {
      Component: {
        componentOriginal: async ({ urlType, url, targetLabels, referenceLabel }) => {
          return await vNodeHandler({
            urlType,
            url,
          });
        },
      },
      FacilityStructure: {
        facilityStructureOriginal: async ({ urlType, url, referenceId, referenceLabel }) => {
          return await vNodeHandler({
            urlType,
            url,
            payload: {
              identifier: `${referenceId}`,
              label: referenceLabel,
            },
          });
        },
      },
      System: {
        SystemOriginal: async ({ urlType, url, referenceId, referenceLabel }) => {
          return await vNodeHandler({
            urlType,
            url,
          });
        },
      },
      UserVirtualWorkSpace: {
        userOriginal: async ({ urlType, url, referenceId, referenceLabel }) => {
          return await vNodeHandler({
            urlType,
            url,
          });
        },
      },
      CheckItemValue: {
        inputValueParsed: async ({ inputValue }) => {
          return JSON.parse(inputValue);
        },
      },
      Technician: {
        userOriginal: async ({ urlType, url, referenceId, referenceLabel }) => {
          return await vNodeHandler({
            urlType,
            url,
          });
        },
      },
    },
    debug: true,
  });

  const schema = await neoSchema.getSchema();

  return {
    path: '/general-graphql',
    server: {
      path: '/general-graphql',
      cors: true,
    },
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    schema,
    context: async ({ req }) => ({ sessionConfig: { database: await configService.get<string>('NEO4J_DATABASE') } }),
  };
};

@Module({
  imports: [
    CacheModule.register(),
    HttpModule.register({
      timeout: 10000,
    }),
    ConfigModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (neo4jService: Neo4jService, configService: ConfigService, cacheManager: Cache) =>
        gqlProviderFactory(neo4jService, configService, cacheManager),
      inject: [Neo4jService, ConfigService, CACHE_MANAGER],
    }),
  ],
})
export class GeneralGraphqlModule {}
