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
  

  const vNodeHandler = async ({ urlType, url, ...restOfArgs }) => {
    try {
      if (urlType.toLowerCase() === 'post') {
        const req = await axios.post(url, restOfArgs?.payload ? restOfArgs.payload : {}, {
          headers: {
            
          },
        });
        return req.data;
      } else {
        const req = await axios.get(url, {
          headers: {
            
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
