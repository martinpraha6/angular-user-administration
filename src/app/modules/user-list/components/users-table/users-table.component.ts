import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subject } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { getUsers, getUsersLoading } from "../../selectors";
import { UserListLoad } from "src/app/modules/user-list/actions/user-list.actions";
import { User } from "src/app/models/users.model";
import { takeUntil } from "rxjs/operators";

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.scss"]
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ["id", "surname", "firstname", "email"];
  public dataSource;
  public isLoading$: Observable<boolean>;
  private _ngDestroyed$ = new Subject();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getUsers),
        takeUntil(this._ngDestroyed$)
      )
      .subscribe((users: User[]) => {
        this.dataSource = new MatTableDataSource(users);
      });

    this.store.select(getUsers).subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
    });
    this.isLoading$ = this.store.select(getUsersLoading);
    this.dataSource.sort = this.sort;
    this.store.dispatch(new UserListLoad());
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this._ngDestroyed$.next();
    this._ngDestroyed$.complete();
  }
}
