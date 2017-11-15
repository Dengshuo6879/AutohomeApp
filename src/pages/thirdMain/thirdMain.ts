/**
 * Created by Dengshuo on 2017-11-04.
 */
import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
declare var AMap: any;
declare var AMapUI: any;

@Component({
  selector: 'third-main-page',
  templateUrl: 'thirdMain.html',
  styles: ['thirdMain.scss'],
})
export class ThirdMainPage implements OnInit {
  ngOnInit() {
    var markers = [];
    AMapUI.load(['lib/$'], function (_$) {
      AMapUI.setDomLibrary(_$);
      AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {
        let windowsArr = [];
        // var marker = [];

        //地图绘制
        var map = new AMap.Map("container", {
          resizeEnable: true,
          // viewMode:'3D',
          center: [121.473721, 31.230415],//地图中心点
          zoom: 10,//地图显示的缩放级别
          keyboardEnable: false
        });

        AMap.event.addDomListener(document.getElementById('clearMarker'), 'click', function () {
          map.remove(markers);
        }, false);


        //图层切换控件
        map.addControl(new BasicControl.LayerSwitcher({
          position: 'rt'
        }));

        // 地图插件
        AMap.plugin(['AMap.ToolBar', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.AdvancedInfoWindow', 'AMap.Geolocation'], function () {
          map.addControl(new AMap.ToolBar());

          // 消息窗体内容
          let infowindow = new AMap.AdvancedInfoWindow({
            content: `<div class="info-title">高德地图</div>
           <div class="info-content">
            <img src="https://webapi.amap.com/images/amap.jpg"/>
            <p>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</p>
           </div>
          `
          });
          //选择地点
          $('#panel').on('click', '.poibox', function () {
            $('#panel').hide('fast');
            var lng = windowsArr[$(this).index()].location.lng;
            var lat = windowsArr[$(this).index()].location.lat;
            infowindow.open(map, [lng, lat]);

            $('#clearMarker').click();
          });


          // 获取自身位置
          var geolocation = new AMap.Geolocation();
          map.addControl(geolocation);

          $('.amap-geolocation-con').css({'position': 'absolute', 'z-index': 9999, 'left': '20px', 'bottom': '50px'});

          // 位置搜索
          let autoOptions = {
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

          AMap.event.addListener(autocomplete, "select", function (e) {

            $('#panel').fadeIn('fast');

            //TODO 针对选中的poi实现自己的功能
            placeSearch.setCity(e.poi.adcode);
            placeSearch.search(e.poi.name, function (data, res) {
              windowsArr = res.poiList.pois;
              markers = [];
              for (var i = 0, marker; i < windowsArr.length; i++) {
                marker = new AMap.Marker({
                  map: map,
                  position: [windowsArr[i].location.lng, windowsArr[i].location.lat],
                });
                markers.push(marker);
              }
            });
          });

          // 显示比例尺
          var scale = new AMap.Scale();
          map.addControl(scale);
        });
      });
    });

    $('#container').on('click', '.nav-drive,.search-button,.nav-bus,.nav-walk', function () {
      if ($('.keyword').val() != '') {
        $('#panel').hide('fast');

      }
    })

  }
}
