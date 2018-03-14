import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonRating } from '../components/ion-rating/ion-rating';
import { SplashScreen } from '@ionic-native/splash-screen'; 

import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BusinessPage } from '../pages/business/business';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { WriteReviewPage } from '../pages/write-review/write-review';


import { StatusBar } from '@ionic-native/status-bar';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    BusinessPage,
    SignUpPage,
    LoginPage,
    WriteReviewPage,
    IonRating
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ProfilePage,
    HomePage,
    BusinessPage,
    SignUpPage,
    LoginPage,
    WriteReviewPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
