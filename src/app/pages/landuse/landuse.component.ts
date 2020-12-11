import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landuse',
  templateUrl: './landuse.component.html',
  styleUrls: ['./landuse.component.scss']
})
export class LanduseComponent implements OnInit {
  pdfSrc = 'assets/documents/ZAGOSPODAROWANIE-DZIAŁKI.pdf';
  zoom = 0.8;
  constructor() { }

  ngOnInit(): void {
  }

  zoomIn(): void {
    this.zoom += 0.1;
  }
  zoomOut(): void {
    this.zoom -= 0.1;
  }

}
