import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";

export interface UserDetailState {
  user?: User;
  editing: boolean;
  loading: boolean;
}

export const initialState: UserDetailState = {
  user: null,
  editing: false,
  loading: false
};

export function userDetailReducer(
  state: UserDetailState = initialState,
  action: Action
): UserDetailState {
  return state;
}
