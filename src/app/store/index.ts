import { ActionReducerMap, createFeatureSelector, State } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

import { UserListState, userListReducer } from "../modules/user-list/reducers";
import { UserDetailState, userDetailReducer } from "../modules/user/reducers";
import { RouterStateUrl } from "../router/router.state";

export interface AppState {
  userList: UserListState;
  userDetail: UserDetailState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  userList: userListReducer,
  userDetail: userDetailReducer,
  router: routerReducer
};

export const selectUserListState = createFeatureSelector<
  AppState,
  UserListState
>("userList");

export const selectUserDetailState = createFeatureSelector<
  AppState,
  UserDetailState
>("userDetail");

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>("router");
