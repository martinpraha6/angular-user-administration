import { Validators } from "@angular/forms";

export const UserFormControlsConfig = {
  id: "",
  firstname: ["", [Validators.required, Validators.minLength(8)]],
  surname: ["", [Validators.required, Validators.minLength(8)]],
  email: ["", [Validators.email]],
  createdAt: "",
  modifiedAt: ""
};
