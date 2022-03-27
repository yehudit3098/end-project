import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';
import { Appointment } from '../../interfaces/Appointment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppointmentToDisain } from 'src/app/interfaces/AppointmentToDisain';
import { Customer } from 'src/app/interfaces/Customer';

@UntilDestroy()
@Component({
  selector: 'expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css'],
})
export class ExpertComponent implements OnInit {
  t: Date = new Date();
  public expertId: number;
  // public appointments: AppointmentToDisain[] = [
  //   {
  //     idaAppointment: 1,
  //     dateAppointment: this.t,
  //     customeName:"hc",
  //     customerPhone:"3241234"
  //   },
  // ];
  apoi:Appointment[]=[]
  dataSource: AppointmentToDisain[] = [];
  cus: Customer
  displayedColumns: string[] = [
    'demo-idaAppointment',
    'demo-dateAppointment',
    'demo-dataStart',
     'demo-dataEnd',
    'demo-customeName',   
     'demo-customerPhone',
  ];

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.getAppointmentsByExpert();
   
  ///  this.dataSource = this.sortDate;
 //  this.dataSource=this.appointments


  }


  getAppointmentsByExpert() {    
    this.appointmentsService.getAppointmentsByExpert(sessionStorage.getItem('userId')).pipe(untilDestroyed(this)).subscribe((appointments) => {
    this.dataSource=appointments
      console.log(this.dataSource)
    
    });
   

  }

  f()
  {
    this.dataSource.forEach(element => {
        this.appointmentsService.update(element);
  
    });
  }

  public get sortDate() {
    return this.dataSource.sort((a, b) => {
      return (<any>new Date(a.dateAppointment) - <any>new Date(b.dateAppointment))
    });
  }
}


