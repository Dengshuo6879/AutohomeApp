/**
 * Created by Dengshuo on 2017-11-04.
 */
/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, OnInit} from '@angular/core';
var $ = require('jquery');
window.$=$;

@Component({
  selector: 'second-main-page',
  templateUrl: 'thirdMain.html',
  styles: ['thirdMain.scss'],
})
export class ThirdMainPage implements OnInit {
  ngOnInit() {
    AMapUI.setDomLibrary(window.$);
    AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {
      var windowsArr = [];
      var infowindow = '';
      // var marker = [];

      var map = new AMap.Map("container", {
        resizeEnable: true,
        center: [121.473721, 31.230415],//地图中心点
        zoom: 13,//地图显示的缩放级别
        keyboardEnable: false
      });

      //图层切换控件
      map.addControl(new BasicControl.LayerSwitcher({
        position:'rt'
      }));

      AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.AdvancedInfoWindow','AMap.Geolocation'], function () {
        var geolocation = new AMap.Geolocation();
        map.addControl(geolocation);

        var geolo=document.getElementsByClassName('amap-geolocation-con')[0];
        geolo.setAttribute('style','position: absolute;z-index: 9999;left: 20px;bottom: 50px');

        var autoOptions = {
          city: "上海", //城市，默认全国
          input: "keyword"//使用联想输入的input的id
        };
        var autocomplete = new AMap.Autocomplete(autoOptions);

        var placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          pageIndex: 1,
          city: '上海',
          map: map,
          panel: 'panel'
        });
        var scale = new AMap.Scale();
        map.addControl(scale);

        AMap.event.addListener(autocomplete, "select", function (e) {
          //TODO 针对选中的poi实现自己的功能
          placeSearch.setCity(e.poi.adcode);
          placeSearch.search(e.poi.name, function (data, res) {
            windowsArr = res.poiList.pois;
          });
        });

        infowindow = new AMap.AdvancedInfoWindow({
          content: `<div class="info-title">高德地图</div>
           <div class="info-content">
            <img src="https://webapi.amap.com/images/amap.jpg"/>
            <p>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</p>
           </div>
          `
        });
      });
    });
    var kw=document.getElementById('keyword');
    var tip=document.getElementById('container');
    kw.addEventListener('focus',function(){
      tip.style.display='none';
    })
  }
}
