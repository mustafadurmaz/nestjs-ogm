import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserInput } from 'src/graphql/gql-types';


@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserInput: CreateUserInput): Promise<any> {
    try {
      const user = await this.userRepository.UserModel.create({
          input: [],
      });

      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }
}
