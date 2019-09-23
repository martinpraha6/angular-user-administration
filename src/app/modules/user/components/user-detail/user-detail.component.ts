import { Component, Input, OnInit } from "@angular/core";

import { User } from "src/app/models/users.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  @Input()
  isEditting: boolean;

  constructor() {}

  ngOnInit(): void {}
}
