import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  entryExpert(userName: string,userPassword: string){
    console.log("expert entry")
  }
  registerationExpert(userName: string,userTz: string,userPassword: string,userAdress: string,userPhone: string,userMail: string){
    console.log("expert registered")
  }
}
