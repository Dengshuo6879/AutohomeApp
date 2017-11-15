/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, ViewChild} from '@angular/core';
import {Slides,NavController} from 'ionic-angular';
import {CarService} from '../../service/carService';
// import * as $ from 'jquery';
import {CarouselPageOne} from '../carouselDetail/carouselOne/carouselOne';

@Component({
  selector: 'first-main-page',
  templateUrl: 'firstMain.html',
  styles: ['firstMain.scss']
})
export class FirstMainPage {
  constructor(private carService: CarService,
              private navCtrl: NavController,
  ) {
  }

  @ViewChild(Slides) slides: Slides;
  slidesList = this.carService.slidesList;
  toolbar = this.carService.toolbar;

  ngAfterViewInit() {
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.zoom = true;
    this.slides.pager = true;

  }

  tools1(i) {
    console.log(i)
  }

  //新闻
  news = this.carService.news;

  //新闻点赞
  UpCollect(type, index): void {
    switch (type) {
      case 'up':
        this.news[index].isUp = !this.news[index].isUp;
        if (this.news[index].isUp) {
          this.news[index].up++;
        } else {
          this.news[index].up--;
        }
        break;
      case 'collect':
        this.news[index].isCollect = !this.news[index].isCollect;
        if (this.news[index].isCollect) {
          this.news[index].collect++;
        } else {
          this.news[index].collect--;
        }
        break;
    }
  };


  //轮播点击事件
  carouselDetail(): void {
    this.navCtrl.push(CarouselPageOne)
  }
}
