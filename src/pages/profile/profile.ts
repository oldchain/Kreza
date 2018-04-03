import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MissionsPage } from '../missions/missions';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userData:any;
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.userData = NavParams.get('userData');
  }
  gotomissions(){
    this.navCtrl.push(MissionsPage);
  }
}
