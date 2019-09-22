import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { User } from "src/app/models/users.model";
import { mockUsers } from "src/mock/users.mock";

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: "app-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.scss"]
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ["id", "surname", "firstname", "email"];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(mockUsers);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
