import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent implements AfterViewInit {
  @ViewChild('background_img', { static: true }) public headerImg: ElementRef;
  title = 'paluch';
  mobile: boolean;

  @HostListener('window:resize', [])
  onResize(): void {
    const width = window.innerWidth;
    this.mobile = width < 900;
  }

  constructor() {
    this.onResize();
  }

  ngAfterViewInit(): void {

  }

}
