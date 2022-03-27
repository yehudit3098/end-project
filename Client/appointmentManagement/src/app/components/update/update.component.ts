import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { ExpertDTO } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

const EMAIL_CONTROL = 'email';
const PASSWORD_CONTROL = 'password';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  form: FormGroup;
  user: ExpertDTO
  id: number

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() 
  {
    this.user.adressExpert = this.form.value.adress
    this.user.firstNameExpert = this.form.value.firstName
    this.user.lastNameExpert = this.form.value.lastName
    this.user.mailExpert = this.form.value.email
    this.user.phoneExpert = this.form.value.phone
    this.user.passwordExpert = this.form.value.password
    debugger
    this.userService.Update(this.user);
    this.router.navigateByUrl('enter');
  }
   private initForm() {

    this.id = <number><unknown>sessionStorage.getItem('userId');
    sessionStorage.getItem('userId')
    this.userService.getUserById(this.id)
      .subscribe((user) => {
        console.log(user)
        this.user = user
        this.form = this.fb.group({
          firstName: [this.user.firstNameExpert, Validators.required],
          lastName: [this.user.lastNameExpert, Validators.required],
          tz: [this.user.tzExpert, [Validators.required, Validators.minLength(9)]],
          adress: [this.user.adressExpert, Validators.required],
          phone: [this.user.phoneExpert, Validators.required],
          email: [this.user.mailExpert, [Validators.email, Validators.required]],
          password: [this.user.passwordExpert, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
        });

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



