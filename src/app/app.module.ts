import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginComponent } from './components/login/login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LucideAngularModule, Search } from 'lucide-angular';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Search }),
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
