import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddBusinessPage } from '../add-business/add-business';
import { LeaderboardPage } from '../leaderboard/leaderboard';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  gotoaddbusiness(){
    this.navCtrl.push(AddBusinessPage);
  }
  gotoleaderboard(){
    this.navCtrl.push(LeaderboardPage);
  }
}
