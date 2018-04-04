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
  review:any[] = new Array();
  reviews:Observable<any>;
  user:any[] = new Array();
  users:Observable<any>;
  reviewers:any[] = new Array();
  reviewer:Observable<any>;
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
      this.user.push(element.user_id.toString());
      });
      console.log(this.user)
      this.user.forEach(element => {
        this.reviewer = this.httpClient.get('https://kreza.herokuapp.com/api/v1/users/'+element);
        this.reviewer
        .subscribe(data => {
          this.reviewers.push(data.user);
          console.log('545434523',this.reviewers);
          console.log('545434523',this.review);
        });
      });
    });
  };

  getUser(element:any,array:any){
    let list:any[] = new Array();

    console.log('list', list);
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

