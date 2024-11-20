import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { CreateCampaignPageComponent } from './components/form-create/create-campaign-page/create-campaign-page.component';
import { CampaignPageComponent } from './components/campaign/campaign-page/campaign-page.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: '', component: HomePageComponent },
      { path: 'user', component: UserPageComponent },
      { path: 'create', component: CreateCampaignPageComponent },
      { path: 'campaign', component: CampaignPageComponent },
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
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
