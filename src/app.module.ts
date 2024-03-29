import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Neo4jConfig } from './neo4j/neo4j-config.interface';
// import { Neo4jModule } from './neo4j/neo4j.module';

import { Neo4jModule } from 'sgnm-neo4j';
import { UserModule } from './user/user.module';
import { GraphqlModule } from './graphql/graphql.module';
import { OgmModule } from './ogm/ogm.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // Neo4jModule.forRootAsync({
    //   imports: [ ConfigModule ],
    //   inject: [ ConfigService, ],
    //   useFactory: (configService: ConfigService) : Neo4jConfig => ({
    //     scheme: configService.get('NEO4J_SCHEME'),
    //     host: configService.get('NEO4J_HOST'),
    //     port: configService.get('NEO4J_PORT'),
    //     username: configService.get('NEO4J_USERNAME'),
    //     password: configService.get('NEO4J_PASSWORD'),
    //     database: configService.get('NEO4J_DATABASE'),
    //   })
    // }),
    Neo4jModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('NEO4J_HOST'),
        password: configService.get('NEO4J_PASSWORD'),
        port: configService.get('NEO4J_PORT'),
        scheme: configService.get('NEO4J_SCHEME'),
        username: configService.get('NEO4J_USERNAME'),
        database: configService.get('NEO4J_DATABASE'),
      }),
    }),
    UserModule,
    GraphqlModule,
    OgmModule

  ],
  controllers: [],
  providers: [],
})


export class AppModule {}
