import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/users.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { getUsersEditing } from "../selectors";
import { UserListSetEditing, InitUserForm } from "../actions/user-list.actions";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  public isEditing$: Observable<boolean>;
  public user: User;
  public faPlus = faPlus;
  public filter: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isEditing$ = this.store.select(getUsersEditing);
  }

  public onClickCreate() {
    this.store.dispatch(new InitUserForm({} as User));
  }

  public editUser(user: User) {
    this.store.dispatch(new UserListSetEditing(true));
    this.user = user;
  }

  public setFilter(filterValue: string): void {
    this.filter = filterValue;
  }
}
