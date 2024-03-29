import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Neo4jService } from 'sgnm-neo4j/dist';
import BaseModel from 'src/common/model/BaseModel';
import { OgmService } from 'src/ogm/ogm.service';
import { UserModel } from 'src/ogm/types/type-definition.ogm.GENERIC';
import { EnumList } from 'src/common/enum/enumList';

@Injectable()
export class UserModelClass extends BaseModel implements OnApplicationBootstrap {
  protected readonly nodeLabels = [EnumList.USER, EnumList.SUBUSER]; //TYpe isimleri
  protected readonly modulePath = 'user';

  constructor(protected readonly ogmService: OgmService) {
    super(ogmService);
  }
  async onApplicationBootstrap() {
    try {
      await this.initModel();
    } catch (e) {
      throw e;
    }
  }
  get UserModel() {
    return this.getModel<UserModel>(EnumList.USER);
  }

  get subUserModel() {
    return this.getModel<UserModel>(EnumList.SUBUSER);
  }

}
