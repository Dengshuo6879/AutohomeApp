/**
 * Created by Dengshuo on 2017-11-09.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'carousel-page-one',
  templateUrl: 'carouselOne.html',
})
export class CarouselPageOne {
  detailsPage: Array<any> = [`
  <p>&nbsp; &nbsp; [汽车之家 <a href="https://www.autohome.com.cn/123/0/1/conjunction.html" target="_blank">新车图解</a>]&nbsp;中国消费者对后排空间的要求之高，举世皆知。随着ATS-L和Q50L等一批二线豪华品牌中型车也完成了本土化长轴距“改造”之后，这一细分市场就仅剩雷克萨斯IS和捷豹XE还在凭借单一标准轴距车型苦苦支撑。前者或许根本不在乎IS卖了多少台，毕竟有ES帮助走量，小日子过得并不差；后者则多少有些忧愁，毕竟捷豹曾经对XE寄予厚望，它原本是要被用来和BBA进行对抗的，但是情况似乎并不乐观。于是为了放手一搏，新落成的常熟工厂刚完成了XFL的量产工作之后，捷豹立刻就把XEL的国产化推上了日程。</p>
        <p align="center"><img style="DISPLAY: inline-block" alt="汽车之家" src="//m1.autoimg.cn/newsdfs/g13/M02/D9/1B/960x0_1_q40_autohomecar__wKgH41oCu-2Ae3P7AArvWnvYLw8863.jpg" page="1" index="1"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M01/AD/75/960x0_1_q40_autohomecar__wKjBw1oCtNGAcifyAAPeZXykyqY726.jpg" page="1" index="4"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M02/D8/ED/960x0_1_q40_autohomecar__wKgH3VoCtNWAKqB8AALLueEDr5A516.jpg" page="1" index="5"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M02/D5/D6/960x0_1_q40_autohomecar__wKjB0FoCtNWAIkArAALcthFqYH8055.jpg" page="1" index="6"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M10/AD/76/960x0_1_q40_autohomecar__wKjBw1oCtNWAcAoVAAJJg0uQLFE560.jpg" page="1" index="7"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M03/D5/D6/960x0_1_q40_autohomecar__wKjB0FoCtNWAX5sDAAJvPC8zri4453.jpg" page="1" index="8"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M03/D5/D5/960x0_1_q40_autohomecar__wKjB0FoCtM6ABoRbAAHdB2GiHFw891.jpg" page="1" index="9"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M00/D8/EC/960x0_1_q40_autohomecar__wKgH3VoCtNCAfNk_AAJhAhrzRac504.jpg" page="1" index="10"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M0B/B0/5B/960x0_1_q40_autohomecar__wKgFWVoCtNOAYTUTAAJUH4gmwH8535.jpg" page="1" index="11"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M04/D8/EC/960x0_1_q40_autohomecar__wKgH3VoCtNGABcw-AAHuHQ6ju_k656.jpg" page="1" index="12"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M0D/AA/38/960x0_1_q40_autohomecar__wKgFVFoCtNSAQEvlAAGBONLcvnM508.jpg" page="1" index="13"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M14/B0/5B/960x0_1_q40_autohomecar__wKgFWVoCtNGABRjNAAJqjo2kLro160.jpg" page="1" index="14"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M0D/D1/61/960x0_1_q40_autohomecar__wKgHzloCtNSAL5p0AAL2bfDB7KY342.jpg" page="1" index="15"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M0B/AD/75/960x0_1_q40_autohomecar__wKjBw1oCtNOAb83AAAJGu4Pwua0547.jpg" page="1" index="16"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M0C/AA/37/960x0_1_q40_autohomecar__wKgFVFoCtNCAL6cqAAF2fPcQpOs396.jpg" page="1" index="17"><br></p>`,

    `<p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g7/M11/D1/61/960x0_1_q40_autohomecar__wKgHzloCtNKAOltKAAJPw_Vc9sQ395.jpg"
                                               page="1" index="23"></p><p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g7/M11/D8/ED/960x0_1_q40_autohomecar__wKgH3VoCtNOAMJHHAAHyML2dd40361.jpg"
                                               page="1" index="21"><br></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g20/M08/B0/5B/960x0_1_q40_autohomecar__wKgFWVoCtNKABcQ6AAIxkHNde-A067.jpg"
                                               page="1" index="22"><br></p>
                                               <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g7/M0A/D5/D6/960x0_1_q40_autohomecar__wKjB0FoCtNOAWP4DAALOYgfwRRQ138.jpg"
                                               page="1" index="18"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g20/M04/B0/5B/960x0_1_q40_autohomecar__wKgFWVoCtNKAR6E3AAIvhunRYq0956.jpg"
                                               page="1" index="19"></p>
        <p align="center" class="fn-hide"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block"
                                               alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型"
                                               src="//m1.autoimg.cn/cardfs/product/g7/M03/D5/D6/960x0_1_q40_autohomecar__wKjB0FoCtNKAKxV_AAG4sCSM_Y8147.jpg"
                                               page="1" index="20"><br></p>
                                               <p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M12/AD/75/960x0_1_q40_autohomecar__wKjBw1oCtMyAYmEIAAKYseuBb6o930.jpg" page="2" index="24"><br></p><p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g12/M0C/D4/10/960x0_1_q40_autohomecar__wKjBy1oCyF-AUaR8AAFNgmRIGX4715.jpg" page="2" index="25"><br></p><p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M04/D8/EC/960x0_1_q40_autohomecar__wKgH3VoCtNGATSR1AALuv0iGVxg565.jpg" page="2" index="26"><br></p>`,

    `<p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g20/M0C/AA/37/960x0_1_q40_autohomecar__wKgFVFoCtMqAV0OiAAJOxBRExOg725.jpg" page="3" index="40"><br></p><p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M0C/D1/60/960x0_1_q40_autohomecar__wKgHzloCtMqAajq_AAJri5DiC70263.jpg" page="3" index="41"><br></p><p align="center"><img title="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" style="DISPLAY: inline-block" alt="奇瑞捷豹路虎 捷豹XEL 2018款 基本型" src="//m1.autoimg.cn/cardfs/product/g7/M13/D1/60/960x0_1_q40_autohomecar__wKgHzloCtMmAWYC5AAHT67sojlI514.jpg" page="3" index="42"><br></p><p><strong>编辑点评：</strong></p><p>&nbsp; &nbsp; 加长后的XEL从外观来看还是很协调的，特别是车身线条方面，丝毫没有受加长100mm的影响，这点是值得肯定的，也说明了捷豹的设计团队实力不可小觑。其次从配置来看，我们的这台拍摄车可说是相当的丰富，包括无钥匙进入、12.3英寸全液晶表盘、前排座椅脚托、前后排座椅加热、全景天窗、电动后备厢、后排遮阳帘等配置一应俱全，和同级别对手相比，很有竞争力。当然其中有部分配置根据以往XE的情况来看，我们推测有可能是选装的，比如HUD抬头显示、19英寸轮圈以及电磁悬架等，这就要待配置表发布之后才能确定了。</p><p>&nbsp; &nbsp; 在中国消费者关注的方面，轴距加长了100mm之后XEL的前排空间并没有得到改善，还是显得比较局促，当然对于偏爱驾驶的消费者来说，或许会比较青睐这种被“包覆”在座舱内的感觉。后排方面则要比进口版XE宽敞不少，腿部空间增加到了两拳以上，比宝马3系Li的后排还要大，光是凭借这点，就足够让消费者在两者之间的选择上犹豫一阵子了。动力方面，全新的2.0T发动机参数很漂亮，和8速手自一体变速箱的匹配之前我们在测试XFL时给出的评价也非常不错，所以此番搭载在车身更小的XEL上动力表现自然不用担心。</p><p>&nbsp; &nbsp; 其他方面，包括全铝车身、前桥双叉臂，后桥整合连杆式独立悬架，这些捷豹对于行驶品质的追求在XEL上完全没有做任何妥协。换言之，捷豹既希望XEL能够凭借国产来提高单车利润，同时利用更宽敞的后排吸引中国消费者，又不愿放弃其在运动领域的一脉传承，更何况是在最该保持运动基因的中型车领域。当然了，至于消费者是否真的会为其买单，最后还是得看价格，毕竟在现有级别中，奔驰C级和宝马3系都提供了包括长轴距和标准轴距两种方案供消费者选择，而包括奥迪A4L、凯迪拉克ATS-L和英菲尼迪Q50L都提供了非常大的终端优惠，所以接下来，留给捷豹的空间真的不大了。XEL是否能够帮助捷豹力挽狂澜，我们拭目以待。（文/图/摄 汽车之家）</p>`
  ];

  totalPageCount: number = this.detailsPage.length;
  current: number = 0;
  currentPage: string = this.detailsPage[this.current];

  //上一页
  forwardPage(): void {
    if (this.current > 0) {
      this.current--;
      this.currentPage = this.detailsPage[this.current];
    }
  }

  // 下一页
  nextPage(): void {
    if (this.current < this.totalPageCount - 1) {
      this.current++;
      this.currentPage = this.detailsPage[this.current];
    }
  }

  //选中页
  selectPage($event): void {
    // console.log($event.target.value);
    this.current = parseInt($event.target.value);
    this.currentPage = this.detailsPage[this.current];
  }
}
