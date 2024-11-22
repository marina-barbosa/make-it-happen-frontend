import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  LucideAngularModule, Search, Tag, MessageSquare, CreditCard, Receipt, Calendar, CheckCircle, Info, Globe, Phone, ThumbsUp, Heart, Share2, Upload, DollarSign, Link, PlusCircle, MinusCircle, UserRound, TriangleAlert, Plus, BarChart2, Rocket, FileText, Video,
  Gift, Link2, User, Lock, Eye, Bold, Italic, List,
  AlignLeft, AlignCenter, AlignRight, Image, Quote, Minus, History, Bell, ShieldCheck, Copy, Check, Smartphone, QrCode, DoorOpen 
} from 'lucide-angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormRegisterComponent } from './components/auth/form-register/form-register.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { SearchInputComponent } from './components/home/search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/home/card/card.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { ReceiptComponent } from './components/user/receipt/receipt.component';
import { CampaignStatusComponent } from './components/campaign/campaign-status/campaign-status.component';
import { CampaignDetailsComponent } from './components/campaign/campaign-details/campaign-details.component';
import { CreatorProfileComponent } from './components/campaign/creator-profile/creator-profile.component';
import { CampaignFormComponent } from './components/campaign-create/campaign-form/campaign-form.component';
import { UserPageComponent } from './components/user/user-page/user-page.component';
import { CampaignPageComponent } from './components/campaign/campaign-page/campaign-page.component';
import { CreateCampaignPageComponent } from './components/campaign-create/create-campaign-page/create-campaign-page.component';
import { CampaignTitleComponent } from './components/campaign/campaign-title/campaign-title.component';
import { BalanceComponent } from './components/user/balance/balance.component';
import { PrivateDataFormComponent } from './components/user/private-data-form/private-data-form.component';
import { PublicDataFormComponent } from './components/user/public-data-form/public-data-form.component';
import { CriationDashboardComponent } from './components/campaign-create/criation-dashboard/criation-dashboard.component';
import { PixPaymentConfirmationComponent } from './components/donate/pix-payment-confirmation/pix-payment-confirmation.component';
import { DonationFormComponent } from './components/donate/donation-form/donation-form.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ToastComponent } from './toast/toast.component';

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
    BalanceComponent,
    PrivateDataFormComponent,
    PublicDataFormComponent,
    CriationDashboardComponent,
    PixPaymentConfirmationComponent,
    DonationFormComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({
      Search, Tag, MessageSquare, CreditCard, Receipt, Calendar, CheckCircle, Info, Globe, Phone, ThumbsUp, Heart, Share2, Upload, DollarSign, Link, PlusCircle, MinusCircle, UserRound, TriangleAlert, Plus, BarChart2, Rocket, FileText, Video,
      Gift, Link2, User, Lock, Eye, Bold, Italic, List,
      AlignLeft, AlignCenter, AlignRight, Image, Quote, Minus, History, Bell, ShieldCheck, Copy, Check, Smartphone, QrCode, DoorOpen 
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
