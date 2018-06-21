import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { LoginFormPage } from '../login-form/login-form';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { ProfilePage } from '../profile/profile';

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
  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController, private facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openModal(item) {
    this.navCtrl.push(LoginFormPage);
    //let modal = this.modalCtrl.create(LoginFormPage,{item:this.item});
    //modal.present();
  }
  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }
  loginWithFB() {
    this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']};
        this.navCtrl.push(ProfilePage,this.userData);
      });
    });
    
  }
}
