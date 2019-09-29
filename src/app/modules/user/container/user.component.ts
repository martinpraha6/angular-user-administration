import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/app/models/users.model";
import { Observable, Subject } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/store";
import {
  getUsers,
  getUsersLoading,
  getUsersEditing
} from "../../user-list/selectors";
import { take, takeUntil } from "rxjs/operators";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit, OnDestroy {
  public user: User;

  public isLoading$: Observable<boolean>;
  public isEditing: boolean;
  private _ngDestroyed$ = new Subject();

  faAngleLeft = faAngleLeft;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getUsersLoading);
    this.store
      .pipe(
        select(getUsersEditing),
        takeUntil(this._ngDestroyed$)
      )
      .subscribe((isEditing: boolean) => {
        this.isEditing = isEditing;
        this.setUser();
      });

    this.setUser();
  }

  public backToUserList() {
    this.router.navigate([`user-list`], { relativeTo: this.route });
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
          this.backToUserList();
        }
      });
  }

  ngOnDestroy(): void {
    this._ngDestroyed$.next();
    this._ngDestroyed$.complete();
  }
}
