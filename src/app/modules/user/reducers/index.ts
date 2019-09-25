import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";
import { UserActionTypes, UserActions } from "../actions/user.actions";

export interface UserDetailState {
  user?: User;
  isEditting: boolean;
  loading: boolean;
}

export const initialState: UserDetailState = {
  user: null,
  isEditting: false,
  loading: false
};

export function userDetailReducer(
  state: UserDetailState = initialState,
  action: UserActions
): UserDetailState {
  switch (action.type) {
    case UserActionTypes.INIT_USER_FORM:
      return {
        ...state,
        isEditting: true,
        user: action.payload
      };
    case UserActionTypes.CLOSE_USER_FORM:
      return {
        ...state,
        isEditting: false
      };
  }
  return state;
}
