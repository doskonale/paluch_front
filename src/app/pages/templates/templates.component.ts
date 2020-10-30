import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  urls = [
    {name: 'Druki do pobrania', url: 'http://mazowiecki.pzd.pl/prawo/wzory-dokumentow/'},
    {name: 'Statut w PZD', url: 'http://pzd.pl/statut.html'},
    {name: 'Ustawa o ROD', url: 'http://pzd.pl/ustawa.html'},
    {name: 'Regulamin ROD', url: 'http://mazowiecki.pzd.pl/prawo/regulamin/'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
