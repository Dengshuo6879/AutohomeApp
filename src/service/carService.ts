/**
 * Created by Dengshuo on 2017-11-08.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {
  //轮播网络地址
  slidesList: Array<any> = [
    '../../assets/imgs/cars-lunbo/l1.jpg',
    '../../assets/imgs/cars-lunbo/l2.jpg',
    '../../assets/imgs/cars-lunbo/l3.jpg',
    '../../assets/imgs/cars-lunbo/l4.jpg',
    '../../assets/imgs/cars-lunbo/l5.jpg',
    '../../assets/imgs/cars-lunbo/l6.jpg',
    '../../assets/imgs/cars-lunbo/l7.jpg',
  ];
  //toobar的图标
  toolbar: Array<any> = [
    ['../../assets/imgs/toolbars/1.png',
      '../../assets/imgs/toolbars/2.png',
      '../../assets/imgs/toolbars/3.png',
      '../../assets/imgs/toolbars/4.png'
    ],
    ['../../assets/imgs/toolbars/5.png',
      '../../assets/imgs/toolbars/6.png',
      '../../assets/imgs/toolbars/7.png',
      '../../assets/imgs/toolbars/8.png'
    ],
    ['../../assets/imgs/toolbars/9.png',
      '../../assets/imgs/toolbars/10.png',
      '../../assets/imgs/toolbars/4.png',
      '../../assets/imgs/toolbars/7.png'
    ]
  ];
  // 主打车型列表
  carList: Array<any> = [
    {
      name: '兰博基尼',
      pic: '../../assets/imgs/cars/lbjn.jpg',
      src: '../../assets/imgs/cars-s/lbjn-s.jpg',
      description: "兰博基尼(Automobili Lamborghini S.p.A.)(粤港地区称之为林宝坚尼，台湾地区则将其译为蓝宝坚尼或蓝宝基尼)全球顶级跑车制造商及欧洲奢侈品标志之一，公司坐落于意大利圣亚加塔·波隆尼(Sant'Agata Bolognese)，由费鲁吉欧·兰博基尼在1963年创立。早期由于经营不善，于1980年破产；数次易主后，1998年归入奥迪旗下，现为大众集团(Volkswagen Group)旗下品牌之一。"
    }, {
      name: '法拉利',
      pic: '../../assets/imgs/cars/fll.jpg',
      src: '../../assets/imgs/cars-s/fll-s.jpg',
      description: "法拉利是举世闻名的赛车和运动跑车的生产厂家，总部位于意大利马拉内罗（Maranello），由恩佐·法拉利（Enzo Ferrari）于1947年创办，主要制造一级方程式赛车、赛车及高性能跑车。"
    }, {
      name: '保时捷',
      pic: '../../assets/imgs/cars/bsj.jpg',
      src: '../../assets/imgs/cars-s/bsj-s.jpg',
      description: "保时捷（Porsche)是一家德国汽车生产商，又叫波尔舍，总部位于德国斯图加特，是欧美汽车的主要代表。主要车型有911、Boxster、Cayman、Panamera、Cayenne、Macan。1931年，保时捷成立于斯图加特，以生产高级跑车闻名于世界车坛。创始人费迪南德·波尔舍（同费迪南德·保时捷）是一位享誉世界车坛的著名设计师。"
    }, {
      name: '雷克萨斯',
      pic: '../../assets/imgs/cars/lkss.jpg',
      src: '../../assets/imgs/cars-s/lkss-s.jpg',
      description: "雷克萨斯（英语：Lexus,日语：レクサス）创立于1983年，是日本丰田集团旗下全球著名豪华汽车品牌。该品牌仅用了十几年的时间，销量在北美地区便超过了奔驰、宝马。1999年起，雷克萨斯品牌连续11年位居美国豪华汽车销量第一的宝座。"
    }, {
      name: '沃尔沃',
      pic: '../../assets/imgs/cars/wew.gif',
      src: '../../assets/imgs/cars-s/wew-s.jpg',
      description: "沃尔沃，瑞典豪华汽车品牌。豪华意味着对时间的积淀，空间的卓越，以及专一的执着。将北欧豪华精神注入其中，在看得见的科技配备下，挖掘出看不见的豪华本质。该品牌于1927年在瑞典哥德堡创建，1999年，沃尔沃集团将旗下的沃尔沃轿车业务出售给美国福特汽车公司。"
    }, {
      name: '路虎',
      pic: '../../assets/imgs/cars/lh.jpg',
      src: '../../assets/imgs/cars-s/lh-s.jpg',
      description: "路虎（Landrover），路虎公司是世界上生产四驱车的公司之一，也是著名的英国越野车品牌。路虎曾在中国大陆翻译成“陆虎”（香港地区称之为“越野路华”），在“Landrover”未正式在中国销售前，国人一直翻译成“陆虎”。"
    }];
  // 所有车型列表
  allCarList: Array<any> = [
    {
      name: '奥迪',
      firstALp: 'A',
      spell: 'aodi',
      logo: '../../assets/imgs/cars/ad.jpg'
    }, {
      name: '奔驰',
      firstALp: 'B',
      spell: 'benchi',
      logo: '../../assets/imgs/cars/bc.jpg'
    }, {
      name: '比亚迪',
      firstALp: 'B',
      spell: 'biyadi',
      logo: '../../assets/imgs/cars/byd.jpg'
    }, {
      name: '宾利',
      firstALp: 'B',
      spell: 'binli',
      logo: '../../assets/imgs/cars/bl.jpg'
    }, {
      name: '宝马',
      firstALp: 'B',
      spell: 'baoma',
      logo: '../../assets/imgs/cars/bm.jpg'
    }, {
      name: '本田',
      firstALp: 'B',
      spell: 'bentian',
      logo: '../../assets/imgs/cars/bt.jpg'
    }, {
      name: '保时捷',
      firstALp: 'B',
      spell: 'baoshijie',
      logo: '../../assets/imgs/cars/bsj.jpg'
    }, {
      name: '布加迪',
      firstALp: 'B',
      spell: 'bujiadi',
      logo: '../../assets/imgs/cars/bjd.jpg'
    }, {
      name: '标志',
      firstALp: 'B',
      spell: 'biaozhi',
      logo: '../../assets/imgs/cars/bz.jpg'
    }, {
      name: '大众',
      firstALp: 'D',
      spell: 'dazhong',
      logo: '../../assets/imgs/cars/dz.jpg'
    }, {
      name: '法拉利',
      firstALp: 'F',
      spell: 'falali',
      logo: '../../assets/imgs/cars/fll.jpg'
    }, {
      name: '福特',
      firstALp: 'F',
      spell: 'fute',
      logo: '../../assets/imgs/cars/ford.jpg'
    }, {
      name: '丰田',
      firstALp: 'F',
      spell: 'fengtian',
      logo: '../../assets/imgs/cars/ft.jpg'
    }, {
      name: '捷豹',
      firstALp: 'J',
      spell: 'jiebao',
      logo: '../../assets/imgs/cars/jb.jpg'
    }, {
      name: 'Jeep',
      firstALp: 'J',
      spell: 'jeep',
      logo: '../../assets/imgs/cars/jp.jpg'
    }, {
      name: '凯迪拉克',
      firstALp: 'K',
      spell: 'kaidilake',
      logo: '../../assets/imgs/cars/kdlk.jpg'
    }, {
      name: '兰博基尼',
      firstALp: 'L',
      spell: 'lanbojini',
      logo: '../../assets/imgs/cars/lbjn.jpg'
    }, {
      name: '路虎',
      firstALp: 'L',
      spell: 'luhu',
      logo: '../../assets/imgs/cars/lh.jpg'
    }, {
      name: '林肯',
      firstALp: 'L',
      spell: 'linken',
      logo: '../../assets/imgs/cars/lk.jpg'
    }, {
      name: '雷克萨斯',
      firstALp: 'L',
      spell: 'leikesasi',
      logo: '../../assets/imgs/cars/lkss.jpg'
    }, {
      name: '马自达',
      firstALp: 'M',
      spell: 'mazida',
      logo: '../../assets/imgs/cars/mzd.jpg'
    }, {
      name: '沃尔沃',
      firstALp: 'W',
      spell: 'woerwo',
      logo: '../../assets/imgs/cars/wew.gif'
    }, {
      name: '讴歌',
      firstALp: 'O',
      spell: 'oge',
      logo: '../../assets/imgs/cars/og.jpg'
    }, {
      name: '日产',
      firstALp: 'R',
      spell: 'richan',
      logo: '../../assets/imgs/cars/rc.jpg'
    }, {
      name: '雪佛兰',
      firstALp: 'X',
      spell: 'xuefulan',
      logo: '../../assets/imgs/cars/xfl.jpg'
    }
    ];
  //新闻列表
  news: any = [
    {
      type: 'p',
      src: ['//m1.autoimg.cn/newsdfs/g17/M06/8E/6E/224x168_0_c42_autohomecar__wKgH51nO-3qAf2dJAAIh-2VnVaI995.jpg',
        '//m1.autoimg.cn/newsdfs/g11/M10/97/5F/224x168_0_c42_autohomecar__wKgH0lnYEQ2ANXEDAAHF3aVz0No979.jpg',
        '//m1.autoimg.cn/newsdfs/g20/M0D/68/29/224x168_0_c42_autohomecar__wKgFVFnO-6KAIyy1AAIJkbJpTYk043.jpg'],
      txt: '最低配的冠道值不值得买',
      up: 889,
      collect: 998,
      isUp: false,
      isCollect: false,
    },
    {
      type: 'p',
      src: ['//m1.autoimg.cn/youchuang/g11/M0D/CD/34/224x168_0_c42_autohomecar__wKgH0ln_67mAc3_BAAttgqhbD98226.jpg',
        '//m1.autoimg.cn/youchuang/g23/M00/AB/60/224x168_0_c42_autohomecar__wKjBwFn_67mARalJAAcf1vjRkY4614.jpg'],
      txt: '6座、大空间，试驾最低不到15万的别克GL6！',
      up: 556,
      collect: 934,
      isUp: false,
      isCollect: false,
    },
    {
      type: 'v',
      src: '//m1.autoimg.cn/youchuang/g14/M01/CC/B9/224x168_0_c42_autohomecar__wKgH1VoBC7mAT02vAA1trLCKMhw317.png',
      txt: '百公里平均油耗5.0L 这台美系蒙迪欧是怎么做到的？',
      up: 829,
      collect: 1122,
      isUp: false,
      isCollect: false,
    },
    {
      type: 'p',
      src: ['//m1.autoimg.cn/youchuang/g10/M13/B8/4C/224x168_0_c42_autohomecar__wKgH4Fnpls-AAHvIAACP_2bzpjs061.jpg',
        '//m1.autoimg.cn/youchuang/g22/M0B/63/55/224x168_0_c42_autohomecar__wKgFW1npltOAYtgEAACYe1bjy7g415.jpg'],
      txt: '9月最新轿车销量榜发布！大众品牌屠榜啦！',
      up: 346,
      collect: 846,
      isUp: false,
      isCollect: false,
    },
    {
      type: 'p',
      src: ['//m1.autoimg.cn/newsdfs/g10/M15/CD/ED/224x168_0_c42_autohomecar__wKgH4Fn607mATlHfAAIx92Demgw568.jpg',
        '//m1.autoimg.cn/newsdfs/g23/M12/A9/29/224x168_0_c42_autohomecar__wKgFXFn607aAP4CnAAH8afJY2Ao311.jpg',
        '//m1.autoimg.cn/newsdfs/g14/M0C/C5/B6/224x168_0_c42_autohomecar__wKgH1Vn607OAG5vOAAKmYSdGtf8285.jpg'],
      txt: '或命名“VV6” WEY全新紧凑型SUV实车图',
      up: 234,
      collect: 883,
      isUp: false,
      isCollect: false,
    }
  ];

  //兰博基尼
  brands: any = {
    '兰博基尼': [
      {
        name: 'Huracan',
        price: '299.00-429.09万',
        pic: '//car2.autoimg.cn/cardfs/product/g15/M09/C2/A9/192x144_0_q30_autohomecar__wKgH5VhPSRuAcqkSAAVSUaagDTk241.jpg',
        type: '兰博基尼',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: 'Aventador',
        price: '648.80-801.15万',
        pic: '//m0.autoimg.cn/cardfs/upload/2012/10/23/192x144_0_q30_autohomecar__y_201210231943198854136.jpg',
        type: '兰博基尼',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:23,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:10,
          monthCount:[10,30,20,40,30]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:28,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:31,
          monthCount:[10,30,20,40,30]
        }]
      }
    ],
    '法拉利': [
      {
        name: 'California T',
        price: '308.80万',
        pic: '//m0.autoimg.cn/cardfs/upload/2014/6/24/192x144_0_q30_autohomecar__y_20140624120730477213.jpg',
        type: '法拉利',
        children:[{
          name:'2015款3.9T 标准型',
          price:'308.80万起',
          count:150,
          monthCount:[20,30,40,30,30]
        }]
      },
      {
        name: 'F12berlinetta',
        price: '530.80万',
        pic: '//m0.autoimg.cn/cardfs/upload/2013/4/28/192x144_0_q30_autohomecar__y_201304281710418974136.jpg',
        type: '法拉利',
        children:[{
          name:'2013款6.3L 标准型',
          price:'530.80万起',
          count:150,
          monthCount:[20,30,30,50,20]
        }]
      },
      {
        name: 'GTC4Lusso',
        price: '358.80-538.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g23/M13/47/3D/192x144_0_q30_autohomecar__wKgFXFa4oNuAWZLPAAGvF5-YOkc627.jpg',
        type: '法拉利',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: 'LaFerrari',
        price: '2250.00万',
        pic: '//m0.autoimg.cn/cardfs/upload/2014/8/19/192x144_0_q30_autohomecar__y_20140819181852565376510.jpg',
        type: '法拉利',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: '法拉利488',
        price: '338.80-388.80万',
        pic: '//m0.autoimg.cn/cardfs/car/upload/2015/6/18/192x144_0_q30_autohomecar__y_20150618102620700123112.jpg',
        type: '法拉利',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      }
    ],
    '保时捷': [
      {
        name: 'Panamera',
        price: '108.80-233.80万',
        pic: '//car3.autoimg.cn/cardfs/product/g6/M0D/32/13/192x144_0_q30_autohomecar__wKjB0VjISceAM7I2AAeU1rmBplQ377.jpg',
        type: '保时捷',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: 'Panamera新能源',
        price: '140.80-273.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g11/M00/EA/35/192x144_0_q30_autohomecar__wKjBzFh0SkaARy6gAAgrfokr-Kw507.jpg',
        type: '保时捷',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: 'Macan',
        price: '58.80-112.41万',
        pic: '//car3.autoimg.cn/cardfs/product/g4/M14/E6/D2/192x144_0_q30_autohomecar__wKjB01efkH-ASzHnAAc_6Ukjjx8238.jpg',
        type: '保时捷',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: 'Cayenne',
        price: '88.80-283.90万',
        pic: '//car2.autoimg.cn/cardfs/product/g14/M03/7C/AC/192x144_0_q30_autohomecar__wKgH5FgHPf2ASv6iAAY-PEj2W8U384.jpg',
        type: '保时捷',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      }
    ],
    '雷克萨斯': [
      {
        name: '雷克萨斯CT',
        price: '22.90-34.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g18/M08/61/17/192x144_0_q30_autohomecar__wKgH2VmvueuAKS39AApGWaZibMI124.jpg',
        type: '雷克萨斯',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },
      {
        name: '雷克萨斯GS',
        price: '45.90-79.90万',
        pic: '//car2.autoimg.cn/cardfs/product/g20/M09/27/D7/192x144_0_q30_autohomecar__wKjBw1b-U9CAaXAdAAtAuQcVVfA015.jpg',
        type: '雷克萨斯',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '雷克萨斯GS',
        price: '45.90-79.90万',
        pic: '//m0.autoimg.cn/cardfs/upload/2013/10/18/192x144_0_q30_autohomecar__y_201310181816285884435.jpg',
        type: '雷克萨斯',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      }
    ],
    '沃尔沃': [
      {
        name: '沃尔沃S60L新能源',
        price: '50.59-55.99万',
        pic: '//m0.autoimg.cn/cardfs/car/upload/2015/5/27/192x144_0_q30_autohomecar__y_2015052722203537981110.jpg',
        type: '沃尔沃亚太',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '沃尔沃S90',
        price: '36.98-55.18万',
        pic: '//car2.autoimg.cn/cardfs/product/g11/M05/95/63/192x144_0_q30_autohomecar__wKgH4VnPb4KAMB3DAAcfsM6JjeY715.jpg',
        type: '沃尔沃亚太',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '沃尔沃XC60',
        price: '35.89-43.99万',
        pic: '//car2.autoimg.cn/cardfs/product/g11/M01/B6/A6/192x144_0_q30_autohomecar__wKgH0lntvJuAfkx4AAVb-VKmd18477.jpg',
        type: '沃尔沃亚太',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '沃尔沃V90',
        price: '47.98-57.88万',
        pic: '//car2.autoimg.cn/cardfs/product/g5/M0A/32/74/192x144_0_q30_autohomecar__wKgH21jHzFeARCFgAAlDlkaQatM179.jpg',
        type: '沃尔沃(进口)',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '沃尔沃XC90新能源',
        price: '99.80-135.80万',
        pic: '//car3.autoimg.cn/cardfs/product/g11/M03/C3/EE/192x144_0_q30_autohomecar__wKjBzFn17zuAbbehAAf-vx9al0Y800.jpg',
        type: '沃尔沃(进口)',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      }
    ],
    '路虎': [
      {
        name: '发现神行',
        price: '35.80-51.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g18/M05/C1/5B/192x144_0_q30_autohomecar__wKgH2Vn3H1OAGgHDAAZ3g2RGD9Y071.jpg',
        type: '奇瑞捷豹路虎',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '揽胜极光',
        price: '38.80-57.80万',
        pic: '//car3.autoimg.cn/cardfs/product/g7/M07/CB/68/192x144_0_q30_autohomecar__wKjB0Fn51h-AfyTrAAwyC8dCxxs577.jpg',
        type: '奇瑞捷豹路虎',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '揽胜极光(进口)',
        price: '69.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g5/M14/29/E3/192x144_0_q30_autohomecar__wKgH21i_2zKAXLHjAAc1wJqBaZk123.jpg',
        type: '路虎(进口)',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '揽胜星脉',
        price: '68.80-104.80万',
        pic: '//car3.autoimg.cn/cardfs/product/g9/M0A/8D/26/192x144_0_q30_autohomecar__wKgH0FnMyeSAZJr4AAs8ZJcV5sk738.jpg',
        type: '路虎(进口)',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      },{
        name: '发现',
        price: '79.80-110.80万',
        pic: '//car2.autoimg.cn/cardfs/product/g21/M08/0F/AC/192x144_0_q30_autohomecar__wKgFVVjL4eCAHqUbAAYz7US5RL8955.jpg',
        type: '路虎(进口)',
        children:[{
          name:'2016款LP 580-2',
          price:'299.00万起',
          count:130,
          monthCount:[10,30,20,40,30]
        },{
          name:'2017款LP580 RWD Spyder',
          price:'328.90万起',
          count:150,
          monthCount:[20,30,30,50,20]
        },{
          name:'2014款LP 610-4',
          price:'350万起',
          count:140,
          monthCount:[10,40,20,30,40]
        },{
          name:'2017款Performante',
          price:'385.00万起',
          count:190,
          monthCount:[40,20,50,10,70]
        }]
      }
    ],
  }
}
