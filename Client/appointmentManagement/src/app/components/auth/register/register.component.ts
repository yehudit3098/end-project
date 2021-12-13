import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const EMAIL_CONTROL = 'email';
const PASSWORD_CONTROL = 'password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {console.log(this.form.get('password').value);
  }

  private initForm() {
    this.form = this.fb.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      tz: [, [Validators.required, Validators.minLength(9)]],
      adress: [, Validators.required],
      phone: [, Validators.required],
      email: [, [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.form?.get(EMAIL_CONTROL);
  }
  get password() {
    return this.form?.get(PASSWORD_CONTROL);
  }
  get firstName() {
    return this.form?.get('firstName');
  }
  get lastName() {
    return this.form?.get('lastName');
  }
  get tz() {
    return this.form?.get('tz');
  }
  get adress() {
    return this.form?.get('adress');
  }
  get phone() {
    return this.form?.get('phone');
  }
}
