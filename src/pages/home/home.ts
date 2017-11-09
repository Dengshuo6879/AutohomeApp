/**
 * Created by Dengshuo on 2017-11-03.
 */
import {Component} from '@angular/core';
import {FirstMainPage} from '../firstMain/firstMain';
import {SecondMainPage} from '../secondMain/secondMain';
import {ThirdMainPage} from '../thirdMain/thirdMain';

import {NavController} from 'ionic-angular';
import {CarouselPageOne} from '../carouselDetail/carouselOne/carouselOne';

@Component({
  template: `
    <ion-tabs class="tabs-icon">
      <ion-tab tabIcon="home" tabTitle="首页" [root]="root1">
      </ion-tab>
      <ion-tab tabIcon="car" tabTitle="选车" [root]="root2"></ion-tab>
      <ion-tab tabIcon="pin" tabTitle="地图" [root]="root3"></ion-tab>
    </ion-tabs>
  `
})
export class HomePage{
  constructor(public navCtrl:NavController){}
  root1=FirstMainPage;
  root2=SecondMainPage;
  root3=ThirdMainPage;

    /*this.navCtrl.push(CarouselPageOne);*/
  onVoted(i:any):void{
    console.log(i)
  }
}
