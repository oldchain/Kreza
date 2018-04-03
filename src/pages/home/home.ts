import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusinessPage } from '../business/business';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {

  searchQuery: string = '';
  items: Observable<any>
  business: any[];
  filtered:any[];
  getBusinesses(){
    let loader = this.loadingCtrl.create({
      content: "Getting Businesses",
    });
    loader.present();
    this.items = this.httpClient.get('https://kreza.herokuapp.com/api/v1/business/search');
    this.items
    .subscribe(data => {
      loader.dismiss();
      console.log('my data: ', data)
      this.business = data.results;
      this.filtered = data.results;
      console.log(this.business);
      console.log(this.filtered);
    });
  };
  initializeItems(){ 
    this.filtered = this.business;

  }
  constructor(public navCtrl: NavController, private httpClient : HttpClient,public loadingCtrl: LoadingController) {
    this.getBusinesses();
  }

  getItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.filtered = this.filtered.filter(function(item) {
        return item.business_name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  goToBusiness(item: string){
    this.navCtrl.push(BusinessPage,{item});
    console.log(item);
  }
}
