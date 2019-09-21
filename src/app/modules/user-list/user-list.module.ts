import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserListComponent } from "./container/user-list.component";
import { UserListRoutingModule } from "./user-list-routing.module";

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, UserListRoutingModule],
  providers: []
})
export class UserListModule {}
