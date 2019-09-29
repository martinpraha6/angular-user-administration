import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import {
  UserUpdate,
  UserListActionTypes,
  UserListLoad,
  UserCreate
} from "../actions/user-list.actions";

@Injectable()
export class UsersEffects {
  @Effect()
  userCreate$: Observable<Action> = this.actions$.pipe(
    ofType<UserCreate>(UserListActionTypes.CREATE_USER),
    map(() => {
      return new UserListLoad();
    })
  );

  @Effect()
  userUpdate$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdate>(UserListActionTypes.UPDATE_USER),
    map(() => {
      return new UserListLoad();
    })
  );

  @Effect()
  userRemove$: Observable<Action> = this.actions$.pipe(
    ofType<UserUpdate>(UserListActionTypes.REMOVE_USER),
    map(() => {
      return new UserListLoad();
    })
  );

  constructor(private actions$: Actions) {}
}
