import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent  {

  private authWindow: Window;
  failed: boolean;
  error: string;
  errorDescription: string;
  isRequesting: boolean;
  loading = false;
  returnUrl: string;
  userLoggedIn:boolean =false;
  loggedInUser:string;
  authUser:any;

  launchFbLogin() {
   // this.authWindow = window.open('https://www.facebook.com/v2.12/dialog/oauth?&response_type=token&display=popup&client_id=120097058573578&display=popup&redirect_uri=https://localhost:44371/signin-facebook.html&scope=email',null,'width=600,height=400');    
  }

  constructor(private userService: UserService, private router: Router,private fb: FacebookService) {
    // if (window.addEventListener) {
    //   window.addEventListener("message", this.handleMessage.bind(this), false);
    // } else {
    //    (<any>window).attachEvent("onmessage", this.handleMessage.bind(this));
    // } 

    let initParams: InitParams = {
      appId: '120097058573578',
      xfbml: true,
      version: 'v2.12'
    };
 
    fb.init(initParams);
  } 


  loginWithFacebook(): void {
 
    this.fb.login()
      .then((response: LoginResponse) => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
        
          this.router.navigate([''])
        }
        console.log(response)
      })
      .catch((error: any) => console.error(error));
 
  }

}


