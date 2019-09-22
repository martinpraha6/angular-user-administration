import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserListComponent } from "./container/user-list.component";
import { UserListRoutingModule } from "./user-list-routing.module";
import { UsersTableComponent } from "./components/users-table/users-table.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [UserListComponent, UsersTableComponent],
  imports: [CommonModule, UserListRoutingModule, SharedModule],
  providers: []
})
export class UserListModule {}
