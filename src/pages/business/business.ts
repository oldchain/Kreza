import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { WriteReviewPage } from '../write-review/write-review';


/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  item: object;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    this.item = navParams.get('item');
  }
  
  openModal(item) {
    let modal = this.modalCtrl.create(WriteReviewPage,{item:this.item});
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessPage');
  }
}

