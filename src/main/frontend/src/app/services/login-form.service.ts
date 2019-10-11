import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {
  private logInFormGroup: FormGroup;

  constructor() {
    this.buildLogInFormGroup();
  }

  private buildLogInFormGroup(): void {
    this.logInFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required,
      Validators.minLength(1),
      Validators.maxLength(150)]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
      ])
    });
  }

  public getLigInFormGroup() {
    return this.logInFormGroup;
  }

}
