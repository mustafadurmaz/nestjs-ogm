import { Injectable, OnModuleInit } from '@nestjs/common';
import { OGM } from 'sgnm-graphql-ogm';
import { Driver, Neo4jService } from 'sgnm-neo4j/dist';
import { ConfigService } from '@nestjs/config/dist/config.service';
import introspected from 'src/graphql/type-defs/introspected';

@Injectable()
export class OgmService implements OnModuleInit {
  protected schemaString: string;
  protected ogm: OGM;
  protected driver: Driver;

  constructor(protected readonly neo4jService: Neo4jService, protected readonly configService: ConfigService) {
    this.driver = this.neo4jService.getDriver() as unknown as Driver;
  }

  get OGM() {
    return this.ogm;
  }

  removeCustomResolverLines(input) {
    const lines = input.split('\n');
    const filteredLines = lines.filter((line) => !line.includes('@customResolver'));
    return filteredLines.join('\n');
  }

  async onModuleInit() {
    const schemaString = this.removeCustomResolverLines(introspected);
    this.schemaString = schemaString;
    this.ogm = new OGM({
      typeDefs: schemaString,
      driver: this.driver as any,
      database: await this.configService.get('NEO4J_DATABASE'),
      debug: true,
    });
    await this.ogm.init();
  }
}
