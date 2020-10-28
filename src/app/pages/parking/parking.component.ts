import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.scss']
})
export class ParkingComponent implements OnInit {
  pdfSrc = 'assets/documents/Całkowity-zakaz-parkowania-w-alejkach-ogrodowych-2.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
