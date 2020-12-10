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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ParkingComponent } from './pages/parking/parking.component';
import { PlanComponent } from './pages/plan/plan.component';
import { LanduseComponent } from './pages/landuse/landuse.component';
import { HeaderComponent } from './core/header/header.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { LoginComponent } from './core/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GalleryModule } from 'ng-gallery';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MainComponent } from './pages/main/main.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AuthInterceptor } from './core/services/generic.service';
import { AuthDirective } from './core/directives/auth.directive';
import { FileUploadComponent } from './core/shared/components/file-upload/file-upload.component';
import { DeleteDialogComponent } from './core/shared/components/delete-dialog/delete-dialog.component';
import { FileNamePipe } from './core/shared/pipes/file-name.pipe';
import { ListComponent } from './pages/posts/components/list/list.component';
import { AddDialogComponent } from './pages/posts/components/add-dialog/add-dialog.component';
import { ViewDialogComponent } from './pages/posts/components/view-dialog/view-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { QuillModule } from 'ngx-quill'
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DeletePostDialogComponent } from './pages/posts/components/delete-post-dialog/delete-post-dialog.component';
import { DateTimeTrimmerPipe } from './core/shared/pipes/date-time-trimmer.pipe';
import { ManageDialogComponent } from './pages/posts/components/manage-dialog/manage-dialog.component';
import { CustomPaginator } from './core/shared/custom-pagination';
import { NotificationPanelComponent } from './core/notification-panel/notification-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ParkingComponent,
    PlanComponent,
    LanduseComponent,
    HeaderComponent,
    TemplatesComponent,
    LoginComponent,
    MainComponent,
    GalleryComponent,
    DeleteDialogComponent,
    AuthDirective,
    FileUploadComponent,
    FileNamePipe,
    ListComponent,
    AddDialogComponent,
    ViewDialogComponent,
    DeletePostDialogComponent,
    DateTimeTrimmerPipe,
    ManageDialogComponent,
    NotificationPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatPaginatorModule,
    PdfViewerModule,
    HttpClientModule,
    GalleryModule,
    QuillModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MatPaginatorIntl,
      useValue: CustomPaginator()
    }
  ],
  entryComponents: [
    DeleteDialogComponent,
    AddDialogComponent,
    ManageDialogComponent,
    DeletePostDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
