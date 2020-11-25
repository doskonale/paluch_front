import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authTokenUrl = 'https://194.59.159.71/api-token-auth/';

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
    console.log(this.http.post<any>(this.authTokenUrl, { username, password }));
    return this.http.post<any>(this.authTokenUrl, { username, password });
  }
}
