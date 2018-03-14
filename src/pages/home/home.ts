import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BusinessPage } from '../business/business';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: any[];
  initializeItems() {
    this.items = [
      {name: 'Amsterdam',src: '././assets/imgs/buffalo_inner_banner.jpg'},
      {name: 'Bolgaria',src: '././assets/imgs/buffalo_inner_banner.jpg'}
    ];
  }
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  goToBusiness(item: string){
    this.navCtrl.push(BusinessPage,{item});
    console.log(item);
  }
}
