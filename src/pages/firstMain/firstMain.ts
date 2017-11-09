/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {Slides} from 'ionic-angular';
import {CarService} from '../../service/carService';
// import * as $ from 'jquery';

@Component({
  selector: 'first-main-page',
  templateUrl: 'firstMain.html',
  styles: ['firstMain.scss']
})
export class FirstMainPage implements AfterViewInit {
  constructor(private carService: CarService,
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


  @Output() onVoted=new EventEmitter<any>();
  //轮播点击事件
  carouselDetail(i:any): void {
    console.log('d');
    this.onVoted.emit(i);
  }
}
