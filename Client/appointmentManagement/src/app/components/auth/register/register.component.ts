import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpertInDay } from 'src/app/interfaces/ExpertInDay';
import { ExpertDTO } from 'src/app/interfaces/User';
import { ExpertInDayToAdd } from 'src/app/interfaces/ExpertInDayToAdd';
import { UserService } from 'src/app/services/user.service';
import { ProfessionDTO } from 'src/app/interfaces/ProfessionDTO';
import { CategoryDTO } from 'src/app/interfaces/CategoryDTO'
import { CityDTO } from 'src/app/interfaces/CityDTO';
import { Experts_In_Categories } from 'src/app/interfaces/Experts_In_Categories';
import { AgeBracket } from 'src/app/interfaces/AgeBracket';
import { Time } from '@angular/common';
import { TimeSpan } from 'src/app/interfaces/TimeSpan';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
const EMAIL_CONTROL = 'email';
const PASSWORD_CONTROL = 'password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  user: ExpertDTO;
  pr: ProfessionDTO;
  cityDTO: CityDTO;
  experts_In_Categories: Experts_In_Categories
  ageB: AgeBracket;
  daysC: string[];
  num = 1;
  expertInDay: ExpertInDay[] = [
    { day: 1, dayN: "ראשון", workIs: false, dataStart: null, dataEnd: null },
    { day: 2, dayN: "שני", workIs: false, dataStart: null, dataEnd: null },
    { day: 3, dayN: "שלישי", workIs: false, dataStart: null, dataEnd: null },
    { day: 4, dayN: "רביעי", workIs: false, dataStart: null, dataEnd: null },
    { day: 5, dayN: "חמישי", workIs: false, dataStart: null, dataEnd: null },
    { day: 6, dayN: "שישי", workIs: false, dataStart: null, dataEnd: null },
  ]
  displayedColumns: string[] = [
    'demo-dayN',
    'demo-workIs',
    'demo-dataStart',
    'demo-dataEnd',
  ];
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.user = new ExpertDTO();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {

    var ts = TimeSpan.fromTime(0, this.form.value.duration, 0);
    var ctdo: CategoryDTO;
    var ctid;
    var prid
    var catIds = []
    this.cityDTO = { nameCity: this.form.value.city }
    this.user.adressExpert = this.form.value.adress
    this.user.firstNameExpert = this.form.value.firstName
    this.user.lastNameExpert = this.form.value.lastName
    this.user.tzExpert = this.form.value.tz
    this.user.mailExpert = this.form.value.email
    this.user.phoneExpert = this.form.value.phone
    this.user.passwordExpert = this.form.value.password
    this.userService.City(this.cityDTO).subscribe((c) => {
      ctid = c
    });
    this.pr = { nameProfession: this.form.value.professions }
    this.userService.Profession(this.pr).subscribe((a) => {
      prid = a;
      var b = this.form.value.categories.split(',')
      b.forEach(element => {
        ctdo = { nameCategory: element, professionId: <number><unknown>prid }
        this.userService.Category(ctdo).subscribe((cat) => {
          catIds[catIds.length] = cat
        })
      })
      this.userService.Register(this.user).subscribe((a) => {
        this.user = a
        this.expertInDay.forEach(element => {
          if (element.workIs == true) {
            var a: ExpertInDayToAdd = { expertId: <number><unknown>this.user.idExpert, dayId: element.day, startTime: element.dataStart, endTime: element.dataEnd };
            this.userService.addExpertInDay(a);
          }
        })
        this.ageB = { nameAgeBracket: this.form.value.ageBracket, fromAge: this.form.value.fromAge, toAge: this.form.value.toAge }
        let subscriptions: any[] = [];
        this.userService.AgeBracketAdd(this.ageB).subscribe((a) => {
          catIds.forEach(element => {
            this.experts_In_Categories = { ageBracketId: a, cityId: ctid, expertId: <number><unknown>this.user.idExpert, categoryId: element, professionId: prid, careLength: this.form.value.duration }
            subscriptions.push(this.userService.Experts_In_Categories(this.experts_In_Categories));
            // this.userService.Experts_In_Categories(this.experts_In_Categories).subscribe();
          });
          forkJoin(subscriptions).subscribe(() => {
            this.userService.FullApp(+this.user.idExpert);
            this.router.navigate(['payment']);
          });
        });
      });
    });
  }
  private initForm() {
    this.form = this.fb.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      tz: [, [Validators.required, Validators.minLength(9)]],
      adress: [, Validators.required],
      city: [, Validators.required],
      phone: [, Validators.required],
      email: [, [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      professions: [, Validators.required],
      duration: [, [Validators.required, Validators.min(1)]],
      fromAge: [, [Validators.required, Validators.min(0)]],
      toAge: [, [Validators.required, Validators.min(0), Validators.max(120)]],
      ageBracket: [, Validators.required],
      categories: [, Validators.required]
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
  } get city() {
    return this.form?.get('city');
  }
  get phone() {
    return this.form?.get('phone');
  }
  get professions() {
    return this.form?.get('professions');
  }
  get duration() {
    return this.form?.get('duration');
  }
  get fromAge() {
    return this.form?.get('fromAge');
  }
  get toAge() {
    return this.form?.get('toAge');
  }
  get categories() {
    return this.form?.get('categories');
  }
  get ageBracket() {
    return this.form?.get('ageBracket');
  }

}



