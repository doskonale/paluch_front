import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanduseComponent } from './pages/landuse/landuse.component';
import { NewsComponent } from './pages/news/news.component';
import { ParkingComponent } from './pages/parking/parking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PlanComponent } from './pages/plan/plan.component';

const routes: Routes = [
  { path: 'aktualnosci', component: NewsComponent },
  { path: 'oplaty', component: PaymentComponent },
  { path: 'o_nas', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'parking', component: ParkingComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'zagospodarowanie_terenu', component: LanduseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
