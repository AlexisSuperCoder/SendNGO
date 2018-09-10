import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';
import { error } from 'util';
import { BaseService } from './base.service';

@Injectable()
export class AuthenticationService extends BaseService {
    constructor(private http: Http, private config: AppConfig) {
        super();
     }

    login(username: string, password: string) {
        const headers=new Headers({'Content-type':'application/json'});
        const options = new RequestOptions({headers:headers});
        return this.http.post(this.config.apiUrl + 'api/account/authenticate', { username: username, password: password },options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));

                }
            }).catch(this.handleError);
        
        
        // ).pipe(
        //         catchError(this.handleError)
        //     );
    }

    facebooklogin() {
        return this.http.get(this.config.apiUrl + 'api/Account/FacebookLogin')
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
               
            }).catch(this.handleError);
            
            // .pipe(
            //     catchError(this.handleError(error))
            // );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


    loadprofilePicture(){

    }

    downloadFile(data: Response){
        var blob = new Blob([data], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
      }
      
    // private handleError(err: HttpErrorResponse) {
    //     return (err: any) => {
    //         let errMsg = `failed to log in`;

    //         if (err instanceof HttpErrorResponse) {
    //             // you could extract more info about the error if you want, e.g.:
    //             console.log(`status: ${err.status}, ${err.statusText}`);
    //             // errMsg = ...
    //         }
    //         return Observable.throw(errMsg);
    //     }
    // }
}