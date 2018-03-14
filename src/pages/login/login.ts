import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { SignUpPage } from '../sign-up/sign-up';
import { LoginFormPage } from '../login-form/login-form';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  item:object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openModal(item) {
    let modal = this.modalCtrl.create(LoginFormPage,{item:this.item});
    modal.present();
  }
  goToSignUp(){
    this.navCtrl.push(SignUpPage)
    .then(() => {
      const startIndex = this.navCtrl.getActive().index - 1;
      this.navCtrl.remove(startIndex, 1);
    });
  }
}
