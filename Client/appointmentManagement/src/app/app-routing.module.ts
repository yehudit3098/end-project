import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ExpertComponent } from './components/expert/expert.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { PageEnterComponent } from './page-enter/page-enter.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  { path: 'expert', component: ExpertComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'enter', component: PageEnterComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
