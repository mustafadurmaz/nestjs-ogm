
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface User {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface IQuery {
    getUserList(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export type JSON = any;
type Nullable<T> = T | null;
