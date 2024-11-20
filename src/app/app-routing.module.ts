import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CreateCampaignPageComponent } from './components/create-campaign-page/create-campaign-page.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';


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
