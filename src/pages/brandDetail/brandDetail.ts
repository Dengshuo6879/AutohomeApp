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
  indicator:any=[];

  menuList:any=['综述','领豪礼','图片','配置','经销商','论坛','口碑','视频','二手车','更多']

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
    //点击饼状图显示折线图
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

    this.data.data.map((item:any)=>{
      this.indicator.push({name: item.name,max:item.sellMax})
    })
    //土豪分布图
    let myChart3 = echarts.init(document.getElementById('main3'));
    var  dataGZ= [
      [55,9,56,0.46,18],
      [25,11,21,0.65,34],
      [56,7,63,0.3,14],
      [33,7,29,0.33,16],
      [42,24,44,0.76,40],
      [82,58,90,1.77,68],
      [74,49,77,1.46,48],
      [78,55,80,1.29,59],
      [267,216,280,4.8,108],
      [185,127,216,2.52,61],
      [39,19,38,0.57,31],
      [41,11,40,0.43,21],
      [64,38,74,1.04,46],
      [108,79,120,1.7,75],
      [108,63,116,1.48,44],
      [33,6,29,0.34,13],
      [94,66,110,1.54,62],
      [186,142,192,3.88,93],
      [57,31,54,0.96,32],
      [22,8,17,0.48,23],
      [39,15,36,0.61,29],
      [94,69,114,2.08,73],
      [99,73,110,2.43,76],
      [31,12,30,0.5,32],
      [42,27,43,1,53],
      [154,117,157,3.05,92],
      [234,185,230,4.09,123],
      [160,120,186,2.77,91],
      [134,96,165,2.76,83],
      [52,24,60,1.03,50],
      [46,5,49,0.28,10]
    ];

    var dataBJ  = [
      [26,37,27,1.163,27],
      [85,62,71,1.195,60],
      [78,38,74,1.363,37],
      [21,21,36,0.634,40],
      [41,42,46,0.915,81],
      [56,52,69,1.067,92],
      [64,30,28,0.924,51],
      [55,48,74,1.236,75],
      [76,85,113,1.237,114],
      [91,81,104,1.041,56],
      [84,39,60,0.964,25],
      [64,51,101,0.862,58],
      [70,69,120,1.198,65],
      [77,105,178,2.549,64],
      [109,68,87,0.996,74],
      [73,68,97,0.905,51],
      [54,27,47,0.592,53],
      [51,61,97,0.811,65],
      [91,71,121,1.374,43],
      [73,102,182,2.787,44],
      [73,50,76,0.717,31],
      [84,94,140,2.238,68],
      [93,77,104,1.165,53],
      [99,130,227,3.97,55],
      [146,84,139,1.094,40],
      [113,108,137,1.481,48],
      [81,48,62,1.619,26],
      [56,48,68,1.336,37],
      [82,92,174,3.29,0],
      [106,116,188,3.628,101],
      [118,50,0,1.383,76]
    ];

    var dataSH = [
      [91,45,125,0.82,34],
      [65,27,78,0.86,45],
      [83,60,84,1.09,73],
      [109,81,121,1.28,68],
      [106,77,114,1.07,55],
      [109,81,121,1.28,68],
      [106,77,114,1.07,55],
      [89,65,78,0.86,51],
      [53,33,47,0.64,50],
      [80,55,80,1.01,75],
      [117,81,124,1.03,45],
      [99,71,142,1.1,62],
      [95,69,130,1.28,74],
      [116,87,131,1.47,84],
      [108,80,121,1.3,85],
      [134,83,167,1.16,57],
      [79,43,107,1.05,59],
      [71,46,89,0.86,64],
      [97,71,113,1.17,88],
      [84,57,91,0.85,55],
      [87,63,101,0.9,56],
      [104,77,119,1.09,73],
      [87,62,100,1,72],
      [168,128,172,1.49,97],
      [65,45,51,0.74,39],
      [39,24,38,0.61,47],
      [39,24,39,0.59,50],
      [93,68,96,1.05,79],
      [188,143,197,1.66,99],
      [174,131,174,1.55,108],
      [187,143,201,1.39,89]
    ];

    var lineStyle = {
      normal: {
        width: 1,
        opacity: 0.5
      }
    };

    let option = {
      backgroundColor: '#161627',
      title: {
        text: '土豪分布图',
        left: 'center',
        textStyle: {
          color: '#eee'
        }
      },
      legend: {
        bottom: 5,
        data: ['北京', '上海', '广州'],
        itemGap: 20,
        textStyle: {
          color: '#fff',
          fontSize: 14
        },
        selectedMode: 'single'
      },
      radar: {
        indicator: this.indicator,
        shape: 'circle',
        splitNumber: 5,
        name: {
          textStyle: {
            color: 'rgb(238, 197, 102)'
          }
        },
        splitLine: {
          lineStyle: {
            color: [
              'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
              'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
              'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        }
      },
      series: [
        {
          name: '北京',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#F9713C'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.1
            }
          }
        },
        {
          name: '上海',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#B3E4A1'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.05
            }
          }
        },
        {
          name: '广州',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
            normal: {
              color: 'rgb(238, 197, 102)'
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.05
            }
          }
        }
      ]
    };
    myChart3.setOption(option)
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

  //菜单选择
  selectMenu=(menu:any,ev)=>{
    switch (menu){}
    ev.target.style.backgroundColor="#F9F9F9";
    ev.target.style.color="#6293CF";
    this.unselectMenu(ev.target);
  }
  unselectMenu=(elm)=>{
    let p=elm.parentNode.children;
    for(let i=0;i<p.length;i++){
      if(p[i] !==elm){
        p[i].style.color='#000';
        p[i].style.backgroundColor='#fff'
      }
    }
  }
}
