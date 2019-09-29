import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export enum UserListActionTypes {
  USERS_INIT = "[Users] Initialize user list",

  LOAD = "[Users] Load the user list",
  LOAD_SUCCESS = "[Users] Loaded the user list successfully",
  LOAD_FAIL = "[Users] Failed the loading of the user list",

  SET_EDITING = "[Users] Set editing",

  CREATE_USER = "[Users] Create a new user",
  UPDATE_USER = "[Users] Update a user",
  REMOVE_USER = "[Users] Remove a user",

  INIT_USER_FORM = "[Users] Initialize the user form",
  CLOSE_USER_FORM = "[Users] Close the user form"
}

export class UserListInit implements Action {
  readonly type = UserListActionTypes.USERS_INIT;

  constructor(public payload: User[]) {}
}

export class UserListLoad implements Action {
  readonly type = UserListActionTypes.LOAD;

  constructor() {}
}

export class UserListLoadSuccess implements Action {
  readonly type = UserListActionTypes.LOAD_SUCCESS;

  constructor(public payload: User[]) {}
}

export class UserListLoadFail implements Action {
  readonly type = UserListActionTypes.LOAD_FAIL;

  constructor(public payload: { error: Error }) {}
}

export class UserListSetEditing implements Action {
  readonly type = UserListActionTypes.SET_EDITING;

  constructor(public payload: boolean) {}
}

export class UserCreate implements Action {
  readonly type = UserListActionTypes.CREATE_USER;

  constructor(public payload: User) {}
}

export class UserUpdate implements Action {
  readonly type = UserListActionTypes.UPDATE_USER;

  constructor(public payload: User) {}
}

export class UserRemove implements Action {
  readonly type = UserListActionTypes.REMOVE_USER;

  constructor(public payload: User) {}
}

export class InitUserForm implements Action {
  readonly type = UserListActionTypes.INIT_USER_FORM;

  constructor(public payload: User) {}
}

export class CloseUserForm implements Action {
  readonly type = UserListActionTypes.CLOSE_USER_FORM;

  constructor() {}
}

export type UserListActions =
  | UserListInit
  | UserListLoad
  | UserListLoadSuccess
  | UserListLoadFail
  | UserListSetEditing
  | UserCreate
  | UserUpdate
  | UserRemove
  | InitUserForm
  | CloseUserForm;
