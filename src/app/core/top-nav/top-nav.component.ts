import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.showMenu = !this.showMenu;
  }
}
