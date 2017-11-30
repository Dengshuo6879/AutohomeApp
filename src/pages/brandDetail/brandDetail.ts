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

  showSellDetail: boolean = false;

  allMotoTypeList:any={};
  allMotoType:any=[];

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
      title:{
        text:this.data.carName+'销量概览'
      },
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
    let _thiss = this;
    myChart.on('click', function (params) {
      _thiss.showSellDetail=true;
      _thiss.selectedType = params.name;
      data1 = [];
      _thiss.data.data.map(item => {
        if (item.name == params.name) {
          item.monthCount.map((item, index) => {
            data1.unshift([month - index, item]);
          })
        }
      });

      setTimeout(():void=>{
        let myChart2 = echarts.init(document.getElementById('main2'));
        myChart2.showLoading();
      },100)
      setTimeout(():void=>{
        _thiss.myChart2(data1, month);
      },500)
    })


    //参数配置及价格 数据处理
    let allMotoTypeList={};
    this.data.data.map((item):void=>{
      item.hotLevelWidth=item.hotLevel*20;
      if(allMotoTypeList[item.motoType]==null){
        allMotoTypeList[item.motoType]=[];
        allMotoTypeList[item.motoType].push(item);
      }else{
        allMotoTypeList[item.motoType].push(item);
      }
    })
    this.allMotoTypeList=allMotoTypeList;
    for(let key in allMotoTypeList){
      this.allMotoType.push(key);
    }

    //设置车型热度
    setTimeout(()=>{
      let hotSpan:any=document.getElementsByClassName('hotbar2');
      this.data.data.map((item,index)=>{
        hotSpan[index].style.width=item.hotLevelWidth+'px';
      })
    },1000)
  }

  //近5个月的销量 ---------可拖拽折线图
  myChart2 = (data1: any, month: any) => {
    let myChart2 = echarts.init(document.getElementById('main2'));
    myChart2.hideLoading();
    let data = data1;
    let symbolSize = 20;
    let minMonth = month - 5;
    let MaxMonth = month + 1;

    myChart2.setOption({
      title: {
        text: this.selectedType + ' 销量走势',
      },
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
        graphic: echarts.util.map(data, function (item) {
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

    function hideTooltip() {
      myChart2.dispatchAction({
        type: 'hideTip'
      });
    }

    function onPointDragging(dataIndex) {
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
