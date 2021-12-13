import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments.service';
import { Appointment } from '../../interfaces/Appointment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css'],
})
export class ExpertComponent implements OnInit {
  t: Date = new Date();
  public expertId: number;
  public appointments: Appointment[] = [
    {
      idaAppointment: 1,
      dateAppointment: this.t,
      expertInDayId: 1,
      timeAppointment: null,
      customerId: 1,
    },
  ];
  dataSource = this.appointments;
  displayedColumns: string[] = [
    'demo-idaAppointment',
    'demo-dateAppointment',
    'demo-expertInDayId',
    'demo-customerId',
  ];

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.getAppointmentsByExpert();
  }
  getAppointmentsByExpert() {
    this.appointmentsService
      .getAppointmentsByExpert(sessionStorage.getItem('userId'))
      .pipe(untilDestroyed(this))
      .subscribe((appointments) => {
        this.dataSource = appointments;
        console.log(this.dataSource);
      });
  }
}
