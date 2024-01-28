import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateSubUserInput, CreateUserInput } from 'src/graphql/gql-types';
import { assignDtoPropToEntity } from 'sgnm-neo4j/dist';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserInput: CreateUserInput): Promise<any> {
    try {
      const user = await this.userRepository.UserModel.create({
          input: [createUserInput],
      });

      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // create sub user with relation to user 

  async createSubUser(createSubUser: [CreateSubUserInput]): Promise<any> {
    try {
      
      if(createSubUser.length > 0) {
        const response= await Promise.all (createSubUser.map(async (createSubUserInput)=> {
          
          const userFinalObject=createSubUserInput;
          delete userFinalObject["parentOfUser"];

          const subUser=await this.userRepository.subUserModel.create(
            {
              input:[
                {
                  ...userFinalObject,

                  parentOfUser: {
                    connect: [
                      {
                        where: { node: { id: +createSubUserInput.parentOfUser, isDeleted: false } }, edge: { isDeleted: false }
                      }
                    ]
                  }

                }
              ]
            }
          )
        } ))


      return subUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }


}
