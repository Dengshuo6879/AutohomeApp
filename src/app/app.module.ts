import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {StartPage} from '../pages/start/start';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';

import {FirstMainPage} from '../pages/firstMain/firstMain'
import {SecondMainPage} from '../pages/secondMain/secondMain';
import {ThirdMainPage} from '../pages/thirdMain/thirdMain';

import {LanbojiniPage} from '../pages/brands/lanbaojini/lanbojini';
import {FalaliPage} from '../pages/brands/falali/falali';
import {BaoshijiePage} from '../pages/brands/baoshijie/baoshijie';
import {LeikesasiPage} from '../pages/brands/leikesasi/leikesasi';
import {WoerwoPage} from '../pages/brands/woerwo/woerwo';
import {LuhuPage} from '../pages/brands/luhu/luhu';

import {CarService} from '../service/carService';

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    LoginPage,
    HomePage,
    FirstMainPage,
    SecondMainPage,
    ThirdMainPage,
    LanbojiniPage,
    FalaliPage,
    BaoshijiePage,
    LeikesasiPage,
    WoerwoPage,
    LuhuPage,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    LoginPage,
    HomePage,
    FirstMainPage,
    SecondMainPage,
    ThirdMainPage,
    LanbojiniPage,
    FalaliPage,
    BaoshijiePage,
    LeikesasiPage,
    WoerwoPage,
    LuhuPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarService
  ]
})
export class AppModule {
}
