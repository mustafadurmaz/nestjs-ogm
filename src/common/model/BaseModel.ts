import { OGM } from 'sgnm-graphql-ogm';
import { ConfigService } from '@nestjs/config/dist/config.service';
import * as path from 'path';
import * as fs from 'fs';
import { parse, print } from 'graphql';
import { OgmService } from 'src/ogm/ogm.service';

export default abstract class BaseModel {
  /**
   *  Abstracts to be implemented by SubModels
   *  ***REQUIRED***
   */
  // protected abstract getSchema(): string;
  protected abstract onApplicationBootstrap(): void;
  protected abstract readonly modulePath: string;
  protected abstract readonly nodeLabels: string[];
  protected models: { [key: string]: any } = {};
  protected ogm: OGM;

  constructor(protected readonly ogmService: OgmService) {}

  async initModel() {
    try {
      this.ogm = this.ogmService.OGM;
      this.nodeLabels.map((modelLabel) => {
        this.models[modelLabel] = this.ogm.model(modelLabel);
      });
    } catch (e) {
      console.log(`OGM Initialization of ${this.modulePath} failed`);
      throw e;
    }
  }

  getModel<T>(nodeLabel: string): T {
    try {
      if (Object.keys(this.models).includes(nodeLabel)) return this.models[nodeLabel];
      throw new Error('Requested model not found');
    } catch (e: unknown) {
      console.error(e);
      throw e;
    }
  }
}