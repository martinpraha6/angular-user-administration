import { Action } from "@ngrx/store";
import { User } from "src/app/models/users.model";
import { mockUsers } from "src/mock/users.mock";

export interface UserListState {
  users: User[];
  filter: string;
  loading: boolean;
}

export const initialState: UserListState = {
  users: mockUsers,
  filter: null,
  loading: false
};

export function userListReducer(
  state: UserListState = initialState,
  action: Action
): UserListState {
  return state;
}
