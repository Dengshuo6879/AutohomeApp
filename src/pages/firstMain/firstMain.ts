/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {Slides} from 'ionic-angular';
import {CarService} from '../../service/carService';

@Component({
  selector: 'first-main-page',
  templateUrl: 'firstMain.html',
  styles:['firstMain.scss']
})
export class FirstMainPage implements AfterViewInit {
  constructor(private carService:CarService){}
  @ViewChild(Slides) slides: Slides;
  slidesList=this.carService.slidesList;
  toolbar=this.carService.toolbar;

  ngAfterViewInit() {
    console.log(toolbar[0])
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.zoom = true;
    this.slides.pager = true;
  }
  tools1(i){
    console.log(i)
  }
  //新闻
  news=this.carService.news;
}
