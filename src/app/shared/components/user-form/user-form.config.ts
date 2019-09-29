import { Validators } from "@angular/forms";

export const UserFormControlsConfig = {
  id: "",
  firstname: ["", [Validators.required, Validators.minLength(3)]],
  surname: ["", [Validators.required, Validators.minLength(5)]],
  email: ["", [Validators.email]],
  createdAt: "",
  modifiedAt: ""
};
