import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authTokenUrl = 'http://194.59.159.71/api-token-auth/';

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
    return this.http.post<any>(this.authTokenUrl, { username, password });
  }
}
