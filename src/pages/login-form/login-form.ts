import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the LoginFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-form',
  templateUrl: 'login-form.html',
})
export class LoginFormPage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  login(un,pw){
    if(un=="admin" && pw=="admin"){
      this.viewCtrl.dismiss()
      this.navCtrl.push(ProfilePage);
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFormPage');
  }

}
