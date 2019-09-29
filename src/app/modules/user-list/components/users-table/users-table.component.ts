import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  EventEmitter,
  Output
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subject } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/store";
import { getUsers, getUsersLoading, getUsersEditing } from "../../selectors";
import {
  UserListLoad,
  UserRemove
} from "src/app/modules/user-list/actions/user-list.actions";
import { User } from "src/app/models/users.model";
import { takeUntil } from "rxjs/operators";
import { faListUl, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.scss"]
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = [
    "id",
    "surname",
    "firstname",
    "email",
    "buttons"
  ];
  public dataSource: MatTableDataSource<User>;
  public isLoading$: Observable<boolean>;
  public isEditing$: Observable<boolean>;
  private _ngDestroyed$ = new Subject();

  faListUl = faListUl;
  faEdit = faEdit;
  faTrash = faTrash;

  @Output()
  editUser = new EventEmitter<User>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private store: Store<AppState>) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.store
      .pipe(
        select(getUsers),
        takeUntil(this._ngDestroyed$)
      )
      .subscribe((users: User[]) => {
        this.dataSource.data = users;
      });

    this.isLoading$ = this.store.select(getUsersLoading);
    this.isEditing$ = this.store.select(getUsersEditing);
    this.dataSource.sort = this.sort;
    this.store.dispatch(new UserListLoad());
  }

  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public onClickCreate(): void {
    this.editUser.emit({} as User);
  }

  public onClickEdit(user: User): void {
    this.editUser.emit(user);
  }

  public onClickDelete(user: User): void {
    this.store.dispatch(new UserRemove(user));
  }

  ngOnDestroy(): void {
    this._ngDestroyed$.next();
    this._ngDestroyed$.complete();
  }
}
