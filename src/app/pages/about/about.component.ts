import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  history = [
    { key: 'Powierzchnia całkowita', value: '36,25 ha' },
    { key: 'Długość alejek (całkowita)', value: '14,1 km' },
    { key: 'Liczba działek', value: '1044' },
    { key: 'Powierzchnia działek', value: '32,47 ha' },
    { key: 'Obszar objęty nawodnieniem', value: '22,27 ha' },
    { key: 'Liczba działek z nawodnieniem', value: '641' },
    { key: 'Długość rurociągów wodnych', value: '7,9 km' },
    { key: 'Liczba studni głębinowych', value: '3' },
    { key: 'Wydajność studni (łączna)', value: '30 m3/h' },
    { key: 'Obszar zelektryfikowany', value: '36,25 ha' },
    { key: 'Liczba działek zelektryfikowanych', value: '761' },
    { key: 'Liczba altan działkowych', value: '861' },
    { key: 'Budynki i budowle ogrodowe', value: '4' },
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
