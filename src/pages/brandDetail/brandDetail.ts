/**
 * Created by Dengshuo on 2017-11-29.
 */
import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import * as echarts from 'echarts';

@Component({
  selector: 'brand-detail',
  templateUrl: 'brandDetail.html',
})
export class BrandDetail implements OnInit {
  data: any;
  monthCount: any = [0, 0, 0, 0, 0];

  selectedType: string = '';


  constructor(public navParams: NavParams) {
    this.data = navParams.data;
  }

  ngOnInit() {
    // 当前月份
    let date = new Date;
    let month = date.getMonth() + 1;
    month = (month < 10 ? month : month);

    let datas = [];
    this.data.data.map((item) => {
      datas.push({value: item.count, name: item.name});
    })

    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      series: [
        {
          name: this.data.carName,
          type: 'pie',
          radius: '55%',
          data: datas,
        }
      ]
    })

    let data1: any = [];
    this.monthCount.map((item, index) => {
      data1.unshift([month - index, item]);
    })
    this.myChart2(data1, month);


    var _thiss = this;
    myChart.on('click', function (params) {
      _thiss.selectedType = params.name;
      data1 = [];
      _thiss.data.data.map(item => {
        if (item.name == params.name) {
          item.monthCount.map((item, index) => {
            data1.unshift([month - index, item]);
          })
        }
      });
      _thiss.myChart2(data1, month);
    })
  }

  //近5个月的销量
  myChart2 = (data1: any, month: any) => {
    let myChart2 = echarts.init(document.getElementById('main2'));
    let data = data1;
    let symbolSize = 20;
    let minMonth = month - 5;
    let MaxMonth = month + 1;

    myChart2.setOption({
      tooltip: {
        triggerOn: 'none',
        formatter: function (params) {
          return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
      },
      xAxis: {
        min: minMonth,
        max: MaxMonth,
        type: 'value',
        axisLine: {onZero: false}
      },
      yAxis: {
        min: 0,
        max: 100,
        type: 'value',
        axisLine: {onZero: false}
      },
      series: [
        {
          id: 'a',
          type: 'line',
          smooth: true,
          symbolSize: symbolSize,
          data: data
        }
      ],
    });

    myChart2.setOption({
      graphic: echarts.util.map(data, function (item, dataIndex) {
        return {
          type: 'circle',
          position: myChart2.convertToPixel('grid', item),
          shape: {
            r: symbolSize / 2
          },
          invisible: true,
          draggable: true,
          ondrag: echarts.util.curry(onPointDragging, dataIndex),
          onmousemove: echarts.util.curry(showTooltip, dataIndex),
          onmouseout: echarts.util.curry(hideTooltip, dataIndex),
          z: 100
        };
      })
    });

    window.addEventListener('resize', function () {
      myChart2.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
          return {
            position: myChart2.convertToPixel('grid', item)
          };
        })
      });
    });

    function showTooltip(dataIndex) {
      myChart2.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    }

    function hideTooltip(dataIndex) {
      myChart2.dispatchAction({
        type: 'hideTip'
      });
    }

    function onPointDragging(dataIndex, dx, dy) {
      data[dataIndex] = myChart2.convertFromPixel('grid', this.position);
      myChart2.setOption({
        series: [{
          id: 'a',
          data: data
        }]
      });
    }

  }

}
