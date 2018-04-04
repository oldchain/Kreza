import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leaderboard',
  templateUrl: 'leaderboard.html',
})
export class LeaderboardPage {
  items: Observable<any>
  item: any[];
  getLeaderBbard(){
    let loader = this.loadingCtrl.create({
      content: "Getting Leaderboard",
    });
    loader.present();
    this.items = this.httpClient.get('https://kreza.herokuapp.com/api/v1/users/leadBoard');
    this.items
    .subscribe(data => {
      loader.dismiss();
      console.log('my data: ', data)
      this.item = data.result;
      console.log(this.item);
    });
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public httpClient: HttpClient) {
    this.getLeaderBbard();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaderboardPage');
    
  }
  
}
