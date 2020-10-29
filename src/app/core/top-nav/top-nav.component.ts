import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  showMenu = false;
  showSubMenu = false;
  showMobileSubMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileSubMenu(): void {
    this.showMobileSubMenu = !this.showMobileSubMenu;
  }
  toggleSubMenu(): void {
    this.showSubMenu = !this.showSubMenu;
  }
  toggleNav(): void {
    this.showMenu = !this.showMenu;
  }
}
