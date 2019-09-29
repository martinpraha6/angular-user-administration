import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

import { User } from "src/app/models/users.model";
import { AppState } from "src/app/store";
import { Store } from "@ngrx/store";
import {
  InitUserForm,
  UserRemove
} from "src/app/modules/user-list/actions/user-list.actions";

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

  @Output()
  userRemoved = new EventEmitter<User>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onEditClick(user: User) {
    this.store.dispatch(new InitUserForm(this.user));
  }

  onRemoveClick(user: User) {
    this.store.dispatch(new UserRemove(this.user));
    this.userRemoved.emit(user);
  }
}
