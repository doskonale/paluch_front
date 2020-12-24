import { ListComponent } from './pages/posts/components/list/list.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanduseComponent } from './pages/landuse/landuse.component';
import { MainComponent } from './pages/main/main.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { PlanComponent } from './pages/plan/plan.component';
import { TemplatesComponent } from './pages/templates/templates.component';
import { LawDocComponent } from './pages/law-doc/law-doc.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'aktualnosci', component: ListComponent },
  { path: 'oplaty', component: TemplatesComponent },
  { path: 'historia_ogrodu', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'parking', component: ParkingComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'prawo_i_dokumenty', component: LawDocComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'zagospodarowanie_terenu', component: LanduseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }