import { LocalStorageService } from './local-storage.service';
import { HttpClient, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const fileUrl = 'https://194.59.159.71/files/';
export const postUrl = 'https://194.59.159.71/posts/';

@Injectable({
  providedIn: 'root'
})

export abstract class GenericService<T> {

  constructor(protected http: HttpClient, protected actionUrl: string) { }

  public get(urlFilter?: string): Observable<T> {
    const url = urlFilter ? this.actionUrl + urlFilter : this.actionUrl;
    console.log(url)
    return this.http.get<T>(url);
  }

  public delete(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }

  public post(data): Observable<T> {
    return this.http.post<T>(this.actionUrl, data);
  }

  public patch(data): Observable<T> {
    return this.http.patch<T>(this.actionUrl + data.id + '/', data);
  }

  public downloadFile(url): any {
    return this.http.get(url, { responseType: 'blob' });
  }

  public postFile(payload): Observable<T> {
    const formData: FormData = new FormData();
    if (payload.file && payload.file.name) {
      formData.append('file', payload.file, payload.file.name);
    }
    if (payload.type) {
      formData.append('type', payload.type);
    }
    if (payload.module) {
      formData.append('module', payload.module);
    }
    if (payload.title) {
      formData.append('title', payload.title);
    }
    if (payload.content) {
      formData.append('content', payload.content);
    }
    if (payload.start_date) {
      formData.append('start_date', payload.start_date);
    }
    if (payload.end_date) {
      formData.append('end_date', payload.end_date);
    }
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
export class PostService extends GenericService<any> {
  constructor(http: HttpClient) {
    super(http, postUrl);
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
