import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

@Injectable()

export class CustomDateAdapter extends NativeDateAdapter {

  format(date: Date): string {
    date = new Date(date);
    let day = date.getDate() + '';
    let month = (date.getMonth() + 1) + '';
    const year = date.getFullYear();
    month = Number(month) < 10 ? '0' + month : month;
    day = Number(day) < 10 ? '0' + day : day;
    return `${day}-${month}-${year}`;
  }
}


export function DateToISOStringReverse(date: Date): string {
  if (date) {
    date = new Date(date);
    let day = date.getDate() + '';
    let month = (date.getMonth() + 1) + '';
    const year = date.getFullYear();
    month = Number(month) < 10 ? '0' + month : month;
    day = Number(day) < 10 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }
}
