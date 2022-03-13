import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  // toppings = new FormControl();

  days:string[]=['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'Saturday'];
  constructor() { }

  ngOnInit(): void {
  }

}


