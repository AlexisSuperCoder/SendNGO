import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class FormPosterService {
  constructor(private _http: Http) {}
  submitEmployeeForm(apiUrl:string, model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers({ "Content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    console.log("model submitted from component: ", model);
    return this._http
      .post(apiUrl, body, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLanguages(): Observable<any> {
    return this._http
      .get("http://localhost:3100/get-languages")
      .map(this.extractLanguages)
      .catch(this.handleError);
  }

  FindTripsByDate(model: any): Observable<any> {
    let body = JSON.stringify(model);
    let headers = new Headers({ "Content-type": "application/json" });
    let options = new RequestOptions({ headers: headers });
    console.log("model submitted from component: ", model);
    return this._http
      .post("http://localhost:33119/api/Trips/FindTrips", body,options)
      .map((res:Response)=>{
          console.log(res);
          return res;
      })
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.fields || {};
  }

  private extractLanguages(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private extractTrips(res: Response) {
    let body = res.json();
    return body.Content || {};
  }
  private handleError(error: any) {
    console.error("post error", error);
    return Observable.throw(error.statusText);
  }
}
