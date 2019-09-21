import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./container/user.component";

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: []
})
export class UserModule {}
