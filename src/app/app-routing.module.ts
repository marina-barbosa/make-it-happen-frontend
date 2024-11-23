import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { CreateCampaignPageComponent } from './components/campaign-create/create-campaign-page/create-campaign-page.component';
import { CampaignPageComponent } from './components/campaign/campaign-page/campaign-page.component';
import { CriationDashboardComponent } from './components/campaign-create/criation-dashboard/criation-dashboard.component';
import { DonationFormComponent } from './components/donate/donation-form/donation-form.component';
import { PixPaymentConfirmationComponent } from './components/donate/pix-payment-confirmation/pix-payment-confirmation.component';
import { authGuard } from './auth/auth.guard';


const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: '', component: HomePageComponent },
      // { path: 'user', component: UserPageComponent, canActivate: [authGuard] },
      { path: 'user', component: UserPageComponent },
      { path: 'campaign/:id', component: CampaignPageComponent },
      { path: 'donation', component: DonationFormComponent },
      { path: 'confirmation', component: PixPaymentConfirmationComponent },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: 'create', component: CriationDashboardComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
