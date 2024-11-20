import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LucideAngularModule, Search, Tag, MessageSquare, CreditCard, Receipt, Calendar, CheckCircle, Info, Globe, Phone, ThumbsUp, Heart, Share2, Upload, DollarSign, Link, PlusCircle, MinusCircle } from 'lucide-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginComponent } from './components/login/login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { CampaignStatusComponent } from './components/campaign-status/campaign-status.component';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details.component';
import { CreatorProfileComponent } from './components/creator-profile/creator-profile.component';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CampaignPageComponent } from './components/campaign-page/campaign-page.component';
import { CreateCampaignPageComponent } from './components/create-campaign-page/create-campaign-page.component';
import { CampaignTitleComponent } from './components/campaign-title/campaign-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    LoginComponent,
    FormRegisterComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SearchInputComponent,
    CardComponent,
    LayoutComponent,
    AuthLayoutComponent,
    ReceiptComponent,
    CampaignStatusComponent,
    CampaignDetailsComponent,
    CreatorProfileComponent,
    CampaignFormComponent,
    UserPageComponent,
    CampaignPageComponent,
    CreateCampaignPageComponent,
    CampaignTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Search, Tag, MessageSquare, CreditCard, Receipt, Calendar, CheckCircle, Info, Globe, Phone, ThumbsUp, Heart, Share2, Upload, DollarSign, Link, PlusCircle, MinusCircle }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
