import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatToolbarModule],
  declarations: [],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MatToolbarModule]
})
export class SharedModule {}
