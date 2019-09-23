import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./container/user.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  providers: []
})
export class UserModule {}
