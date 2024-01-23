import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { OgmService } from 'src/ogm/ogm.service';
import { UserModelClass } from './model/user.model';
import { UserResolver } from './user.resolver';
import { EnumList } from 'src/common/enum/enumList'

@Module({
  providers: [
    UserResolver,
    UserModelClass,
    OgmService,
    UserService,
    UserRepository
  ],
  exports: [UserService]
})
export class UserModule {}
