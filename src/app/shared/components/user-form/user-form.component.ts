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
import {
  UserUpdate,
  UserCreate,
  CloseUserForm
} from "src/app/modules/user/actions/user.actions";
import { UserFormControlsConfig } from "./user-form.config";

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

  public onSubmit(userFormRef: FormGroupDirective) {}

  public closeForm() {
    this.store.dispatch(new CloseUserForm());
  }
}
