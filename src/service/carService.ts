/**
 * Created by Dengshuo on 2017-11-08.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {
  //轮播网络地址
  slidesList: Array<any> = [
    '//www2.autoimg.cn/newsdfs/g17/M14/C1/20/368x184_0_autohomecar__wKgH2Fn5mbaAaYRcAAruOEFsKko940.jpg', '//qnwww2.autoimg.cn/newsdfs/g10/M04/CC/73/autohomecar__wKjBzVn7_--AS0ayAAa6On3CRaA678.jpg?imageView2/1/w/736/h/368/format/webp', '//qnwww2.autoimg.cn/newsdfs/g14/M06/D0/BE/autohomecar__wKgH5Fn9v96Afg73AAcFzCrPDs8979.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g8/M07/CA/66/autohomecar__wKgHz1n8TuWALxXXAAIawGVake8202.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g5/M00/C7/DF/autohomecar__wKgHzFn8UK6ADAZ3AAJs9cmrcAE510.jpg?imageView2/1/w/368/h/184/format/webp', '//qnwww2.autoimg.cn/newsdfs/g11/M11/CC/86/autohomecar__wKgH4Vn6cbOAY9lXAAh4ruX8uF4872.jpg?imageView2/1/w/368/h/184/format/webp', 'https://img2.autoimg.cn/admdfs/g18/M08/CE/00/wKgH6Fn6s5OAPqDsAABxmrj5C14974.jpg'];
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
      logo: '../../assets/imgs/cars/ad.jpg'
    }, {
      name: '奔驰',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bc.jpg'
    }, {
      name: '比亚迪',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/byd.jpg'
    }, {
      name: '宾利',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bl.jpg'
    }, {
      name: '宝马',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bm.jpg'
    }, {
      name: '本田',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bt.jpg'
    }, {
      name: '保时捷',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bsj.jpg'
    }, {
      name: '布加迪',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bjd.jpg'
    }, {
      name: '标志',
      firstALp: 'B',
      logo: '../../assets/imgs/cars/bz.jpg'
    }, {
      name: '大众',
      firstALp: 'D',
      logo: '../../assets/imgs/cars/dz.jpg'
    }, {
      name: '法拉利',
      firstALp: 'F',
      logo: '../../assets/imgs/cars/fll.jpg'
    }, {
      name: '福特',
      firstALp: 'F',
      logo: '../../assets/imgs/cars/ford.jpg'
    }, {
      name: '丰田',
      firstALp: 'F',
      logo: '../../assets/imgs/cars/ft.jpg'
    }, {
      name: '捷豹',
      firstALp: 'J',
      logo: '../../assets/imgs/cars/jb.jpg'
    }, {
      name: 'Jeep',
      firstALp: 'J',
      logo: '../../assets/imgs/cars/jp.jpg'
    }, {
      name: '凯迪拉克',
      firstALp: 'K',
      logo: '../../assets/imgs/cars/kdlk.jpg'
    }, {
      name: '兰博基尼',
      firstALp: 'L',
      logo: '../../assets/imgs/cars/lbjn.jpg'
    }, {
      name: '路虎',
      firstALp: 'L',
      logo: '../../assets/imgs/cars/lh.jpg'
    }, {
      name: '林肯',
      firstALp: 'L',
      logo: '../../assets/imgs/cars/lk.jpg'
    }, {
      name: '雷克萨斯',
      firstALp: 'L',
      logo: '../../assets/imgs/cars/lkss.jpg'
    }, {
      name: '马自达',
      firstALp: 'M',
      logo: '../../assets/imgs/cars/mzd.jpg'
    }, {
      name: '沃尔沃',
      firstALp: 'W',
      logo: '../../assets/imgs/cars/wew.gif'
    }, {
      name: '讴歌',
      firstALp: 'O',
      logo: '../../assets/imgs/cars/og.jpg'
    }, {
      name: '日产',
      firstALp: 'R',
      logo: '../../assets/imgs/cars/rc.jpg'
    }, {
      name: '雪佛兰',
      firstALp: 'X',
      logo: '../../assets/imgs/cars/xfl.jpg'
    }];
  //新闻列表
  news:any=[
    {type:'p',
      src:['//m1.autoimg.cn/newsdfs/g17/M06/8E/6E/224x168_0_c42_autohomecar__wKgH51nO-3qAf2dJAAIh-2VnVaI995.jpg',
        '//m1.autoimg.cn/newsdfs/g11/M10/97/5F/224x168_0_c42_autohomecar__wKgH0lnYEQ2ANXEDAAHF3aVz0No979.jpg',
        '//m1.autoimg.cn/newsdfs/g20/M0D/68/29/224x168_0_c42_autohomecar__wKgFVFnO-6KAIyy1AAIJkbJpTYk043.jpg'],
      txt:'最低配的冠道值不值得买'},
    {type:'p',
      src:['//m1.autoimg.cn/youchuang/g11/M0D/CD/34/224x168_0_c42_autohomecar__wKgH0ln_67mAc3_BAAttgqhbD98226.jpg',
        '//m1.autoimg.cn/youchuang/g23/M00/AB/60/224x168_0_c42_autohomecar__wKjBwFn_67mARalJAAcf1vjRkY4614.jpg'],
      txt:'6座、大空间，试驾最低不到15万的别克GL6！'},
    {type:'v',
      src:'//m1.autoimg.cn/youchuang/g14/M01/CC/B9/224x168_0_c42_autohomecar__wKgH1VoBC7mAT02vAA1trLCKMhw317.png',
      txt:'百公里平均油耗5.0L 这台美系蒙迪欧是怎么做到的？'},
    {type:'p',
      src:['//m1.autoimg.cn/youchuang/g10/M13/B8/4C/224x168_0_c42_autohomecar__wKgH4Fnpls-AAHvIAACP_2bzpjs061.jpg',
      '//m1.autoimg.cn/youchuang/g22/M0B/63/55/224x168_0_c42_autohomecar__wKgFW1npltOAYtgEAACYe1bjy7g415.jpg'],
      txt:'9月最新轿车销量榜发布！大众品牌屠榜啦！'},
    {type:'p',
      src:['//m1.autoimg.cn/newsdfs/g10/M15/CD/ED/224x168_0_c42_autohomecar__wKgH4Fn607mATlHfAAIx92Demgw568.jpg',
        '//m1.autoimg.cn/newsdfs/g23/M12/A9/29/224x168_0_c42_autohomecar__wKgFXFn607aAP4CnAAH8afJY2Ao311.jpg',
      '//m1.autoimg.cn/newsdfs/g14/M0C/C5/B6/224x168_0_c42_autohomecar__wKgH1Vn607OAG5vOAAKmYSdGtf8285.jpg'],
      txt:'或命名“VV6” WEY全新紧凑型SUV实车图'}
  ]
}
