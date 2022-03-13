import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgeBracket } from '../interfaces/AgeBracket';
import { CategoryDTO } from '../interfaces/CategoryDTO';
import { CityDTO } from '../interfaces/CityDTO';
import { ExpertInDay } from '../interfaces/ExpertInDay';
import { ExpertInDayToAdd } from '../interfaces/ExpertInDayToAdd';
import { Experts_In_Categories } from '../interfaces/Experts_In_Categories';
import { ProfessionDTO } from '../interfaces/ProfessionDTO';
import { ExpertDTO } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private userUrl = `${environment.apiUrl}/Expert/`;

  httpOptions = {
    headers: new HttpHeaders({ 'content type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  Update(user:ExpertDTO)
  {
    this.http.put(this.userUrl+`Update`,user).subscribe();
  }
  getUserById(id: number):Observable<ExpertDTO> {
  return this.http.get<ExpertDTO>(this.userUrl+`getUserById/${id}`);
  }
  Login(userName: string, password: string): Observable<ExpertDTO> {
    return this.http.get<ExpertDTO>(this.userUrl + `Login/${userName}/${password}`);
  }
  Register(user:ExpertDTO):Observable<ExpertDTO>
  {   return this.http.post<ExpertDTO>(this.userUrl+`Register`,user);
  }
  addExpertInDay(expertInDay:ExpertInDayToAdd)
  {
    this.http.post(`${environment.apiUrl}/Values/addExpertInDay`,expertInDay).subscribe();
  }
  Category(categoryDTO:CategoryDTO):Observable<number>
  {
   return this.http.post<number>(`${environment.apiUrl}/Values/addCategory`,categoryDTO);
  }
  Profession(profession:ProfessionDTO):Observable<number>
  {
  return this.http.post<number>(`${environment.apiUrl}/Values/addProfession`,profession);
  }
  City(city:CityDTO):Observable<number>
  {
  return this.http.post<number>(`${environment.apiUrl}/Values/addCity`,city);
  }
  Experts_In_Categories(e:Experts_In_Categories):Observable<number>
  {
    var time= e.careLength;
    return this.http.post<number>(`${environment.apiUrl}/Values/addExperts_In_Categories/${time}`,e)
  }
  AgeBracketAdd(e:AgeBracket):Observable<number>
  {
    return this.http.post<number>(`${environment.apiUrl}/Values/AgeBracketAdd`,e)
  }
  FullApp(expertId:number)
  {
    this.http.post(`${environment.apiUrl}/Values/AddAppointment`,expertId).subscribe();
  }
}
