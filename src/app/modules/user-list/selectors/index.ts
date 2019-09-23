import { createSelector } from "@ngrx/store";
import { selectUserListState } from "src/app/store";

export const getUsers = createSelector(
  selectUserListState,
  state => state.users
);

export const getUsersLoading = createSelector(
  selectUserListState,
  state => state.loading
);
