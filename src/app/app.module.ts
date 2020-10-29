import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './core/top-nav/top-nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsComponent } from './pages/news/news.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ParkingComponent } from './pages/parking/parking.component';
import { PlanComponent } from './pages/plan/plan.component';
import { LanduseComponent } from './pages/landuse/landuse.component';
import { HeaderComponent } from './core/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TemplatesComponent } from './pages/templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    ParkingComponent,
    PlanComponent,
    LanduseComponent,
    HeaderComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatProgressBarModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
