import { User } from "src/app/models/users.model";
import { mockUsers } from "src/mock/users.mock";
import {
  UserListActionTypes,
  UserListActions
} from "../actions/user-list.actions";

export interface UserListState {
  users: User[];
  filter: string;
  loading: boolean;
  editing: boolean;
  user?: User;
}

export const initialState: UserListState = {
  users: [],
  filter: null,
  loading: false,
  editing: false
};

export function userListReducer(
  state: UserListState = initialState,
  action: UserListActions
): UserListState {
  let users: User[] = [];
  switch (action.type) {
    case UserListActionTypes.USERS_INIT:
      return {
        ...state,
        users: action.payload
      };
    case UserListActionTypes.SET_EDITING:
      return {
        ...state,
        editing: action.payload
      };
    case UserListActionTypes.CREATE_USER:
      let newUser = { ...action.payload };
      let id = 0;
      state.users.forEach(user => {
        if (user.id > id) {
          id = user.id;
        }
      });
      newUser.id = ++id;
      newUser.createdAt = new Date();
      users = state.users.concat(newUser);
      return {
        ...state,
        users,
        editing: false
      };
    case UserListActionTypes.UPDATE_USER:
      users = state.users.map(user =>
        user.id === action.payload.id ? action.payload : user
      );
      return {
        ...state,
        users,
        editing: false
      };
    case UserListActionTypes.REMOVE_USER:
      users = state.users.filter(user => user.id !== action.payload.id);
      return {
        ...state,
        users
      };
    case UserListActionTypes.INIT_USER_FORM:
      return {
        ...state,
        editing: true,
        user: action.payload
      };
    case UserListActionTypes.CLOSE_USER_FORM:
      return {
        ...state,
        editing: false,
        user: null
      };
  }
  return state;
}
