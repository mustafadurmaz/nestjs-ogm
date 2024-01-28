import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/graphql/gql-types';
import { UserService } from './user.service';


@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}


  @Mutation('createUser')
  async createUser(
      @Args('createUserInput') createUserInput: CreateUserInput,
      @Context() context
  ): Promise<any> {
      return this.userService.createUser(createUserInput);
  }

  //create sub user

  

}
