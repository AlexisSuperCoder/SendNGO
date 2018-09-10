import { Injectable } from '@angular/core';
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { AppConfig } from "../app.config";
import { BaseService } from "./base.service";
import { FormPosterService } from "./formPoster.service";
import { HttpClient } from '@angular/common/http';
import { Advert } from '../models/advert';

@Injectable({
    providedIn: 'root'
  })
export class AdvertService extends BaseService {
  constructor( private config: AppConfig,private _formPosterSvc: FormPosterService) {
    super();
  }

  CreateAdvert(advert:Advert) {

    this._formPosterSvc
    .submitEmployeeForm(this.config.apiUrl + 'api/Trips/CreateAdvert',advert)
    .subscribe(
      data => console.log("data retrieved from server :", data),
      err => console.log("an error occured ", err)
    );
    // let body = JSON.stringify(model);
    // // let headers = new Headers({ "Content-type": "application/json" });
    // const headers = new Headers({ "Content-type": "application/json" });
    // const options = new RequestOptions({ headers: headers });
    // console.log("model submitted from component: ", model);
    // return this.http
    //   .post(this.config.apiUrl + 'api/account/authenticate', body)
    //   .map((res: Response) => {
    //     console.log(res);
    //     return res;
    //   })
    //   .catch(this.handleError);
  }
}
