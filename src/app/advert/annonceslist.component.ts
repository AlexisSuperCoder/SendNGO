import { Component, OnInit } from "@angular/core";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { FormPosterService } from "../services/formPoster.service";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-annonceslist",
  templateUrl: "./annonceslist.component.html",
  styleUrls: ["./annonceslist.component.css"]
})
export class AnnonceslistComponent implements OnInit {
  bsValue = new Date();
  colorTheme = "theme-blue";
  departcity: string;
  arriveecity: string;
  firstname: string;
  model: any = {};
  primaryLanguage: string;
  languages: any = {};
  Trips: any = {};
  // languages = ["English", "French", "German", "Spanish"];
  hasLanguageError = false;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private _formPosterSvc: FormPosterService) {
    this.model.primaryLanguage = "default";
    // this.model.dateDepart =  new Date();
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme , dateInputFormat: 'YYYY-MM-DD' });

    // this._formPosterSvc
    //   .getLanguages()
    //   .subscribe(
    //     data => (this.languages = data.languages),
    //     err => console.log("get error :", err)
    //   );
  }

  ngOnInit() {}

  displayLanguage() {
    console.log(this.primaryLanguage);
  }

  ValidateLanguage(value) {
    console.log("lang: " + this.model.primaryLanguage);
    if (value === "default") {
      this.hasLanguageError = true;
    } else {
      this.hasLanguageError = false;
    }
  }

  SubmitEmployee(form: NgForm) {
    console.log("submitting form", form.value);

    this.ValidateLanguage(this.model.primaryLanguage);
    if (this.hasLanguageError) {
      return;
    }
    this._formPosterSvc
      .submitEmployeeForm("",this.model)
      .subscribe(
        data => console.log("data retrieved from server :", data),
        err => console.log("an error occured ", err)
      );
  }

  FindTripsByDate(form: NgForm) {
    console.log(this.model.dateDepart);
    console.log("submitting form", form.value);
    this._formPosterSvc.FindTripsByDate(this.model).subscribe(
      data => {
        console.log("data retrieved from server :", data);
        this.Trips = data.json();
        console.log(this.Trips)
      },
      err => console.log("an error occured", err)
    );
  }
}
