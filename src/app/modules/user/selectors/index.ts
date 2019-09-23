import { createSelector } from "@ngrx/store";
import { selectUserDetailState } from "src/app/store";

export const getUser = createSelector(
  selectUserDetailState,
  state => state.user
);

export const getUserLoading = createSelector(
  selectUserDetailState,
  state => state.loading
);

export const getUserIsEditting = createSelector(
  selectUserDetailState,
  state => state.isEditting
);
