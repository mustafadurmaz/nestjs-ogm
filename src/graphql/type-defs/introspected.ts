import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import checklistTypeDefinition from 'src/checkLists/types/checklist.type.definition';
import checkitemTypeDefinition from 'src/checkitems/types/checkitem.type.definition';

import { Neo4jLabelEnum } from 'src/common/const/neo4j.label.enum';
import ClassificationModuleSchema from 'src/classification/types/classification.type.definition';
import OrganizationModuleSchema from 'src/organization/types/organization.type.definition';
import WorkSpaceModuleSchema from 'src/workspace/types/workSpace.type.definition';
import WorkFlowModuleSchema from 'src/workflow/types/workFlow.type.definition';
import TaskModuleSchema from 'src/task/types/task.type.definition';
import SupportModuleSchema from 'src/support/types/support.type.definition';
import SlaModuleSchema from 'src/sla/types/sla.type.definition';
import SlaCalendarModuleSchema from 'src/slaCalendar/types/sla.calendar.type.definition';

export default `#graphql
scalar JSON
type JWT @jwt {
    roles: [String!]! @jwtClaim(path: "resource_access.realm-management.roles")
}
interface AssignedtoProperties @relationshipProperties {
	hasDone: Boolean!
	isDeleted: Boolean!
	taskId: Int!
}

type AttachedDocuments @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	foreignUrl: String!
	isActive: Boolean! 
	isDeleted: Boolean!
	isFile: Boolean!
	key: String!
	language: String!
	multiLabel: Boolean!
	name: String!
	owner: String!
	trId: String!
	type: String!
	uniqueRel: Boolean!
	updatedAt: DateTime!
	urlType: String!
	variableName: String!
}


type AttachedImages @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	foreignUrl: String!
	isActive: Boolean!
	isDeleted: Boolean!
	isFile: Boolean!
	key: String!
	language: String!
	multiLabel: Boolean!
	name: String!
	owner: String!
	trId: String!
	type: String!
	uniqueRel: Boolean!
	updatedAt: DateTime!
	urlType: String!
	variableName: String!
}

interface AttacheddocumentsProperties @relationshipProperties {
	isDeleted: Boolean!
}



interface IsScheduledWithProperties @relationshipProperties {
  isDeleted: Boolean!
  id:Int
  isDone: Boolean!
  dateTime: LocalDateTime!

  status: String
}

type ${Neo4jLabelEnum.SCHEDULE} {
	id: Int @unique
	isDeleted: Boolean!
	targetId: Int!
	targetLabels: [String]
	schedulerHandlerKey: String!
	oneTimeOccurrenceDateTime: LocalDateTime
	trId: String
	planStartDate: DateTime
	labels: [String!]!
	preview: [${Neo4jLabelEnum.MAINTENANCE_PREVIEW}!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	plan: [${Neo4jLabelEnum.WORKSPACE_MAINTENANCE_MAIN}!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	supportPreview: [${Neo4jLabelEnum.SUPPORT_PREVIEW}!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	supportPlan: [${Neo4jLabelEnum.WORKSPACE_SUPPORT_MAIN}!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	parentSchedule: [${Neo4jLabelEnum.SCHEDULE}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	subSchedule: [${Neo4jLabelEnum.SCHEDULE}!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
}




${checklistTypeDefinition}
${checkitemTypeDefinition}





type Component @node(labels: ["Component","Virtual"]) @mutation(operations: []) {
	canDelete: Boolean
	createdAt: DateTime
	faultsHasVirtualRelation: [FaultTask!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	faultsRequestedcomponents: [FaultTask!]! @relationship(type: "REQUESTEDCOMPONENTS", direction: IN, properties: "RequestedComponentsProperties")
	isDeleted: Boolean
	key: String
	name: String
	referenceId: Int
	referenceLabel: [String]
	type: String
	updatedAt: DateTime
	url: String
	urlType: String
}

type Contact @node(labels: ["Contact","Virtual"]) @mutation(operations: []) {
	canDelete: Boolean!
	createdAt: DateTime!
	isDeleted: Boolean!
	key: String!
	referenceId: String!
	referenceLabel: [String]!
	type: String!
	updatedAt: DateTime!
	url: String!
	urlType: String!
	workSpacesCreatedBy: [WorkSpace!]! @relationship(type: "CREATED_BY", direction: IN, properties: "CreatedByProperties")
	workSpacesHasVirtualRelation: [WorkSpace!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
}



# interface CreatedbyProperties @relationshipProperties {
# 	isDeleted: Boolean!
# }




type DecisionModelNotation @mutation(operations: []) {
	canDelete: Boolean!
	createdAt: DateTime!
	dmnId: String!
	dmnValue: String!
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	updatedAt: DateTime!
}


interface DeliveredspareofProperties @relationshipProperties {
	hasApproved: Boolean!
	isDeleted: Boolean!
	wareHouseId: String!
}



type Document @mutation(operations: []) {
	canDelete: Boolean!
	createdAt: DateTime!
	faultsAttacheddocuments: [FaultTask!]! @relationship(type: "ATTACHEDDOCUMENTS", direction: IN, properties: "AttacheddocumentsProperties")
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	name: String!
	taskKey: String!
	updatedAt: DateTime!
	url: String!
}


type Effort @mutation(operations: []) {
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	description: String
	effortDuration: String
	effortOfUsers: [UserVirtualWorkSpace!]! @relationship(type: "EFFORT_OF", direction: OUT, properties: "EffortOfProperties")
	effortType: String
	endDate: DateTime
	faultsEffort: [FaultTask!]! @relationship(type: "EFFORT", direction: IN, properties: "EffortProperties")
	ScopeMaintenanceEffort: [${Neo4jLabelEnum.CHECK_LIST_VALUES}!]! @relationship(type: "EFFORT", direction: IN, properties: "EffortProperties")
	isActive: Boolean
	isDeleted: Boolean
	key: String
	owner: String
	startDate: DateTime
	trId: String
	updatedAt: DateTime
}

interface EffortOfProperties @relationshipProperties {
	isDeleted: Boolean!
	taskId: Int!
}

interface EffortProperties @relationshipProperties {
	isDeleted: Boolean!
}

type EffortType @mutation(operations: []) {
	canDelete: Boolean
	canDisplay: Boolean
	code: String
	createdAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	language: String
	name: String
	owner: String
	trId: String
	updatedAt: DateTime
}

type EffortType_en @mutation(operations: []) {
	canCopied: Boolean
	canDelete: Boolean
	isActive: Boolean
	isDeleted: Boolean
	isRoot: Boolean
	key: String
	language: String
	name: String
	realm: String
}

type EffortType_tr @mutation(operations: []) {
	canCopied: Boolean
	canDelete: Boolean
	isActive: Boolean
	isDeleted: Boolean
	isRoot: Boolean
	key: String
	language: String
	name: String
	realm: String
}


# type CheckListType @mutation(operations: []) {
# 	canDelete: Boolean
# 	canDisplay: Boolean
# 	code: String
# 	createdAt: DateTime
# 	isActive: Boolean
# 	isDeleted: Boolean
# 	key: String
# 	language: String
# 	name: String
# 	owner: String
# 	trId: String
# 	updatedAt: DateTime
# 	realm
# }

type CheckListType_en @mutation(operations: []) {
	canCopied: Boolean
	canDelete: Boolean
	isActive: Boolean
	isDeleted: Boolean
	isRoot: Boolean
	key: String
	language: String
	name: String
	realm: String
}

type CheckListType_tr @mutation(operations: []) {
	canCopied: Boolean
	canDelete: Boolean
	isActive: Boolean
	isDeleted: Boolean
	isRoot: Boolean
	key: String
	language: String
	name: String
	realm: String
}

type FacilityStructure @node(labels: ["Virtual","FacilityStructure"]) @mutation(operations: []) {
	canDelete: Boolean!
	class: String
	createdAt: DateTime!
	faultsHasVirtualRelation: [FaultTask!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	faultsRequestedspaces: [FaultTask!]! @relationship(type: "REQUESTEDSPACES", direction: IN, properties: "RequestedSpacesProperties")
	isDeleted: Boolean!
	key: String!
	name: String!
	referenceLabel: [String]!
	resourcesHasStructure: [Resources!]! @relationship(type: "HAS_STRUCTURE", direction: IN, properties: "HasStructureProperties")
	resourcesHasVirtualRelation: [Resources!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	trId: String
	type: String!
	updatedAt: DateTime!
	url: String!
	urlType: String!
	virtualPropertyField: String
}



type Feature @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	featuresParentOf: [FeatureMain!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	isActive: Boolean!
	isDeleted: Boolean!
	name: String!
}



interface HasAssetProperties @relationshipProperties {
	createdAt: DateTime!
	deletedAt: DateTime
	isDeleted: Boolean!
	trId: String!
}

interface HasMemberProperties @relationshipProperties {
	isDeleted: Boolean!
}

interface HasStructureProperties @relationshipProperties {
	createdAt: DateTime!
	isDeleted: Boolean!
	trId: String!
}



type Infra @mutation(operations: []) {
	canDelete: Boolean!
	isDeleted: Boolean!
	name: String!
	realm: String!
}


# interface IsDefaultOfProperties @relationshipProperties {
# 	isDeleted: Boolean!
# }

type LastModifiedty @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	language: String!
	multiLabel: Boolean!
	name: String!
	owner: String!
	trId: String!
	type: String!
	uniqueRel: Boolean!
	updatedAt: DateTime!
	variableName: String!
}

type MaterialRequest @node(labels: ["MaterialRequest","Task"]) @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	createdbyVirtualUserS: [UserVirtualWorkSpace!]! @relationship(type: "CREATEDBY", direction: OUT, properties: "CreatedByProperties")
	currentStateStates: [WorkSpaceWorkFlowState!]! @relationship(type: "CURRENT_STATE", direction: OUT, properties: "CurrentStateProperties")
	defaultStateStates: [WorkSpaceWorkFlowState!]! @relationship(type: "DEFAULT_STATE", direction: OUT, properties: "DefaultStateProperties")
	deliveredspareofSpares: [Spare!]! @relationship(type: "DELIVEREDSPAREOF", direction: OUT, properties: "DeliveredspareofProperties")
	dependedOnWorkFlows: [WorkSpaceWorkFlow!]! @relationship(type: "DEPENDED_ON", direction: OUT, properties: "DependedOnProperties")
	description: String!
	hasVirtualRelationSpares: [Spare!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
	hasVirtualRelationVirtualUserS: [UserVirtualWorkSpace!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	name: String!
	originiatedbyFaults: [FaultTask!]! @relationship(type: "ORIGINIATEDBY", direction: OUT, properties: "OriginiatedbyProperties")
	owner: String!
	requestedbyVirtualUserS: [UserVirtualWorkSpace!]! @relationship(type: "REQUESTEDBY", direction: OUT, properties: "RequestedByProperties")
	requestedspareofSpares: [Spare!]! @relationship(type: "REQUESTEDSPAREOF", direction: OUT, properties: "RequestedspareofProperties")
	tag: [String]!
	templatedbyTaskTypes: [TaskType!]! @relationship(type: "TEMPLATEDBY", direction: OUT, properties: "TemplatedByProperties")
	trId: String!
	updatedAt: DateTime!
}



interface OriginiatedbyProperties @relationshipProperties {
	isDeleted: Boolean!
}


interface IncludesProperties @relationshipProperties {
	createdAt: DateTime
	isDeleted: Boolean
	updatedAt: DateTime
	isRequired: Boolean
}

interface RequestedspareofProperties @relationshipProperties {
	amount: String!
	isDeleted: Boolean!
}



type Resources @mutation(operations: []) {
	canDelete: Boolean!
	canDisplay: Boolean!
	hasAssetTypes: [Type!]! @relationship(type: "HAS_ASSET", direction: OUT, properties: "HasAssetProperties")
	hasStructureFacilityStructures: [FacilityStructure!]! @relationship(type: "HAS_STRUCTURE", direction: OUT, properties: "HasStructureProperties")
	hasVirtualRelationFacilityStructures: [FacilityStructure!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
	hasVirtualRelationTypes: [Type!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	name: String!
}




type Spare @node(labels: ["Spare","Virtual"]) @mutation(operations: []) {
	canDelete: Boolean!
	createdAt: DateTime!
	isDeleted: Boolean!
	key: String!
	materialRequestsDeliveredspareof: [MaterialRequest!]! @relationship(type: "DELIVEREDSPAREOF", direction: IN, properties: "DeliveredspareofProperties")
	materialRequestsHasVirtualRelation: [MaterialRequest!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	materialRequestsRequestedspareof: [MaterialRequest!]! @relationship(type: "REQUESTEDSPAREOF", direction: IN, properties: "RequestedspareofProperties")
	name: String!
	referenceId: String!
	referenceLabel: [String]!
	spareAdderUsers: [UserVirtualWorkSpace!]! @relationship(type: "SPARE_ADDER", direction: OUT, properties: "SpareAdderProperties")
	type: String!
	updatedAt: DateTime!
	url: String!
	urlType: String!
}

interface SpareAdderProperties @relationshipProperties {
	isDeleted: Boolean!
	taskId: Int!
}



type Type @node(labels: ["Type","Virtual"]) @mutation(operations: []) {
	canDelete: Boolean!
	class: String!
	createdAt: DateTime!
	isActive: Boolean!
	isDeleted: Boolean!
	key: String!
	name: String!
	referenceId: Int!
	referenceLabel: [String]!
	resourcesHasAsset: [Resources!]! @relationship(type: "HAS_ASSET", direction: IN, properties: "HasAssetProperties")
	resourcesHasVirtualRelation: [Resources!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	trId: String!
	type: String!
	updatedAt: DateTime!
	url: String!
	urlType: String!
	virtualPropertyField: String!
}

type AuthUser @plural(value: "AuthUser") @node(labels: ["User","Virtual","WorkSpace"]) @authorization(validate: [{ when: [BEFORE], where: { node: { referenceId: "$jwt.sub" } } }]) {
	id: Int
	labels: [String!]!
	canDelete: Boolean!
	createdAt: DateTime!
	effortsEffortOf: [Effort!]! @relationship(type: "EFFORT_OF", direction: IN, properties: "EffortOfProperties")
	isDeleted: Boolean!
	key: String!
	name: String!
	referenceId: String!
	referenceLabel: [String]!
	sparesSpareAdder: [Spare!]! @relationship(type: "SPARE_ADDER", direction: IN, properties: "SpareAdderProperties")
	statesAssignedto: [WorkSpaceWorkFlowState!]! @relationship(type: "ASSIGNEDTO", direction: IN, properties: "AssignedtoProperties")
	updatedAt: DateTime!
	url: String!
	urlType: String!
	userGroupsHasMember: [UserGroupVirtualWorkSpace!]! @relationship(type: "HAS_MEMBER", direction: IN, properties: "HasMemberProperties")
	workSpacesHasMember: [WorkSpace!]! @relationship(type: "HAS_MEMBER", direction: IN, properties: "HasMemberProperties")
	workSpacesIsDefaultOf: [WorkSpace!]! @relationship(type: "IS_DEFAULT_OF", direction: IN, properties: "IsDefaultOfProperties")
}

# type User @node(labels: ["User","Virtual","WorkSpace"]) @mutation(operations: []) {
# 	canDelete: Boolean!
# 	createdAt: DateTime!
# 	effortsEffortOf: [Effort!]! @relationship(type: "EFFORT_OF", direction: IN, properties: "EffortOfProperties")
# 	isDeleted: Boolean!
# 	key: String!
# 	name: String!
# 	referenceId: String!
# 	referenceLabel: [String]!
# 	sparesSpareAdder: [Spare!]! @relationship(type: "SPARE_ADDER", direction: IN, properties: "SpareAdderProperties")
# 	statesAssignedto: [WorkSpaceWorkFlowState!]! @relationship(type: "ASSIGNEDTO", direction: IN, properties: "AssignedtoProperties")
# 	updatedAt: DateTime!
# 	url: String!
# 	urlType: String!
# 	userGroupsHasMember: [UserGroup!]! @relationship(type: "HAS_MEMBER", direction: IN, properties: "HasMemberProperties")
# 	workSpacesHasMember: [WorkSpace!]! @relationship(type: "HAS_MEMBER", direction: IN, properties: "HasMemberProperties")
# 	workSpacesIsDefaultOf: [WorkSpace!]! @relationship(type: "IS_DEFAULT_OF", direction: IN, properties: "IsDefaultOfProperties")
# }

# type VirtualUser @node(labels: ["User", "Virtual"]) @mutation(operations: []) {
# 	canDelete: Boolean!
# 	createdAt: DateTime!
# 	faultsCreatedby: [FaultTask!]! @relationship(type: "CREATEDBY", direction: IN, properties: "CreatedbyProperties")
# 	faultsHasVirtualRelation: [FaultTask!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
# 	faultsRequestedby: [FaultTask!]! @relationship(type: "REQUESTEDBY", direction: IN, properties: "RequestedByProperties")
# 	isDeleted: Boolean!
# 	key: String
# 	materialRequestsCreatedby: [MaterialRequest!]! @relationship(type: "CREATEDBY", direction: IN, properties: "CreatedbyProperties")
# 	materialRequestsHasVirtualRelation: [MaterialRequest!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
# 	materialRequestsRequestedby: [MaterialRequest!]! @relationship(type: "REQUESTEDBY", direction: IN, properties: "RequestedByProperties")
# 	name: String
# 	referenceId: String!
# 	referenceLabel: [String]!
# 	type: String!
# 	updatedAt: DateTime!
# 	url: String!
# 	urlType: String!
# 	userOriginal: JSON @customResolver(requires: "referenceId referenceLabel url urlType")	
# }

# type UserGroup @node(labels: ["UserGroup","Virtual","WorkSpace"]) @mutation(operations: []) {
# 	canDelete: Boolean!
# 	createdAt: DateTime!
# 	hasMemberUsers: [User!]! @relationship(type: "HAS_MEMBER", direction: OUT, properties: "HasMemberProperties")
# 	isDeleted: Boolean!
# 	key: String!
# 	name: String!
# 	referenceId: String!
# 	referenceLabel: [String]!
# 	statesWillApproveBy: [WorkSpaceWorkFlowState!]! @relationship(type: "WILL_APPROVE_BY", direction: IN, properties: "WillApproveByProperties")
# 	statesWillAssignTo: [WorkSpaceWorkFlowState!]! @relationship(type: "WILL_ASSIGN_TO", direction: IN, properties: "WillAssignToProperties")
# 	updatedAt: DateTime!
# 	url: String!
# 	urlType: String!
# 	workSpacesUsingWorkspaceAsUserGroup: [WorkSpace!]! @relationship(type: "USING_WORKSPACE_AS_USER_GROUP", direction: IN, properties: "UsingWorkspaceAsUserGroupProperties")
# }

# interface UsingWorkspaceAsUserGroupProperties @relationshipProperties {
# 	isDeleted: Boolean!
# }



type AttachedDocuments {
	id: Int
	labels: [String!]!
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	foreignUrl: String!
	isActive: Boolean!
	isDeleted: Boolean!
	isFile: Boolean!
	key: String!
	language: String!
	multiLabel: Boolean!
	name: String!
	owner: String!
	trId: String!
	type: String!
	uniqueRel: Boolean!
	updatedAt: DateTime!
	urlType: String!
	variableName: String!
}

type AttachedImages {
	id: Int
	labels: [String!]!
	canDelete: Boolean!
	canDisplay: Boolean!
	createdAt: DateTime!
	foreignUrl: String!
	isActive: Boolean!
	isDeleted: Boolean!
	isFile: Boolean!
	key: String!
	language: String!
	multiLabel: Boolean!
	name: String!
	owner: String!
	taskTypesParentOf: [TaskType!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	trId: String!
	type: String!
	uniqueRel: Boolean!
	updatedAt: DateTime!
	urlType: String!
	variableName: String!
}


type MaintenanceType @mutation(operations: []){
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	language: String
	owner: String
	key: String
	name: String
	code: String
	trId: String
	updatedAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
}

type MaintenanceComponents @mutation(operations: []) {
	FacilityStructures: [FacilityStructure!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
}

type MaintenanceComponents @mutation(operations: []) {
	hasVirtualRelationComponents: [Component!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: OUT, properties: "HasVirtualRelationProperties")
}

interface HasChecksProperties @relationshipProperties {
	isDeleted: Boolean!
}

interface HasMaintenancePlanProperties @relationshipProperties {
	isDeleted: Boolean!
}

interface HasMemberProperties @relationshipProperties {
	isDeleted: Boolean!
}





interface MaintainsProperties @relationshipProperties {
	isDeleted: Boolean!
}



type Document @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	createdAtDate: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String!
	updatedAt: DateTime!
	updatedAtDate: String!
	url: String!
}

type Image @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	createdAtDate: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String!
	updatedAt: DateTime!
	updatedAtDate: String!
	url: String!
}


type MaintenanceMain @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	scopeType: String
	canDisplay: Boolean
	createdAt: DateTime
	description: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String!
	updatedAt: DateTime!
	startDate: DateTime
	endDate: DateTime
	tags: [String]
	#updatedAt: DateTime
	WorkSpaceMaintenanceMains: [WorkSpaceMaintenanceMain!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
	Components: [Components!]! @relationship(type: "MAINTAINS", direction: OUT, properties: "MaintainsProperties") 
	FacilityStructures: [FacilityStructures!]! @relationship(type: "MAINTAINS", direction: OUT, properties: "MaintainsProperties")
	Systems: [Systems!]! @relationship(type: "MAINTAINS", direction: OUT, properties: "MaintainsProperties")
	MaintenanceType: [MaintenanceType!]! @relationship(type: "CLASSIFIED_BY", direction: OUT, properties: "ParentOfProperties")
	prioritiy: [MaintenancePrioritiy!]! @relationship(type: "CLASSIFIED_BY", direction: OUT, properties: "ParentOfProperties")
	createdbyUsers: [UserVirtualWorkSpace!]! @relationship(type: "CREATED_BY", direction: OUT, properties: "CreatedByProperties")
	Status: [${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS}!]! @relationship(type: "HAS_STATUS", direction: OUT, properties: "ParentOfProperties")
	Tasks: [Maintenance!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
}

type ${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS_MAIN} @mutation(operations: []) {
	id: Int
	realm: String
	labels: [String]
	name: String
	parentOfStatuses: [${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS_MAIN}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	Statuses: [${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS}!]! @relationship(type: "HAS_STATUS", direction: OUT, properties: "ParentOfProperties")
}

type ${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS} @mutation(operations: []) {
	id: Int
	labels: [String]
	name: String
	language: String
	code: String
	MaintenancePlan: [${Neo4jLabelEnum.MAINTENANCE_MAIN}!]! @relationship(type: "HAS_STATUS", direction: IN, properties: "ParentOfProperties")
}

type FacilityStructures @mutation(operations: []){
	id: Int
	labels: [String]
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String
	updatedAt: DateTime
	willBeAppliedToFacilityStructures: [FacilityStructure!]! @relationship(type: "WILL_BE_APPLIED_TO", direction: OUT, properties: "ParentOfProperties")
	MaintenanceMain: [MaintenanceMain!]! @relationship(type: "MAINTAINS", direction: IN, properties: "MaintainsProperties")
	SupportMain: [SupportMain!]! @relationship(type: "SUPPORTS", direction: IN, properties: "MaintainsProperties")
}
type FacilityStructure @node(labels: ["FacilityStructure","Virtual"]) @mutation(operations: []){
	id: Int
	labels: [String]
	canDelete: Boolean
	createdAt: DateTime
	facilityStructuresWillBeAppliedTo: [FacilityStructures!]! @relationship(type: "WILL_BE_APPLIED_TO", direction: IN, properties: "ParentOfProperties")
	faultsHasVirtualRelation: [FaultTask!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	faultsRequestedspaces: [FaultTask!]! @relationship(type: "REQUESTEDSPACES", direction: IN, properties: "RequestedSpacesProperties")
	isDeleted: Boolean
	key: String
	name: String
	referenceId: String
	referenceLabel: [String]
	facilityStructureOriginal: JSON @customResolver(requires: "referenceId referenceLabel url urlType")	
	type: String
	updatedAt: DateTime
	url: String
	CheckListValue: [${Neo4jLabelEnum.CHECK_LIST_VALUES}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	urlType: String
}

type Components @mutation(operations: []) {
	id: Int
	labels: [String]
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String	
	updatedAt: DateTime
	willBeAppliedToComponents: [Component!]! @relationship(type: "WILL_BE_APPLIED_TO", direction: OUT, properties: "ParentOfProperties")
	MaintenanceMain: [MaintenanceMain!]! @relationship(type: "MAINTAINS", direction: IN, properties: "MaintainsProperties")
	SupportMain: [SupportMain!]! @relationship(type: "SUPPORTS", direction: IN, properties: "MaintainsProperties")
}
type Component @node(labels: ["Component","Virtual"]) @mutation(operations: []) {
	id: Int
	labels: [String]
	canDelete: Boolean
	componentsWillBeAppliedTo: [Components!]! @relationship(type: "WILL_BE_APPLIED_TO", direction: IN, properties: "ParentOfProperties")
	createdAt: DateTime
	faultsHasVirtualRelation: [FaultTask!]! @relationship(type: "HAS_VIRTUAL_RELATION", direction: IN, properties: "HasVirtualRelationProperties")
	faultsRequestedcomponents: [FaultTask!]! @relationship(type: "REQUESTEDCOMPONENTS", direction: IN, properties: "RequestedComponentsProperties")
	isDeleted: Boolean
	key: String
	componentOriginal: JSON @customResolver(requires: "referenceId referenceLabel url urlType")
	name: String 
	referenceId: Int
	referenceLabel: [String]
	type: String
	updatedAt: DateTime
	url: String
	urlType: String
	CheckListValue: [${Neo4jLabelEnum.CHECK_LIST_VALUES}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
}

type Systems @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String!
	trId: String!
	updatedAt: DateTime!
	MaintenanceMain: [MaintenanceMain!]! @relationship(type: "MAINTAINS", direction: IN, properties: "MaintainsProperties")
	willBeAppliedToSystem: [System!]! @relationship(type: "WILL_BE_APPLIED_TO", direction: OUT, properties: "ParentOfProperties")
}

type System @node(labels: ["System","Virtual"]) @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	url: String
	urlType: String
	referenceId: String
	referenceLabel: [String]
	isActive: Boolean
	SystemOriginal: JSON @customResolver(requires: "referenceId referenceLabel url urlType")	
	isDeleted: Boolean
	key: String
	name: String
	owner: String!
	trId: String!
	updatedAt: DateTime!
	#updatedAt: DateTime
	CheckListValue: [${Neo4jLabelEnum.CHECK_LIST_VALUES}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	MaintenanceMain: [MaintenanceMain!]! @relationship(type: "MAINTAINS", direction: IN, properties: "MaintainsProperties")
}

type WorkSpaceMaintenanceMain @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String
	updatedAt: DateTime
	workFlows: [WorkSpaceWorkFlow!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
	workSpaces: [WorkSpace!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
	preveiws: [MaintenancePreview!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
	previewScheduler: [Schedule!]! @relationship(type: "IS_SCHEDULED_WITH", direction: OUT, properties: "IsScheduledWithProperties")
	maintenanceMains: [MaintenanceMain!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	documents:[Document!]! @relationship(type: "ATTACHEDDOCUMENTS", direction: OUT, properties: "ParentOfProperties")
	images:[Image!]! @relationship(type: "ATTACHEDIMAGES", direction: OUT, properties: "ParentOfProperties")
	createdbyUsers: [UserVirtualWorkSpace!]! @relationship(type: "CREATED_BY", direction: OUT, properties: "CreatedByProperties")
}

type MaintenancePreview @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	taskStartDate: DateTime
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String!
	trId: String!
	updatedAt: DateTime!
	WorkSpaceMaintenanceMain: [WorkSpaceMaintenanceMain!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	TaskScheduler: [Schedule!]! @relationship(type: "IS_SCHEDULED_WITH", direction: OUT, properties: "ParentOfProperties")

} 

type Maintenance @node(labels: ["Maintenance","Task"]) @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	createdbyUsers: [UserVirtualWorkSpace!]! @relationship(type: "CREATEDBY", direction: OUT, properties: "CreatedByProperties")
	description: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	owner: String
	requestedbyUsers: [UserVirtualWorkSpace!]! @relationship(type: "REQUESTEDBY", direction: OUT, properties: "RequestedByProperties")
	trId: String
	updatedAt: DateTime
	currentStateStates: [WorkSpaceWorkFlowState!]! @relationship(type: "CURRENT_STATE", direction: OUT, properties: "CurrentStateProperties")
	defaultStateStates: [WorkSpaceWorkFlowState!]! @relationship(type: "DEFAULT_STATE", direction: OUT, properties: "DefaultStateProperties")
	wocategoryWoCategories: [WoCategory!]! @relationship(type: "WOCATEGORY", direction: OUT, properties: "WoCategoryProperties")
	preveiw: [MaintenancePreview!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	ScheduledBy: [Schedule!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "ParentOfProperties")
	MaintenancePlan: [${Neo4jLabelEnum.MAINTENANCE_MAIN}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	CheckListValue: [${Neo4jLabelEnum.CHECK_LIST_VALUES}!]! @relationship(type: "HAS_CHECKED_CHECKLIST", direction: OUT, properties: "ParentOfProperties")
} 
type Image @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	createdAtDate: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String!
	updatedAt: DateTime!
	updatedAtDate: String!
	url: String!
}
type Document @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	createdAtDate: String
	isActive: Boolean
	isDeleted: Boolean
	key: String
	name: String
	owner: String
	trId: String!
	updatedAt: DateTime!
	updatedAtDate: String!
	url: String!
}

type CheckValue @mutation(operations: []) {
	id: Int
	labels: [String!]!
	canDelete: Boolean
	canDisplay: Boolean
	createdAt: DateTime
	value: String
	Maintenance: [Maintenance!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	CheckItem: [CheckItem!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	Component: [Component!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	FacilityStructure: [FacilityStructure!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	System: [System!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
} 



type Schedule @mutation(operations: []) {
	id: Int
	labels: [String!]!
	preview: [MaintenancePreview!]! @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	plan: [WorkSpaceMaintenanceMain!]!  @relationship(type: "IS_SCHEDULED_WITH", direction: IN, properties: "IsScheduledWithProperties")
	CheckList: [CheckList!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
	name: String
	isDeleted: Boolean!
	uid: String
	planStartDate: DateTime @cypher(statement: "return toString(this.startDate) as startDate", columnName: "startDate")
	planendDate: DateTime @cypher(statement: "return toString(this.endDate) as endDate", columnName: "endDate")
	startDate: DateTime @cypher(statement: "return toString(this.startDate) as startDate", columnName: "startDate")
	endDate: DateTime @cypher(statement: "return toString(this.endDate) as endDate", columnName: "endDate")
	recurrenceType: String
	targetLabels: [String]
	hasAccelerator: Boolean
	acceleratorValue: Int
	acceleratorUnit: String
	targetId: Int
	oneTimeOccurrenceDateTime: LocalDateTime
	schedulerHandlerKey: String
	isCompleted: Boolean
	Status: [${Neo4jLabelEnum.MAINTENANCE_MAIN}!]! @relationship(type: "HAS_STATUS", direction: OUT, properties: "ParentOfProperties")
	parentSchedule: [${Neo4jLabelEnum.SCHEDULE}!]! @relationship(type: "PARENT_OF", direction: IN, properties: "ParentOfProperties")
	subSchedule: [${Neo4jLabelEnum.SCHEDULE}!]! @relationship(type: "PARENT_OF", direction: OUT, properties: "ParentOfProperties")
}

type ${Neo4jLabelEnum.MAINTENANCE_MAIN_STATUS} @mutation(operations: []) {
	id: Int
	labels: [String]
	name: String
	MaintenancePlan: [${Neo4jLabelEnum.MAINTENANCE_MAIN}!]! @relationship(type: "HAS_STATUS", direction: IN, properties: "ParentOfProperties")
}


type MaintenancePrioritiy @mutation(operations: []) {
    id: Int
    labels: [String!]!
    isDeleted: Boolean
    realm: String
    name: String
	code: String
    language: String
    MaintenancePlan: [MaintenanceMain!]! @relationship(type: "CLASSIFIED_BY", direction: IN, properties: "ParentOfProperties")
    SupportPlan: [SupportMain!]! @relationship(type: "CLASSIFIED_BY", direction: IN, properties: "ParentOfProperties")
}

interface IsScheduledWithProperties @relationshipProperties {
  isDeleted: Boolean!
  id:Int
  isDone: Boolean!
  dateTime: LocalDateTime!
  status: String
}

${OrganizationModuleSchema}
${ClassificationModuleSchema}
${WorkSpaceModuleSchema}
${WorkFlowModuleSchema}
${TaskModuleSchema}	

${SupportModuleSchema}
${SlaModuleSchema}
${SlaCalendarModuleSchema}

`;
