import { Advert } from './../models/advert';
import { Component, OnInit } from '@angular/core';
import { AdvertService } from '../services/advert.service';
import { User } from '../models/user';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
model: any = {};
currentUser: User;
  constructor(private advertService:AdvertService) { }

  ngOnInit() {
  }

CreateAdvert(): void {
  this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
  this.model.UserId=this.currentUser.id;
  this.advertService.CreateAdvert(this.model);
}
}

