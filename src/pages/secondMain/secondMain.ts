/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {CarService} from '../../service/carService';
import {LanbojiniPage} from '../brands/lanbaojini/lanbojini';

@Component({
  selector: 'second-main-page',
  templateUrl: 'secondMain.html',
  styles: ['secondMain.scss']
})
export class SecondMainPage implements OnInit {
  carList:Array<any>=[];
  type: string = 'suggests';
  lists: any = {};
  firstAlps: Array<any> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private carService: CarService,) {
  }

  ngOnInit() {
    //推荐车型
    this.carList = this.carService.carList;

    //所有车型
    this.carSort(this.carService.allCarList);
  }
  carSort(carList):void{
    this.lists={};
    this.firstAlps=[];
    carList.map((item) => {
      if (this.lists[item.firstALp] == null) {
        this.lists[item.firstALp] = [];
        this.lists[item.firstALp].push(item);
      } else {
        this.lists[item.firstALp].push(item);
      }
    });
    for (var key in this.lists) {
      this.firstAlps.push(key);
    }
  }

  //查看分支
  toBrands(name) {
    switch (name) {
      case '兰博基尼':
        this.navCtrl.push(LanbojiniPage, this.navParams.data = 'd');
        break;
      case '法拉利':
        console.log('f')
        break;
    }
  }

  //汽车搜索
  carName:string='';
  selectedCarList=[];

  searchCar():void{
    if(this.carName!=''){
      this.selectedCarList=[];
      for(var i = 0;i < this.carService.allCarList.length;i++){
        if(this.carName!="" && (this.carService.allCarList[i].name.match(this.carName+".*") || (this.carService.allCarList[i].spell.match(this.carName.toLowerCase()+".*") != null))){
          this.selectedCarList.push(this.carService.allCarList[i]);
        }
      }
      this.carSort(this.selectedCarList);
    }else{
      this.carSort(this.carService.allCarList);
    }

  }
}
