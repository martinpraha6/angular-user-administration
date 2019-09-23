import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/users.model";
import { mockUsers } from "src/mock/users.mock";
import { Observable } from "rxjs";
import { getUserIsEditting, getUserLoading } from "../selectors";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { getUsers } from "../../user-list/selectors";
import { take, filter } from "rxjs/operators";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  public user: User = mockUsers[0];

  public isLoading$: Observable<boolean>;
  public isEditting$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getUserLoading);
    this.isEditting$ = this.store.select(getUserIsEditting);

    this.setUser();
  }

  private setUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("userId"));

    this.store
      .select(getUsers)
      .pipe(take(1))
      .subscribe(users => {
        const selectedUser = users.find(user => user.id === id);
        if (selectedUser) {
          this.user = selectedUser;
        } else {
          this.router.navigate([`user-list`], { relativeTo: this.route });
        }
      });
  }
}
