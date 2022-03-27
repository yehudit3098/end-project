import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dictionary } from '../interfaces/Dictionary';

@Injectable({
  providedIn: 'root',
})
export class statisticsService {
  private userUrl = `${environment.apiUrl}/statistics/`;

  httpOptions = {
    headers: new HttpHeaders({ 'content type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}
  getStaticPro(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.userUrl + '/getStaticPro');
  }
  getStaticAge(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.userUrl + '/getStaticAge');
  }
  getStatic(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.userUrl + '/getStatic');
  }
}
