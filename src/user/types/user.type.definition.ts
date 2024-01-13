export const UserModuleSchema = `#graphql

type "User" @mutation(operations: []) { 
  ######################################### default props and relations ###################################
	id: Int @unique
	labels: [String]
    name:String!
    email:String
 `;


export default UserModuleSchema 