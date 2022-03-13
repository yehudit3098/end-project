import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Experts_In_Categories } from 'src/app/interfaces/Experts_In_Categories';
import { ExpertDTO } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  user: ExpertDTO;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.profileForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    this.userService
      .Login(this.userName.value, this.profileForm.value.password)
      .pipe(untilDestroyed(this))
      .subscribe((user) => {
        console.log(user);
        if (user) {
          sessionStorage.setItem('userId', user.idExpert);
          this.router
            // .navigate(['expert' , user.idExpert]);
            .navigateByUrl('enter');
          console.log('OK!');
        } else {
          //TODO
          // לעשות רגיסטר וגם יש בעיה בפונקציה בסי שארפ
          console.log('not OK!');

          alert('The user is not exsist! do you want to register?');
        }
      });

    console.warn(
      this.profileForm.value.userName,
      this.profileForm.value.password
    );
  }

  get userName() {
    return this.profileForm?.get('userName');
  }
  get password() {
    return this.profileForm?.get('password');
  }
}
