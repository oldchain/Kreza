import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { WriteReviewPage } from '../write-review/write-review';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";


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
  item:any;
  items: Observable<any>
  getBusinesses(id:string){
    this.items = this.httpClient.get('https://kreza.herokuapp.com/api/v1/business/'+this.item.id);
    this.items
    .subscribe(data => {
      console.log('my data: ', data)
      this.item = data.results;
      console.log(this.item);
     
    });
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private httpClient : HttpClient) {
    this.item = navParams.get('item');
  }
  
  openModal(item) {
    let modal = this.modalCtrl.create(WriteReviewPage,{item:this.item});
    modal.present();
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad BusinessPage');
    this.getBusinesses(this.item.id);
  }
}

