import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  subUsers: Array<SubUser>;
  subUsersConnection: SubUsersConnection;
  subUsersAggregate: SubUserAggregateSelection;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QuerySubUsersArgs = {
  where?: InputMaybe<SubUserWhere>;
  options?: InputMaybe<SubUserOptions>;
};

export type QuerySubUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SubUserWhere>;
  sort?: InputMaybe<Array<InputMaybe<SubUserSort>>>;
};

export type QuerySubUsersAggregateArgs = {
  where?: InputMaybe<SubUserWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createSubUsers: CreateSubUsersMutationResponse;
  deleteSubUsers: DeleteInfo;
  updateSubUsers: UpdateSubUsersMutationResponse;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
  connect?: InputMaybe<UserConnectInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  connectOrCreate?: InputMaybe<UserConnectOrCreateInput>;
};

export type MutationCreateSubUsersArgs = {
  input: Array<SubUserCreateInput>;
};

export type MutationDeleteSubUsersArgs = {
  where?: InputMaybe<SubUserWhere>;
  delete?: InputMaybe<SubUserDeleteInput>;
};

export type MutationUpdateSubUsersArgs = {
  where?: InputMaybe<SubUserWhere>;
  update?: InputMaybe<SubUserUpdateInput>;
  connect?: InputMaybe<SubUserConnectInput>;
  disconnect?: InputMaybe<SubUserDisconnectInput>;
  create?: InputMaybe<SubUserRelationInput>;
  delete?: InputMaybe<SubUserDeleteInput>;
  connectOrCreate?: InputMaybe<SubUserConnectOrCreateInput>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ParentOfProperties = {
  isDeleted: Scalars["Boolean"]["output"];
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateSubUsersMutationResponse = {
  __typename?: "CreateSubUsersMutationResponse";
  info: CreateInfo;
  subUsers: Array<SubUser>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type SubUser = {
  __typename?: "SubUser";
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  parentOfUserAggregate?: Maybe<SubUserUserParentOfUserAggregationSelection>;
  parentOfUser: Array<User>;
  parentOfUserConnection: SubUserParentOfUserConnection;
};

export type SubUserParentOfUserAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SubUserParentOfUserArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SubUserParentOfUserConnectionArgs = {
  where?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SubUserParentOfUserConnectionSort>>;
};

export type SubUserAggregateSelection = {
  __typename?: "SubUserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IntAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
};

export type SubUserEdge = {
  __typename?: "SubUserEdge";
  cursor: Scalars["String"]["output"];
  node: SubUser;
};

export type SubUserParentOfUserConnection = {
  __typename?: "SubUserParentOfUserConnection";
  edges: Array<SubUserParentOfUserRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SubUserParentOfUserRelationship = ParentOfProperties & {
  __typename?: "SubUserParentOfUserRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  isDeleted: Scalars["Boolean"]["output"];
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type SubUsersConnection = {
  __typename?: "SubUsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SubUserEdge>;
};

export type SubUserUserParentOfUserAggregationSelection = {
  __typename?: "SubUserUserParentOfUserAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SubUserUserParentOfUserNodeAggregateSelection>;
  edge?: Maybe<SubUserUserParentOfUserEdgeAggregateSelection>;
};

export type SubUserUserParentOfUserEdgeAggregateSelection = {
  __typename?: "SubUserUserParentOfUserEdgeAggregateSelection";
  id: IntAggregateSelectionNullable;
};

export type SubUserUserParentOfUserNodeAggregateSelection = {
  __typename?: "SubUserUserParentOfUserNodeAggregateSelection";
  id: IntAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateSubUsersMutationResponse = {
  __typename?: "UpdateSubUsersMutationResponse";
  info: UpdateInfo;
  subUsers: Array<SubUser>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  subSlaAggregate?: Maybe<UserSubUserSubSlaAggregationSelection>;
  subSla: Array<SubUser>;
  subSlaConnection: UserSubSlaConnection;
};

export type UserSubSlaAggregateArgs = {
  where?: InputMaybe<SubUserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserSubSlaArgs = {
  where?: InputMaybe<SubUserWhere>;
  options?: InputMaybe<SubUserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type UserSubSlaConnectionArgs = {
  where?: InputMaybe<UserSubSlaConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<UserSubSlaConnectionSort>>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IntAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type UserSubSlaConnection = {
  __typename?: "UserSubSlaConnection";
  edges: Array<UserSubSlaRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type UserSubSlaRelationship = ParentOfProperties & {
  __typename?: "UserSubSlaRelationship";
  cursor: Scalars["String"]["output"];
  node: SubUser;
  isDeleted: Scalars["Boolean"]["output"];
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type UserSubUserSubSlaAggregationSelection = {
  __typename?: "UserSubUserSubSlaAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<UserSubUserSubSlaNodeAggregateSelection>;
  edge?: Maybe<UserSubUserSubSlaEdgeAggregateSelection>;
};

export type UserSubUserSubSlaEdgeAggregateSelection = {
  __typename?: "UserSubUserSubSlaEdgeAggregateSelection";
  id: IntAggregateSelectionNullable;
};

export type UserSubUserSubSlaNodeAggregateSelection = {
  __typename?: "UserSubUserSubSlaNodeAggregateSelection";
  id: IntAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  email: StringAggregateSelectionNullable;
};

export type ParentOfPropertiesCreateInput = {
  isDeleted: Scalars["Boolean"]["input"];
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ParentOfPropertiesSort = {
  isDeleted?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
};

export type ParentOfPropertiesUpdateInput = {
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  id_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ParentOfPropertiesWhere = {
  isDeleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  isDeleted_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  OR?: InputMaybe<Array<ParentOfPropertiesWhere>>;
  AND?: InputMaybe<Array<ParentOfPropertiesWhere>>;
  NOT?: InputMaybe<ParentOfPropertiesWhere>;
};

export type SubUserConnectInput = {
  parentOfUser?: InputMaybe<Array<SubUserParentOfUserConnectFieldInput>>;
};

export type SubUserConnectOrCreateInput = {
  parentOfUser?: InputMaybe<
    Array<SubUserParentOfUserConnectOrCreateFieldInput>
  >;
};

export type SubUserConnectOrCreateWhere = {
  node: SubUserUniqueWhere;
};

export type SubUserConnectWhere = {
  node: SubUserWhere;
};

export type SubUserCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  parentOfUser?: InputMaybe<SubUserParentOfUserFieldInput>;
};

export type SubUserDeleteInput = {
  parentOfUser?: InputMaybe<Array<SubUserParentOfUserDeleteFieldInput>>;
};

export type SubUserDisconnectInput = {
  parentOfUser?: InputMaybe<Array<SubUserParentOfUserDisconnectFieldInput>>;
};

export type SubUserOnCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type SubUserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more SubUserSort objects to sort SubUsers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SubUserSort>>;
};

export type SubUserParentOfUserAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SubUserParentOfUserAggregateInput>>;
  OR?: InputMaybe<Array<SubUserParentOfUserAggregateInput>>;
  NOT?: InputMaybe<SubUserParentOfUserAggregateInput>;
  node?: InputMaybe<SubUserParentOfUserNodeAggregationWhereInput>;
  edge?: InputMaybe<SubUserParentOfUserEdgeAggregationWhereInput>;
};

export type SubUserParentOfUserConnectFieldInput = {
  edge: ParentOfPropertiesCreateInput;
  where?: InputMaybe<UserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<UserConnectInput>>;
};

export type SubUserParentOfUserConnectionSort = {
  node?: InputMaybe<UserSort>;
  edge?: InputMaybe<ParentOfPropertiesSort>;
};

export type SubUserParentOfUserConnectionWhere = {
  OR?: InputMaybe<Array<SubUserParentOfUserConnectionWhere>>;
  AND?: InputMaybe<Array<SubUserParentOfUserConnectionWhere>>;
  NOT?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
  edge?: InputMaybe<ParentOfPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ParentOfPropertiesWhere>;
};

export type SubUserParentOfUserConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: SubUserParentOfUserConnectOrCreateFieldInputOnCreate;
};

export type SubUserParentOfUserConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge: ParentOfPropertiesCreateInput;
};

export type SubUserParentOfUserCreateFieldInput = {
  edge: ParentOfPropertiesCreateInput;
  node: UserCreateInput;
};

export type SubUserParentOfUserDeleteFieldInput = {
  where?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  delete?: InputMaybe<UserDeleteInput>;
};

export type SubUserParentOfUserDisconnectFieldInput = {
  where?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  disconnect?: InputMaybe<UserDisconnectInput>;
};

export type SubUserParentOfUserEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<SubUserParentOfUserEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SubUserParentOfUserEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<SubUserParentOfUserEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type SubUserParentOfUserFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<SubUserParentOfUserConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<SubUserParentOfUserConnectFieldInput>>;
  create?: InputMaybe<Array<SubUserParentOfUserCreateFieldInput>>;
};

export type SubUserParentOfUserNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SubUserParentOfUserNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SubUserParentOfUserNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SubUserParentOfUserNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubUserParentOfUserUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<ParentOfPropertiesUpdateInput>;
};

export type SubUserParentOfUserUpdateFieldInput = {
  where?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<SubUserParentOfUserConnectOrCreateFieldInput>
  >;
  connect?: InputMaybe<Array<SubUserParentOfUserConnectFieldInput>>;
  disconnect?: InputMaybe<Array<SubUserParentOfUserDisconnectFieldInput>>;
  create?: InputMaybe<Array<SubUserParentOfUserCreateFieldInput>>;
  update?: InputMaybe<SubUserParentOfUserUpdateConnectionInput>;
  delete?: InputMaybe<Array<SubUserParentOfUserDeleteFieldInput>>;
};

export type SubUserRelationInput = {
  parentOfUser?: InputMaybe<Array<SubUserParentOfUserCreateFieldInput>>;
};

/** Fields to sort SubUsers by. The order in which sorts are applied is not guaranteed when specifying many fields in one SubUserSort object. */
export type SubUserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
};

export type SubUserUniqueWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SubUserUpdateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  id_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  parentOfUser?: InputMaybe<Array<SubUserParentOfUserUpdateFieldInput>>;
};

export type SubUserWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<SubUserWhere>>;
  AND?: InputMaybe<Array<SubUserWhere>>;
  NOT?: InputMaybe<SubUserWhere>;
  /** @deprecated Use `parentOfUser_SOME` instead. */
  parentOfUser?: InputMaybe<UserWhere>;
  /** @deprecated Use `parentOfUser_NONE` instead. */
  parentOfUser_NOT?: InputMaybe<UserWhere>;
  /** Return SubUsers where all of the related Users match this filter */
  parentOfUser_ALL?: InputMaybe<UserWhere>;
  /** Return SubUsers where none of the related Users match this filter */
  parentOfUser_NONE?: InputMaybe<UserWhere>;
  /** Return SubUsers where one of the related Users match this filter */
  parentOfUser_SINGLE?: InputMaybe<UserWhere>;
  /** Return SubUsers where some of the related Users match this filter */
  parentOfUser_SOME?: InputMaybe<UserWhere>;
  parentOfUserAggregate?: InputMaybe<SubUserParentOfUserAggregateInput>;
  /** @deprecated Use `parentOfUserConnection_SOME` instead. */
  parentOfUserConnection?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  /** @deprecated Use `parentOfUserConnection_NONE` instead. */
  parentOfUserConnection_NOT?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  /** Return SubUsers where all of the related SubUserParentOfUserConnections match this filter */
  parentOfUserConnection_ALL?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  /** Return SubUsers where none of the related SubUserParentOfUserConnections match this filter */
  parentOfUserConnection_NONE?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  /** Return SubUsers where one of the related SubUserParentOfUserConnections match this filter */
  parentOfUserConnection_SINGLE?: InputMaybe<SubUserParentOfUserConnectionWhere>;
  /** Return SubUsers where some of the related SubUserParentOfUserConnections match this filter */
  parentOfUserConnection_SOME?: InputMaybe<SubUserParentOfUserConnectionWhere>;
};

export type UserConnectInput = {
  subSla?: InputMaybe<Array<UserSubSlaConnectFieldInput>>;
};

export type UserConnectOrCreateInput = {
  subSla?: InputMaybe<Array<UserSubSlaConnectOrCreateFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  subSla?: InputMaybe<UserSubSlaFieldInput>;
};

export type UserDeleteInput = {
  subSla?: InputMaybe<Array<UserSubSlaDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  subSla?: InputMaybe<Array<UserSubSlaDisconnectFieldInput>>;
};

export type UserOnCreateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

export type UserRelationInput = {
  subSla?: InputMaybe<Array<UserSubSlaCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
};

export type UserSubSlaAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<UserSubSlaAggregateInput>>;
  OR?: InputMaybe<Array<UserSubSlaAggregateInput>>;
  NOT?: InputMaybe<UserSubSlaAggregateInput>;
  node?: InputMaybe<UserSubSlaNodeAggregationWhereInput>;
  edge?: InputMaybe<UserSubSlaEdgeAggregationWhereInput>;
};

export type UserSubSlaConnectFieldInput = {
  edge: ParentOfPropertiesCreateInput;
  where?: InputMaybe<SubUserConnectWhere>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
  connect?: InputMaybe<Array<SubUserConnectInput>>;
};

export type UserSubSlaConnectionSort = {
  node?: InputMaybe<SubUserSort>;
  edge?: InputMaybe<ParentOfPropertiesSort>;
};

export type UserSubSlaConnectionWhere = {
  OR?: InputMaybe<Array<UserSubSlaConnectionWhere>>;
  AND?: InputMaybe<Array<UserSubSlaConnectionWhere>>;
  NOT?: InputMaybe<UserSubSlaConnectionWhere>;
  node?: InputMaybe<SubUserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SubUserWhere>;
  edge?: InputMaybe<ParentOfPropertiesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ParentOfPropertiesWhere>;
};

export type UserSubSlaConnectOrCreateFieldInput = {
  where: SubUserConnectOrCreateWhere;
  onCreate: UserSubSlaConnectOrCreateFieldInputOnCreate;
};

export type UserSubSlaConnectOrCreateFieldInputOnCreate = {
  node: SubUserOnCreateInput;
  edge: ParentOfPropertiesCreateInput;
};

export type UserSubSlaCreateFieldInput = {
  edge: ParentOfPropertiesCreateInput;
  node: SubUserCreateInput;
};

export type UserSubSlaDeleteFieldInput = {
  where?: InputMaybe<UserSubSlaConnectionWhere>;
  delete?: InputMaybe<SubUserDeleteInput>;
};

export type UserSubSlaDisconnectFieldInput = {
  where?: InputMaybe<UserSubSlaConnectionWhere>;
  disconnect?: InputMaybe<SubUserDisconnectInput>;
};

export type UserSubSlaEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSubSlaEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserSubSlaEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSubSlaEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UserSubSlaFieldInput = {
  connectOrCreate?: InputMaybe<Array<UserSubSlaConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserSubSlaConnectFieldInput>>;
  create?: InputMaybe<Array<UserSubSlaCreateFieldInput>>;
};

export type UserSubSlaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserSubSlaNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserSubSlaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<UserSubSlaNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserSubSlaUpdateConnectionInput = {
  node?: InputMaybe<SubUserUpdateInput>;
  edge?: InputMaybe<ParentOfPropertiesUpdateInput>;
};

export type UserSubSlaUpdateFieldInput = {
  where?: InputMaybe<UserSubSlaConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<UserSubSlaConnectOrCreateFieldInput>>;
  connect?: InputMaybe<Array<UserSubSlaConnectFieldInput>>;
  disconnect?: InputMaybe<Array<UserSubSlaDisconnectFieldInput>>;
  create?: InputMaybe<Array<UserSubSlaCreateFieldInput>>;
  update?: InputMaybe<UserSubSlaUpdateConnectionInput>;
  delete?: InputMaybe<Array<UserSubSlaDeleteFieldInput>>;
};

export type UserUniqueWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserUpdateInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  id_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  id_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  subSla?: InputMaybe<Array<UserSubSlaUpdateFieldInput>>;
};

export type UserWhere = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  /** @deprecated Use `subSla_SOME` instead. */
  subSla?: InputMaybe<SubUserWhere>;
  /** @deprecated Use `subSla_NONE` instead. */
  subSla_NOT?: InputMaybe<SubUserWhere>;
  /** Return Users where all of the related SubUsers match this filter */
  subSla_ALL?: InputMaybe<SubUserWhere>;
  /** Return Users where none of the related SubUsers match this filter */
  subSla_NONE?: InputMaybe<SubUserWhere>;
  /** Return Users where one of the related SubUsers match this filter */
  subSla_SINGLE?: InputMaybe<SubUserWhere>;
  /** Return Users where some of the related SubUsers match this filter */
  subSla_SOME?: InputMaybe<SubUserWhere>;
  subSlaAggregate?: InputMaybe<UserSubSlaAggregateInput>;
  /** @deprecated Use `subSlaConnection_SOME` instead. */
  subSlaConnection?: InputMaybe<UserSubSlaConnectionWhere>;
  /** @deprecated Use `subSlaConnection_NONE` instead. */
  subSlaConnection_NOT?: InputMaybe<UserSubSlaConnectionWhere>;
  /** Return Users where all of the related UserSubSlaConnections match this filter */
  subSlaConnection_ALL?: InputMaybe<UserSubSlaConnectionWhere>;
  /** Return Users where none of the related UserSubSlaConnections match this filter */
  subSlaConnection_NONE?: InputMaybe<UserSubSlaConnectionWhere>;
  /** Return Users where one of the related UserSubSlaConnections match this filter */
  subSlaConnection_SINGLE?: InputMaybe<UserSubSlaConnectionWhere>;
  /** Return Users where some of the related UserSubSlaConnections match this filter */
  subSlaConnection_SOME?: InputMaybe<UserSubSlaConnectionWhere>;
};

export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  id?: IntAggregateInputNullable;
  name?: StringAggregateInputNullable;
  email?: StringAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;
    connect?: UserConnectInput;
    disconnect?: UserDisconnectInput;
    create?: UserCreateInput;
    connectOrCreate?: UserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;
    delete?: UserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface SubUserAggregateSelectionInput {
  count?: boolean;
  id?: IntAggregateInputNullable;
  name?: StringAggregateInputNullable;
  email?: StringAggregateInputNullable;
}

export declare class SubUserModel {
  public find(args?: {
    where?: SubUserWhere;

    options?: SubUserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<SubUser[]>;
  public create(args: {
    input: SubUserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSubUsersMutationResponse>;
  public update(args: {
    where?: SubUserWhere;
    update?: SubUserUpdateInput;
    connect?: SubUserConnectInput;
    disconnect?: SubUserDisconnectInput;
    create?: SubUserCreateInput;
    connectOrCreate?: SubUserConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSubUsersMutationResponse>;
  public delete(args: {
    where?: SubUserWhere;
    delete?: SubUserDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SubUserWhere;

    aggregate: SubUserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SubUserAggregateSelection>;
}

export interface ModelMap {
  User: UserModel;
  SubUser: SubUserModel;
}
