import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class statisticsService {

  private userUrl = `${environment.apiUrl}/statistics/`;

  httpOptions = {
    headers: new HttpHeaders({ 'content type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

}
