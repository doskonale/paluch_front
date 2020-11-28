import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  fileData = new BehaviorSubject<object>({});

  set(file: object): void {
    this.fileData.next(file);
  }

  get(): any {
    return this.fileData.asObservable();
  }

  constructor() { }
}
