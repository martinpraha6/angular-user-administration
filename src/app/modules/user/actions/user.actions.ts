import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export enum UserActionTypes {
  INIT_USER_FORM = "[Users] Initialize the user form",
  CLOSE_USER_FORM = "[Users] Close the user form",

  CREATE_USER = "[Users] Create a new user",
  CREATE_USER_SUCCESS = "[Users] Create a new user was successfully",
  CREATE_USER_FAIL = "[Users] Failed to create a new user",
  UPDATE_USER = "[Users] Update a new user",
  UPDATE_USER_SUCCESS = "[Users] Update a new user was successfully",
  UPDATE_USER_FAIL = "[Users] Failed to update a new user",
  REMOVE_USER = "[Users] Remove a new user",
  REMOVE_USER_SUCCESS = "[Users] Remove a new user was successfully",
  REMOVE_USER_FAIL = "[Users] Failed to remove a new user"
}

export class InitUserForm implements Action {
  readonly type = UserActionTypes.INIT_USER_FORM;

  constructor(public payload: User) {}
}

export class CloseUserForm implements Action {
  readonly type = UserActionTypes.CLOSE_USER_FORM;

  constructor() {}
}

export class UserCreate implements Action {
  readonly type = UserActionTypes.CREATE_USER;

  constructor(public payload: User) {}
}

export class UserCreateSuccess implements Action {
  readonly type = UserActionTypes.CREATE_USER_SUCCESS;

  constructor() {}
}

export class UserCreateFail implements Action {
  readonly type = UserActionTypes.CREATE_USER_FAIL;

  constructor(public payload: { error: Error }) {}
}

export class UserUpdate implements Action {
  readonly type = UserActionTypes.UPDATE_USER;

  constructor(public payload: User) {}
}

export class UserUpdateSuccess implements Action {
  readonly type = UserActionTypes.UPDATE_USER_SUCCESS;

  constructor() {}
}

export class UserUpdateFail implements Action {
  readonly type = UserActionTypes.UPDATE_USER_FAIL;

  constructor(public payload: { error: Error }) {}
}

export class UserRemove implements Action {
  readonly type = UserActionTypes.REMOVE_USER;

  constructor(public payload: User) {}
}

export class UserRemoveSuccess implements Action {
  readonly type = UserActionTypes.REMOVE_USER_SUCCESS;

  constructor() {}
}

export class UserRemoveFail implements Action {
  readonly type = UserActionTypes.REMOVE_USER_FAIL;

  constructor(public payload: { error: Error }) {}
}

export type UserActions =
  | InitUserForm
  | CloseUserForm
  | UserCreate
  | UserCreateSuccess
  | UserCreateFail
  | UserUpdate
  | UserUpdateSuccess
  | UserUpdateFail
  | UserRemove
  | UserRemoveSuccess
  | UserRemoveFail;
