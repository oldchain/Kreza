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
  items: Observable<any>;
  review:any;
  reviews:Observable<any>;
  user:any;
  users:Observable<any>;
  getBusinesses(id:string){
    this.items = this.httpClient.get('https://kreza.herokuapp.com/api/v1/business/'+this.item.id);
    this.items
    .subscribe(data => {
      console.log('my data: ', data)
      this.item = data.results;
      console.log(this.item);
     
    });
  };
  getReviews(id:string){
    this.reviews = this.httpClient.get(' https://kreza.herokuapp.com/api/v1/reviews/business/'+this.item.id+'?page=1&size=500');
    this.reviews
    .subscribe(data => {
      console.log('my data: ', data)
      this.review = data.results;
      console.log(this.review);
      this.review.forEach(element => {
      
      });
    });
  };
  getUser(element:any){
      
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private httpClient : HttpClient) {
    this.item = navParams.get('item');
    this.getBusinesses(this.item.id);
    this.getReviews(this.item.id);
  }
  
  openModal(item) {
    let modal = this.modalCtrl.create(WriteReviewPage,{item:this.item});
    modal.present();
  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad BusinessPage');
  }
  
}

