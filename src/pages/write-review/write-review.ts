import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


/**
 * Generated class for the WriteReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
})
export class WriteReviewPage {
  item:object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.item = navParams.get('item');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteReviewPage');
  }
  starClicked(value){
    console.log("Rated :", value);
 }
}
