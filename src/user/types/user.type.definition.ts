import { EnumList } from 'src/common/enum/enumList'
export const UserModuleSchema = `#graphql

type ${EnumList.USER} @mutation(operations: []) { 
	  id: Int @unique
    name:String
    email:String
    subUsers: [${EnumList.SUBUSER}]
}

type ${EnumList.SUBUSER} @mutation(operations: []) { 
	  id: Int @unique
    name:String
    email:String
    user: ${EnumList.USER}
}
 `;


export default UserModuleSchema 