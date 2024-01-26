import { EnumList } from 'src/common/enum/enumList';
export const UserModuleSchema = `#graphql

interface ParentOfProperties @relationshipProperties { 
    isDeleted: Boolean!
    id:Int
  }

type ${EnumList.USER} @mutation(operations: []) { 
	id: Int @unique
    name:String
    email:String
    subSla: [SubUser!]!  @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties") 
}

type ${EnumList.SUBUSER} @mutation(operations: []) { 
	id: Int @unique
    name:String
    email:String
    parentOfUser: [User!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
}
 `;

export default UserModuleSchema;
