import { Time } from "@angular/common"

export interface AppointmentToDisain{
    idExpertrInDay:number,
    idaAppointment:number,
    dateAppointment:Date,
    startTime:Time,
    endTime:Time,
    customeName:string,
    customerPhone:string
}