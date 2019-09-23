import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { UserListState, userListReducer } from "../modules/user-list/reducers";
import { UserDetailState, userDetailReducer } from "../modules/user/reducers";

export interface AppState {
  userList: UserListState;
  userDetail: UserDetailState;
}

export const reducers: ActionReducerMap<AppState> = {
  userList: userListReducer,
  userDetail: userDetailReducer
};

export const selectUserListState = createFeatureSelector<
  AppState,
  UserListState
>("userList");

export const selectUserDetailState = createFeatureSelector<
  AppState,
  UserDetailState
>("userDetail");
