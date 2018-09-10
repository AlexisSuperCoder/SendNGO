import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FacebookloginComponent } from './login/facebooklogin.component';
import { AdvertComponent } from './advert/advert.component';
import { UserService } from './services/user.service';
import { AnnonceslistComponent } from './advert/annonceslist.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'facebooklogin', component: FacebookloginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'advert', component: AdvertComponent,canActivate:[UserService] },
    { path: 'annonceslist', component: AnnonceslistComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);