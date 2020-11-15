import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {
  @ViewChild('background_img', { static: true }) public headerImg: ElementRef;
  title = 'paluch';

  constructor() {
  }

  ngAfterViewInit(): void {

  }

}
