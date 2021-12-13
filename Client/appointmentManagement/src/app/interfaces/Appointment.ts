import { Time } from '@angular/common';

export interface Appointment{
    idaAppointment:number,
    dateAppointment:Date,
    expertInDayId:number,
    timeAppointment:Time,
    customerId:number
}