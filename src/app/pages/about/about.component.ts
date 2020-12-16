import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  leaders = [
    { date: '1966-1972', person: 'Roman LEMAŃSKI', type: 'Zarząd statutowy' },
    { date: '1972-1976', person: 'Edmund PORĘBIAK', type: 'Zarząd statutowy' },
    { date: '1976-1980', person: 'Jerzy DANIELEWICZ', type: 'Zarząd statutowy' },
    { date: '1980-1996', person: 'Czesław MITROSZEWSKI', type: 'Zarząd statutowy' },
    { date: '1996-1998', person: 'Henryk ADAMSKI', type: 'Zarząd statutowy' },
    { date: '1998-2004', person: 'Zygmunt JĘDRZEJCZYK', type: 'Zarząd statutowy' },
    { date: 'VI-X 2004', person: 'Andrzej ŁUKASIEWICZ', type: 'Zarząd komisaryczny' },
    { date: '2004-2012', person: 'Andrzej ŁUKASIEWICZ', type: 'Zarząd statutowy' },
    { date: 'od 03.2012', person: 'Jan GRALEWICZ', type: 'Zarząd komisaryczny' },
    { date: '2014-2019', person: 'Jan GRALEWICZ', type: 'Zarząd statutowy' },
  ];
  importantDates = [
    {
      date: '1966',
      event: 'utworzenie ogrodu działkowego „PALUCH I” Wydzielenie Ogrodu Miejskiego o 610 działkach i powierzchni 22,32 ha.'
    },
    { date: '1967', event: 'melioracja Ogrodu Miejskiego. ' },
    { date: '1972', event: 'rozparcelowanie części terenów ogólnych Ogrodu. Liczba działek wzrosła do 744. ' },
    { date: '1974', event: 'oficjalna rejestracja POD „PALUCH MIEJSKI”. ' },
    { date: '1976', event: 'decyzja Urzędu m.st. Warszawy i Wojewódzkiego Zarządu POD o przydzieleniu POD „Paluch Miejski” terenu „PALUCH II”. Liczba działek wzrosła do 1024. ' },
    { date: '1977', event: 'przebudowa budynku magazynowego. ' },
    { date: '1979', event: 'wybudowanie nowej studni głębinowej nr 1, – rozpoczęcie budowy „Domu Działkowca”. ' },
    { date: '1980', event: '28 wrzesień – uroczyste otwarcie „Domu Działkowca”. ' },
    { date: '1996', event: 'założenie ogrodu przy „Domu Działkowca”. ' },
    { date: '2004', event: 'wrzesień – ukazuje się pierwszy numer biuletynu ogrodowego „Nasz Ogród”. Komputeryzacja Biura. Zarządu Ogrodu. ' },
    { date: '2005', event: '8. kwiecień – ustawienie na terenie Ogrodu krzyża w hołdzie Papieżowi Janowi Pawłowi II. remont generalny dachu „Domu Działkowca”. budowa nowego wodociągu, zaopatrującego w wodę. południową część Ogrodu. 8. lipiec – zostaje uchwalona nowa ustawa o rodzinnych. ogrodach działkowych. ' },
    { date: '2006', event: 'remont generalny i przebudowa pomieszczeń Biura Zarządu Ogrodu w „Domu Działkowca”.' },
    { date: '28.01.2011', event: 'spalony budynek zarządu ROD' },
    { date: '2011 - 2012', event: ' Naprawa melioracji na ogrodzie' },
    { date: 'IV.2020', event: 'Montaż nowych pomp w studni nr 1 i 4' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
