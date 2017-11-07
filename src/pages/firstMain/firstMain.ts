/**
 * Created by Dengshuo on 2017-11-04.
 */
/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {Slides} from 'ionic-angular';


@Component({
  selector: 'first-main-page',
  templateUrl: 'firstMain.html',
  styles:['firstMain.scss']
})
export class FirstMainPage implements AfterViewInit {
  @ViewChild(Slides) slides: Slides;
  slidesList = ['//www2.autoimg.cn/newsdfs/g17/M14/C1/20/368x184_0_autohomecar__wKgH2Fn5mbaAaYRcAAruOEFsKko940.jpg', '//qnwww2.autoimg.cn/newsdfs/g10/M04/CC/73/autohomecar__wKjBzVn7_--AS0ayAAa6On3CRaA678.jpg?imageView2/1/w/736/h/368/format/webp', '//qnwww2.autoimg.cn/newsdfs/g14/M06/D0/BE/autohomecar__wKgH5Fn9v96Afg73AAcFzCrPDs8979.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g8/M07/CA/66/autohomecar__wKgHz1n8TuWALxXXAAIawGVake8202.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g5/M00/C7/DF/autohomecar__wKgHzFn8UK6ADAZ3AAJs9cmrcAE510.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g11/M11/CC/86/autohomecar__wKgH4Vn6cbOAY9lXAAh4ruX8uF4872.jpg?imageView2/1/w/368/h/184/format/webp','https://img2.autoimg.cn/admdfs/g18/M08/CE/00/wKgH6Fn6s5OAPqDsAABxmrj5C14974.jpg'];

  ngAfterViewInit() {
    this.slides.autoplay = 3000;
    this.slides.loop = true;
    this.slides.zoom = true;
    this.slides.pager = true;
  }
}
