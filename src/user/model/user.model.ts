import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Neo4jService } from 'sgnm-neo4j/dist';
import BaseModel from 'src/common/model/BaseModel';
import { OgmService } from 'src/ogm/ogm.service';
// import { SlaModel, SubSlaModel } from 'src/ogm/types/type-definition.ogm.GENERIC';

// @Injectable()
// export class SlaModelClass extends BaseModel implements OnApplicationBootstrap {
//   protected readonly nodeLabels = [Neo4jLabelEnum.SLA, Neo4jLabelEnum.SUB_SLA];   //TYpe isimleri
//   protected readonly modulePath = 'sla';

//   constructor(protected readonly ogmService: OgmService) {
//     super(ogmService);
//   }
//   async onApplicationBootstrap() {
//     try {
//       await this.initModel();
//     } catch (e) {
//       throw e;
//     }
//   }
//   get slaModel() {
//     return this.getModel<SlaModel>(Neo4jLabelEnum.SLA);
//   }
//   get subSlaModel() {
//     return this.getModel<SubSlaModel>(Neo4jLabelEnum.SUB_SLA);
//   }
 
//  }



