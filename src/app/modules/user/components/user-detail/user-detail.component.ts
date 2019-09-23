import { Component, Input, OnInit } from "@angular/core";

import { User } from "src/app/models/users.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  @Input()
  isEditting: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {}
}
