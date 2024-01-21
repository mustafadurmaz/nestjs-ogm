import { Injectable } from "@nestjs/common";
import { UserInterface } from "src/common/interface/user.interface";
import { OgmService } from "src/ogm/ogm.service";
import { UserModelClass } from "./model/user.model";

@Injectable()
export class UserRepository extends UserModelClass implements UserInterface<{}>  {

  constructor(
    protected readonly ogmService: OgmService,
  ) {super(ogmService);
     }

}