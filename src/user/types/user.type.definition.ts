import { EnumList } from 'src/common/enum/enumList'
export const UserModuleSchema = `#graphql

type ${EnumList.USER} @mutation(operations: []) { 
  ######################################### default props and relations ###################################
	id: Int @unique
    name:String
    email:String
 `;


export default UserModuleSchema 