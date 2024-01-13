import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<any>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), 'src/**/schema/*.gql')],
      definitions: {
        path: join(process.cwd(), 'src/graphql/gql-types.ts'),
      },
      context: (args) => args,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
})
export class GraphqlModule {}
