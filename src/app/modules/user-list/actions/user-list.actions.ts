import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export enum UserListActionTypes {
  LOAD = "[Users] Load the user list",
  LOAD_SUCCESS = "[Users] Loaded the user list successfully",
  LOAD_FAIL = "[Users] Failed the loading of the user list"
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

export type EventsActions =
  | UserListLoad
  | UserListLoadSuccess
  | UserListLoadFail;
