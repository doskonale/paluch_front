import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  pdfSrc = 'assets/PLAN-ROD-Paluch-Miejski.pdf';

  constructor() { }

  ngOnInit(): void {
  }

}
