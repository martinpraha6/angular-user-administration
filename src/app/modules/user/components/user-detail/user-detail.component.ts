import { Component, Input, OnInit } from "@angular/core";

import { User } from "src/app/models/users.model";
import { Observable } from "rxjs";
import { AppState } from "src/app/store";
import { Store } from "@ngrx/store";
import { InitUserForm } from "src/app/modules/user-list/actions/user-list.actions";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  @Input()
  isEditing: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onEditClick(user: User) {
    this.store.dispatch(new InitUserForm(this.user));
  }
}
