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
import { TemplatesComponent } from './pages/templates/templates.component';
import { LoginComponent } from './core/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryModule } from 'ng-gallery';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MainComponent } from './pages/main/main.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

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
    LoginComponent,
    MainComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    PdfViewerModule,
    HttpClientModule,
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
