import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonRating } from '../components/ion-rating/ion-rating';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { HttpClient } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BusinessPage } from '../pages/business/business';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { WriteReviewPage } from '../pages/write-review/write-review';
import { LoginFormPage } from "../pages/login-form/login-form";
import { Facebook } from '@ionic-native/facebook';


import { StatusBar } from '@ionic-native/status-bar';
import { Response, Headers, RequestOptions } from '@angular/http';
import { MissionsPage } from '../pages/missions/missions';
import { AddBusinessPage } from '../pages/add-business/add-business';
import { LeaderboardPage } from '../pages/leaderboard/leaderboard';
import { BusinessesProvider } from '../providers/businesses/businesses';
import { UserService } from "../app/services/user.service";
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { IonicStorageModule,Storage } from '@ionic/Storage';
import { AuthService } from '../app/services/auth.service';
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:8100']
  }
}



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
    IonRating,
    LoginFormPage,
    MissionsPage,
    AddBusinessPage,
    LeaderboardPage,
    
    ],
  imports: [
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpClientModule,
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
    TabsPage,
    LoginFormPage,
    MissionsPage,
    AddBusinessPage,
    LeaderboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    UserService,
    IonicStorageModule,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BusinessesProvider,
    Facebook
  ]
})
export class AppModule {}
