import {Component, OnInit} from '@angular/core';
import {LoginPage} from '../login/login';
import {HomePage} from '../home/home';

@Component({
  selector: 'start-page',
  templateUrl: 'start.html',
  styles: ['start.scss']
})
export class StartPage implements OnInit {
  rootPage;

  ngOnInit() {
    if (localStorage.getItem('hasLogin') == 'true') {
      this.rootPage = HomePage;
    } else {
      this.rootPage = LoginPage;
    }
    setTimeout(() => {
      var logoStart = document.getElementsByClassName('logo-start')[0];
      logoStart.setAttribute('style', 'opacity:0;')
      // }, 1500);
    },0);
    setTimeout(() => {
      var logoStart = document.getElementsByClassName('logo-start')[0];
      logoStart.setAttribute('style', 'z-index:-1;')
      // }, 3000);
    },100);
  }


}
