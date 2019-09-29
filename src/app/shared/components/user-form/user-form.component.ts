import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { User } from "src/app/models/users.model";
import { FormBuilder, FormGroup, FormGroupDirective } from "@angular/forms";
import { AppState } from "src/app/store";
import { Store } from "@ngrx/store";
import { UserFormControlsConfig } from "./user-form.config";
import {
  UserUpdate,
  UserCreate,
  CloseUserForm
} from "src/app/modules/user-list/actions/user-list.actions";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input()
  userFormData: User;

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.userForm = this.fb.group(UserFormControlsConfig);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.userFormData && changes.userFormData.currentValue) {
      if (changes.userFormData.currentValue.id) {
        this.userForm.setValue(changes.userFormData.currentValue);
      } else {
        this.userForm.reset();
      }
    }
  }

  public onSubmit(userFormRef: FormGroupDirective) {
    if (this.userForm.valid) {
      const data = this.userForm.getRawValue();
      if (data.id && data.id !== "") {
        this.store.dispatch(new UserUpdate(data));
      } else {
        this.store.dispatch(new UserCreate(data));
      }
      userFormRef.resetForm();
      this.closeForm();
    }
  }

  public closeForm() {
    this.userForm.reset();
    this.store.dispatch(new CloseUserForm());
  }
}
