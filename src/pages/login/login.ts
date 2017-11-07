/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component} from '@angular/core';
import {HomePage} from '../home/home';

import {
  Platform,
  NavController,
  LoadingController,
  AlertController,
} from 'ionic-angular';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html',
  styles: ['login.scss']
})
export class LoginPage {
  public userName: string = 'Dengshuo';
  public pwd: string = '123456';
  private isLogin: boolean = true;
  private hasLogin: string = 'false';
  public userNameReg: string = '';
  public pwdReg: string = '';

  constructor(public platform: Platform,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,) {
  }

  toLogin() {
    console.log('e')
    if (this.userName == '' || this.pwd == '') {
      let text = '用户名和密码不能为空';
      this.showAlert(text);
    } else {
      //在此处应发送登录请求
      //请求成功后
      this.presentLoading();
      localStorage.setItem('hasLogin', 'true');
      setTimeout(() => {
        this.navCtrl.push(HomePage);
      }, 1000)
    }
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }

  //注册页
  toRegistor() {
    this.isLogin = false;
  }

  //返回登录
  returnToLogin() {
    this.isLogin = true;
  }

  //注册
  registor() {
    if (this.userName == '' || this.pwd == '') {
      let text = '用户名和密码不能为空';
      this.showAlert(text);
    } else {
      //在此处应发送注册请求
      //请求成功后
      var text = '注册成功，正在登陆...';
      this.showAlert(text);
    }
  }

  showAlert(text) {
    let alert = this.alertCtrl.create({
      subTitle: text,
      buttons: [{
        text: 'OK',
        handler: data => {
          if (text == '注册成功') {
            this.isLogin = true;
            this.userName = this.userNameReg;
            this.pwd = this.pwdReg;
            this.toLogin();
          }
        }
      }],
    });
    alert.present();
  }
}
