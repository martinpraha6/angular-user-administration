import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { mockUsers } from "src/mock/users.mock";
import { Store } from "@ngrx/store";
import { AppState } from "../store";
import { UserListInit } from "../modules/user-list/actions/user-list.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(translate: TranslateService, private store: Store<AppState>) {
    translate.setDefaultLang("en");
    translate.use("en");
  }

  ngOnInit() {
    console.log("load mock");
    this.store.dispatch(new UserListInit(mockUsers));
  }
}
