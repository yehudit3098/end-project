import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = `${environment.apiUrl}/Expert`;

  httpOptions = {
    headers: new HttpHeaders({ 'content type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  Login(userName: string, password: string): Observable<User> {
    return this.http.get<User>(this.userUrl + `/Login/${userName}/${password}`);
  }
}
