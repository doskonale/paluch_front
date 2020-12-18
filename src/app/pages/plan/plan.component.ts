import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  pdfSrc = 'assets/documents/PLAN-ROD-Paluch-Miejski.pdf';
  zoom = 0.4;
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
