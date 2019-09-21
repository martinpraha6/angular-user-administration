import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "user-list",
    pathMatch: "full"
  },
  {
    path: "user-list",
    loadChildren: () =>
      import("./modules/user-list/user-list.module").then(m => m.UserListModule)
  },
  {
    path: "user/:userId",
    loadChildren: () =>
      import("./modules/user/user.module").then(m => m.UserModule)
  },
  {
    path: "**",
    redirectTo: "user-list"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
