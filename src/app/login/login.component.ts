import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password1:string;
  model: any = {};
  loading = false;
  returnUrl: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService, private alertify: AlertifyService) { }

  ngOnInit() {
        // reset login status
       // this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.alertify.message('les information de connection sont :' + this.model.username + ' ' + this.model.password);
    this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
              
                this.router.navigate([this.returnUrl]);
            },
            error => {
              // if(error.status==401)
              // var errmsg:string="Identifiants incorrects"
                this.alertService.error(error);
                this.loading = false;
            });
       }

}
