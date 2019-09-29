import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { FormatDateTimePipe } from "./pipes/format-date-time.pipe";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { HttpLoaderFactory } from "./helpers/http-loader-factory";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EffectsModule } from "@ngrx/effects";
import { UsersEffects } from "../modules/user-list/effects/users.effects";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([UsersEffects]),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    FontAwesomeModule,

    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [FormatDateTimePipe, UserFormComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
    FormatDateTimePipe,
    UserFormComponent,
    FontAwesomeModule,

    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

    EffectsModule
  ]
})
export class SharedModule {}
