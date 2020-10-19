import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewInit {
  @ViewChild('background_img', { static: true }) public headerImg: ElementRef;
  title = 'paluch';

  ngAfterViewInit(): void {
    fromEvent(document.body, 'mousemove').subscribe(e => {
      // console.log(this.headerImg);
      // this.headerImg.nativeElement.style.backgroundPositionY = Math.sqrt(e.clientY) + 'px';
      // this.headerImg.nativeElement.style.backgroundPositionX = Math.sqrt(e.clientX) + 'px';
    });
  }

}
