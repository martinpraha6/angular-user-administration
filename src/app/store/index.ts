import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

import { UserListState, userListReducer } from "../modules/user-list/reducers";
import { RouterStateUrl } from "../router/router.state";

export interface AppState {
  userList: UserListState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  userList: userListReducer,
  router: routerReducer
};

export const selectUserListState = createFeatureSelector<
  AppState,
  UserListState
>("userList");

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>("router");
