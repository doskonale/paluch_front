import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  data = new Subject();

  set(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.data.next(value);
  }

  get(key: string): User {
    const response = localStorage.getItem(key);
    return response ? JSON.parse(response) : null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
    this.data.next(JSON.parse(localStorage.getItem(key)));
  }
}


interface User {
  username: string;
  token: string;
  email: string;
}
