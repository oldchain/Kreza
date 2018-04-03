import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from "../../app/services/user.service";
import { AlertController } from 'ionic-angular';
import { Response } from '@angular/http';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  
  gender: string[] = ['Male', 'Female', 'Others'];
  submitted: boolean = false;
  user: User = new User();

  formGroup = this.formBuilder.group({
    'firstName': [null, Validators.required],
    'lastName': [null, Validators.required],
    'email': ['', Validators.pattern(/\S+@\S+\.\S+/)],
    'password': ['', Validators.pattern(/^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/)],
    'date': ['', Validators.required],
    'gender': ['', Validators.required]
  });

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
  private formBuilder: FormBuilder, public userService: UserService,
  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.register();
    }
    else
      console.log('err');
      return;
  }

  signup(user: User) {
    let bodyString = JSON.stringify(user);
    return this.http.post("https://kreza.herokuapp.com/api/v1/" + "users", user, {
      headers: { 'Content-Type': 'application/json',body: bodyString }
    }).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'error'));
  }
  
  register() {
    let alertSuccess = this.alertCtrl.create({
      title: 'Signed up Successfully!Welcome to kreza!!',
      subTitle: 'Welcome to kreza!',
      buttons: ['OK']
    });
    let alertFail = this.alertCtrl.create({
      title: 'Sign Up failed!',
      subTitle: 'Something went wrong, please try again',
      buttons: ['OK']
    });
    this.user.firstname = this.formGroup.controls.firstName.value;
    this.user.lastname = this.formGroup.controls.lastName.value;
    this.user.email = this.formGroup.controls.email.value;
    this.user.password = this.formGroup.controls.password.value;
    this.user.gender = this.formGroup.controls.gender.value;
    this.user.birthdate = this.formGroup.controls.date.value;
    console.log(this.user.firstname);
  }


}
