import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import { AppConfig } from "../app.config";
import { User } from "../models/user";
import { BaseService } from "./base.service";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable()
export class UserService extends BaseService implements CanActivate {
  userLoggedIn: boolean = false;
  loggedInUser: string;
  authUser: any;

  constructor(
    private http: Http,
    private config: AppConfig,
    private router: Router
  ) {
    super();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.verifyUrl(url);
  }

  verifyUrl(url: string): boolean {
    if (localStorage.getItem("currentUser")) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  getAll() {
    return this.http
      .get(this.config.apiUrl + "/account", this.jwt())
      .map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http
      .get(this.config.apiUrl + "/account/" + id, this.jwt())
      .map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(
      this.config.apiUrl + "api/account/register",
      user,
      this.jwt()
    );
  }

  update(user: User) {
    return this.http.put(
      this.config.apiUrl + "/account/" + user.id,
      user,
      this.jwt()
    );
  }

  delete(id: number) {
    return this.http.delete(this.config.apiUrl + "/users/" + id, this.jwt());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      let headers = new Headers({
        Authorization: "Bearer " + currentUser.token
      });
      return new RequestOptions({ headers: headers });
    } else {
      let headers = new Headers({ "Access-Control-Allow-Origin": "*" });
      return new RequestOptions({ headers: headers });
    }
  }

  facebookLogin(accessToken: string) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let body = JSON.stringify({ accessToken });
    return this.http
      .post(this.config.apiUrl + "/externalauth/facebook", body, { headers })
      .map(res => res.json())
      .map(res => {
        localStorage.setItem("auth_token", res.auth_token);
        //  this.loggedIn = true;
        //  this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }

  updateProfilePicture(fileToUpdate:any) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers});
    fileToUpdate.append("currentuser",currentUser)
    return this.http.post(
      this.config.apiUrl + "api/account/updateprofilepicture",
      fileToUpdate,
      options
    );
  }
}
