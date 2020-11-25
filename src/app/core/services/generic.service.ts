import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth.service';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const fileUrl = 'https://194.59.159.71/files/';

@Injectable({
  providedIn: 'root'
})

export abstract class GenericService<T> {

  constructor(protected http: HttpClient, protected actionUrl: string) { }

  public get(urlFilter?: string): Observable<T> {
    const url = urlFilter ? this.actionUrl + urlFilter : this.actionUrl;
    return this.http.get<T>(url);
  }

  public delete(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }

  public post(data): Observable<T> {
    return this.http.post<T>(this.actionUrl, data);
  }

  public postFile(payload): Observable<T> {
    const formData: FormData = new FormData();
    formData.append('file', payload.file, payload.file.name);
    formData.append('type', payload.type);
    return this.http.post<T>(this.actionUrl, formData);
  }
}

@Injectable()
export class FileService extends GenericService<any> {
  constructor(http: HttpClient) {
    super(http, fileUrl);
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const authUser = this.localStorageService.get('authUser');
    if (authUser) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Token ${authUser.token}`
        }
      });
      return next.handle(authReq);
    }
    else { return next.handle(req); }
  }
}
