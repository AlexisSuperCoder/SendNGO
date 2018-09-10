import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppConfig } from './app.config';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AlertComponent } from './directives/alert.component';
import { FacebookloginComponent } from './login/facebooklogin.component';
import { FacebookModule } from 'ngx-facebook';
import { AdvertComponent } from './advert/advert.component';
import { AlertifyService } from './services/alertify.service';
import { AnnonceslistComponent } from './advert/annonceslist.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormPosterService } from './services/formPoster.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    FacebookloginComponent,
    AdvertComponent,
    AnnonceslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    AppConfig,
    UserService,
    AlertService,
    AuthenticationService,
    AlertifyService,
    FormPosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
