import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppointmentToDisain } from '../interfaces/AppointmentToDisain';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private appointmentsUrl = `${environment.apiUrl}/Values/GetAppointmentsByExpert/`;

  httpOptions = {
    headers: new HttpHeaders({ 'content type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  update(appointments:AppointmentToDisain)
  {
    this.http.put(`${environment.apiUrl}/Values/update`,appointments).subscribe()
  }
  getAppointmentsByExpert(id: string): Observable<AppointmentToDisain[]> {
    return this.http.get<AppointmentToDisain[]>(this.appointmentsUrl + id);
  }
  // getCustemerById(id:number):Observable<Customer>
  // {
  //   return this.http.get<Customer>(`${environment.apiUrl}/Values/getCustemerById/`+id);
  // }

  // getCar(id: number): Observable<Car> {
  //   const url = `${this.carsUrl}/${id}`;
  //   return this.http.get<Car>(url);
  // }

  // updateCar(car: Car): Observable<any> {
  //   return this.http.put(this.carsUrl, car, this.httpOptions);
  // }

  // addCar(car: Car): Observable<Car> {
  //   return this.http.post<Car>(this.carsUrl, car, this.httpOptions);
  // }

  // deleteCar(car: Car|number): Observable<Car> {
  //   const id = typeof car === 'number' ? car : car.id; 
  //   const url = `${this.carsUrl}/${id}`;
  //   return this.http.delete<Car>(url, this.httpOptions);
  // }
}
