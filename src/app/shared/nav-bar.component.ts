import { error } from 'util';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'sendzy-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})export class NavBarComponent implements OnInit {
  currentUser: User;
  currentpicture:any;
  AcceptedTypes=["image/jpeg","image/jpg","image/png"]
  LoadPictureMessage:string;
  model:any;
  Currentfile:File;
  currentBinaryFile:File;
  constructor(private userService: UserService, 
    private authenticationService: AuthenticationService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.currentUser=JSON.parse(localStorage.getItem('currentUser'));

    this.router.navigate(['/'])
  }

  updateProfilePicture(form:NgForm){
    let fileToUpload = this.Currentfile;

    let formData:FormData = new FormData();
     formData.append(fileToUpload.name, fileToUpload);
     formData.append("currentUser",JSON.stringify(this.currentUser));
    this.userService.updateProfilePicture(formData)
                    .subscribe(
                     data=>{this.LoadPictureMessage=" la mise à jour est faite";},
                     error=>{this.LoadPictureMessage="Error lors de la mise à jour";}
                        );
  }

  updateProfilePictureBinary(form:NgForm){
    let fileToUpload = this.currentBinaryFile;

    let formData:FormData = new FormData();
     formData.append(fileToUpload.name, fileToUpload);
     formData.append("currentUser",JSON.stringify(this.currentUser));
    this.userService.updateProfilePicture(formData)
                    .subscribe(
                     data=>{this.LoadPictureMessage=" la mise à jour est faite";},
                     error=>{this.LoadPictureMessage="Error lors de la mise à jour";}
                        );
  }

  onFileChange(event) {
    this.LoadPictureMessage ="";
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      var fileSize = file.size;
      var fileType = file.type;
      if(!this.AcceptedTypes.find(x=>x===fileType)){
        this.LoadPictureMessage ="Le format de fichier n'est pas autorisé"+  " \n" + " Les formats autorisés: jpeg, jpg, png";
        return;
      }
      if(Number(fileSize)>3*1024*1024)
      {
        this.LoadPictureMessage ="La taille du fichier depasse la limite autorisé" + "\n" + "Taille du fichier :" + this.precisionRound(Number(fileSize)/(1024*1024),2) + "Mo";
        return;
      }
      this.Currentfile = file;
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      // this.currentpicture = reader.result;
      // };
      this.readFileData(file)
  }
}

precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

readFileData(file:File):void{
  if (file) {

    var reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload=() =>{
      this.currentBinaryFile =reader.result;
    }
}

}

}
