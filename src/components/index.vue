<template>
  <div class="index_web">
    <div class="content_wrap">
      <div class="swiper_container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in home_banner" :key="index"  :data-id="item.id" :data-url="item.url">
            <!-- <a :href="item.url"> -->
              <img :src="item.filepath">
            <!-- </a> -->
          </div>
          <!-- <div class="swiper-slide"><img :src="img_base_url+'/carousel_img01.jpg'"></div>
          <div class="swiper-slide"><img :src="img_base_url+'/carousel_img02.jpg'"></div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div> -->
        <!-- <div class="swiper-button-next"></div> -->
      </div>
      <div class="nav_wrapper">
        <nav_button :img="img_base_url+'/document_fill.png'" typeN="简介" url="intro"></nav_button>
        <nav_button :img="img_base_url+'/group_fill.png'" typeN="选手" url="player"></nav_button>
        <div class="nav_big_btn" @click="_class()">
          <span class="img_wrap">
            <img :src="img_base_url+'/head.png'">
          </span>
          <span class="text_wrap">
            钱浅弟子班
          </span>
        </div>
        <div class="nav_button" @click="_Bstart()">
            <a href="javascript:void(0)">
                <span class="icon_wrap">
                    <img :src="img_base_url+'/praise_fill.png'">
                </span>
                <span class="text_wrap">投票</span>
            </a>
        </div>
        <div class="nav_button">
            <a :href="domain+'webapp/zshdLive/mobile_live.html'">
                <span class="icon_wrap">
                    <img :src="img_base_url+'/live_fill.png'">
                </span>
                <span class="text_wrap">直播</span>
            </a>
        </div>
      </div>
      <div class="ab_wrapper"  v-if="home_banner != []">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in ad_banner" :key="index" :data-id="item.id" :data-url="item.url"><img :src="item.filepath"></div>
          <!-- <div class="swiper-slide"><img :src="img_base_url+'/ad.jpg'"></div>
          <div class="swiper-slide"><img :src="img_base_url+'/ad.jpg'"></div>
          <div class="swiper-slide"><img :src="img_base_url+'/ad.jpg'"></div> -->
        </div>
      </div>
      <div class="game_course_wrap">
        <div class="game_course">
          <div class="wrapper">
            <div class="time_course">
              <div class="content">
                <div class="course_wrap">
                  <span>学员海选</span>
                </div>
                <div class="time_wrap">
                  <span>-&nbsp;2018.3&nbsp;-</span>
                </div>
              </div>
            </div>
            <div class="time_course">
              <div class="content">
                <div class="course_wrap">
                  <span>户外竞技</span>
                </div>
                <div class="time_wrap">
                  <span>-&nbsp;2018.6&nbsp;-</span>
                </div>
              </div>
            </div>
            <div class="time_course">
              <div class="content">
                <div class="course_wrap">
                  <span>人气比拼</span>
                </div>
                <div class="time_wrap">
                  <span>-&nbsp;2018.8&nbsp;-</span>
                </div>
              </div>
            </div>
            <div class="time_course">
              <div class="content">
                <div class="course_wrap">
                  <span>决战巅峰</span>
                </div>
                <div class="time_wrap">
                  <span>-&nbsp;2018.10&nbsp;-</span>
                </div>
              </div>
            </div>
            <div class="trophy_wrap">
              <img :src="img_base_url+'/before_start.png'">
            </div>
          </div>
        </div>
      </div>
      <div class="start_mentor">
        <img :src="img_base_url+'/start_mentor.jpg'">
        <span class="point_wrap point_01" data-name="钱浅"><span class="dot"></span></span>
        <span class="point_wrap point_02" data-name="郭东"><span class="dot"></span></span>
        <span class="point_wrap point_03" data-name="郑明明"><span class="dot"></span></span>
        <span class="point_wrap point_04" data-name="靳建忠"><span class="dot"></span></span>
        <span class="point_wrap point_05" data-name="李涛"><span class="dot"></span></span>
      </div>
      <div class="message_list">
        <item_title :img_url="img_base_url+'/new_message.png'"></item_title>
        <div class="item_wrap">
          <message_item v-for="(item,index) in article" :key="index"
                        :id="item.id"
                        :img_url="item.filepath"
                        :title_text="item.title"
                        :view_text="item.look_num"
                        :time_text="item.add_time">
          </message_item>
          <!-- <message_item :img_url="img_base_url+'/message_item.jpg'" view_text="62510" time_text="16分钟前"></message_item>
          <message_item :img_url="img_base_url+'/message_item.jpg'" view_text="62510" time_text="16分钟前"></message_item>
          <message_item :img_url="img_base_url+'/message_item.jpg'" view_text="62510" time_text="16分钟前"></message_item> -->
          <more url="/message"></more>
        </div>
      </div>
      <div class="video_list">
        <item_title :img_url="img_base_url+'/video.png'"></item_title>
        <div class="item_wrap">
          <video_item v-for="(item,index) in new_vedio" :key="index"
                      :id = "item.id"
                      :img_url="item.cover_img"
                      :subtitle="item.subtitle"
                      :title="item.title"
                      :detail="item.desc">
          </video_item>
          <!-- <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item> -->
          <more change="open" url="video"></more>
        </div>
      </div>
      <div class="ranking_wrap" v-if="team_rank && mem_rank">
        <item_title :img_url="img_base_url+'/ranking.png'"></item_title>
        <div class="ranking_con">
          <div class="btn_wrap">
            <span class="btn btn_active">战队排行</span>
            <span class="btn">个人排行</span>
          </div>
          <div class="desc_wrap">
            <span>*&nbsp;此比分截止至《超燃美二代》赛段</span>
          </div>
          <div class="team_wrap active">
            <team_item v-for="(item,index) in team_rank" :key="index"
                      :team_name="item.name"
                      :border_img="img_base_url+'/no'+(index+1)+'.png'"
                      :ordinal_img="img_base_url+'/no'+(index+1)+'.jpg'"
                      :team_img="item.filepath">
            </team_item>
            <more url="/ranking"></more>
          </div>
          <div class="personal_wrap">
            <per_item v-for="(item,index) in mem_rank" :key="index"
                      :per_name="item.name"
                      :poll="item.point"
                      :sort_num="_add0(index+1)"
                      :on_off="on_off"
                      :head_img="item.filepath">
            </per_item>
            <more url="/ranking"></more>
          </div>
        </div>
      </div>
      <div class="review_wrap">
        <div class="review_title">-&nbsp;往期回顾&nbsp;-</div>
        <div class="item_wrap">
          <video_item v-for="(item,index) in old_vedio" :key="index"
                      :id="item.id"
                      :img_url="item.cover_img"
                      :subtitle="item.subtitle"
                      :title="item.title"
                      :detail="item.desc">
          </video_item>
          <!-- <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item>
          <video_item :img_url="img_base_url+'/video.jpg'" title="baby两撕李晨" detail="片劫记载几张简简单单的图片劫记载"></video_item> -->
          <more change="open" url="OVideo"></more>
        </div>
      </div>
      <footer>
        <div class="foot_title">-&nbsp;美业职业教育平台&nbsp;-</div>
        <div class="code_wrap"><img :src="img_base_url+'/code.jpg'"></div>
        <div class="companuy_name">Copyright © 2018 美服网. All Rights Reserved.   </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import nav_button from "@/components/nav/nav_button";
import axios from "axios";
import common from "@/common/js/common.js";
import item_title from "@/components/index/item_title";
import message_item from "@/components/index/message_item";
import more from "@/components/index/more";
import video_item from "@/components/index/video_item";
import team_item from "@/components/index/team_item";
import per_item from "@/components/index/per_item";
import wxapi from '../mixins/wxapi.js';
export default {
  name: "index",
  components: {
    nav_button,
    item_title,
    message_item,
    more,
    video_item,
    team_item,
    per_item,
  },
  data () {
    return{
      img_base_url: common.img_base_url,
      ad_banner : [],
      article : [],
      home_banner : [],
      new_vedio : [],
      old_vedio : [],
      team_rank : [],
      mem_rank : [],
      time : "",
      tutors_id : [],
      domain : common.domain,
      on_off : "off",
      signPackage : {}
    }
  },
  created () {
    common.title_change("【我最闪耀】美二代领袖大赛");
    //调用
    // wxapi.wxRegister(this.wxRegCallback,{url:window.location.href});
    this.$dialog.loading.open("loading");
  },
  mounted () {
    this._get_data();
    this.btn_touch();
    // this._mentor_push();
    // this._ad_push();
  },
  beforeDestroy () {
    this.home_banner = [];
  },
  methods: {
    wxRegCallback() {
      var friends = wxapi.wxShareTimeline(
      "【我最闪耀】美二代领袖大赛",
      window.location.href,
      );
      // 分享朋友圈
      wxapi.ShareTimeline(friends);
      var friend = wxapi.wxShareAppMessage(
        "【我最闪耀】美二代领袖大赛",
        "第二届【我最闪耀】美二代领袖大赛超燃开启！四位明星导师带领数十位美业接班人共同展现领袖风采！燃烧吧，美二代！",
        window.location.href,
      );
      // 分享朋友
      wxapi.ShareAppMessage(friend);
    },


    _swiper(wrapper, time, space, perview, pagination, slides) {
      var swiper_on = new Swiper(wrapper, {
        loop: true,
        pagination: pagination,
        // nextButton : ".swiper-button-next",
        // prevButton : ".swiper-button-prev",
        autoplay : time,
        spaceBetween : space,
        slidesPerView : perview,
        centeredSlides : true,
        autoplayDisableOnInteraction: false,
        loopedSlides : slides,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true, //修改swiper的父元素时，自动初始化swiper
      })
    },
    btn_touch(){
      var btn = document.querySelectorAll(".btn");
      var team_wrap = document.querySelector(".team_wrap");
      var personal_wrap = document.querySelector(".personal_wrap");
      btn.forEach((el,index)=>{
        // console.log(el)
        el.addEventListener("touchstart",()=>{
          btn.forEach(el=>{
            el.classList.remove("btn_active");
            team_wrap.classList.remove("active");
            personal_wrap.classList.remove("active");
          })
          el.classList.add("btn_active");
          if(index === 0){
            team_wrap.classList.add("active");
          }
          if(index === 1){
            personal_wrap.classList.add("active");
          }
        })
      })
    },
    _get_data() {
      axios
        .post(common.index)
        .then(res => {
          // console.log(res.status);
          common.redirect(res);
          this.ad_banner = res.data.data.ad_banner;
          this.article = res.data.data.article;
          this.home_banner = res.data.data.home_banner;
          this.new_vedio = res.data.data.new_vedio;
          this.old_vedio = res.data.data.old_vedio;
          this.team_rank = res.data.data.team_rank;
          this.mem_rank = res.data.data.mem_rank;
          this.time = res.headers.date;
          this.tutors_id = res.data.data.tutors_id;
          this.$dialog.loading.close();
          this.signPackage = res.data.data.signPackage;
        },error => {
          this.$dialog.toast({mes:"加载失败",timeout:3000,icon:"error",});
          this.$dialog.loading.close();
        })
        .then(() => {
          wxapi.wxRegister_o(this.wxRegCallback,this.signPackage);
          // swiper的调用
          this._swiper(
            ".swiper_container",
            2000,
            0,
            1,
            ".swiper-pagination",
            this.home_banner.length
          );
          this._swiper(".ab_wrapper", 3000, 15, 1.2, "", this.ad_banner.length);
          // 时间的文章时间的转换
          common.time_change(this.article, this.ad_banner.length);
          // 排行补0
          // console.log(this.mem_rank);
          if (this.mem_rank) {
            common.num_chagne(this.mem_rank);
          }
          // 赛程的时间判断
          this._time_move();
          // 导师事件添加
          this._mentor_push();
          // 轮播图事件的添加
          this._ad_push(".ab_wrapper");
          this._ad_push(".swiper_container");
          // this.$nextTick(function(){
          //   this._ad_push();
          // })
          // 排行开关判断
          this.mem_rank.forEach(el => {
            // console.log(el);
            if (el.point == 0) {
              return;
            } else {
              this.on_off = "on";
            }
          });
        });
    },
    _add0(index){
        // index++;
        if(index < 10){
            return '0'+index;
        }else{
            return index;
        }
    },
    _ad_push(wrapper){
        var ab_wrapper = document.querySelector(wrapper);
        var ad_banner = ab_wrapper.children[0].children;
        for(let a = 0;a < ad_banner.length; a++){
          ad_banner[a].addEventListener("click",()=>{
            if(ad_banner[a].attributes[1].value != ""){
              window.location.href = ad_banner[a].attributes[1].value;
            } else {
              this.$router.push({name:"ad",params:{id:ad_banner[a].attributes[0].value}});
            }
          })
        }
    },
    _flag_move(){
      let flag = document.createElement("div");
      flag.classList.add("flag_wrap");
      let flag_img = document.createElement("img");
      flag_img.src = common.img_base_url+"/flag.png";
      flag.appendChild(flag_img);
      let time_course = document.querySelectorAll(".time_course");
      time_course.forEach(el=>{
        if(el.classList.contains("now_active")){
          el.insertBefore(flag,el.children[0]);
        }
      })
    },
    _add_dot(){
      let dot = document.createElement("div");
      dot.classList.add("dot");
      let line = document.createElement("div");
      line.classList.add("line_light");
      dot.appendChild(line);
      let time_course = document.querySelectorAll(".time_course");
      time_course.forEach(el=>{
        if(el.classList.contains("now_active")){
          for(let i = 0;i < el.children.length;i ++){
            if(el.children[i].classList.contains("content")){
              el.children[i].appendChild(dot);
            }
          }
        }
      })
      // console.log(time_course);
    },
    _time_move(){
      // console.log(this.time);
      let now = new Date(this.time);
      let year = now.getFullYear();
      let month = now.getMonth();
      let day = now.getDate();
      let time_course = document.querySelectorAll(".time_course");
      let trophy = document.querySelector(".trophy_wrap");
      // console.table({year:year,month:month,day:day});
      if(year == 2018){
        if(month < 7){
          time_course[1].classList.add("now_active");
        }else if(month < 9){
          time_course[2].classList.add("now_active");
        }else if(month == 9 && day < 13){
          time_course[3].classList.add("now_active");
        }else if(month == 9 && day > 13){
          trophy.classList.add("trophy_active");
          trophy.children[0].src = common.img_base_url+"/started.png";
        }
      }
      this._flag_move();
      this._add_dot();
    },
    _Bstart(){
      this.$router.push({path:'/BStart'});
    },
    _class(){
      this.$router.push({path:'/class'});
    },
    _mentor_push(){
      var point_wraps = document.querySelectorAll(".point_wrap");
      // console.log(point_wraps);
      point_wraps.forEach(el=>{
        // console.log(el.attributes[0].value)
        this.tutors_id.forEach(ele=>{
          if(el.attributes[0].value == ele.name){
              el.addEventListener("click",()=>{
                this.$router.push({path:"/mentor/"+ele.id});
              })
          }
        })
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/common/scss/common.scss";
.index_web {
  @include web_reset;
  .content_wrap {
    position: absolute;
    // top: r(80px);
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    .swiper_container {
      width: 100%;
      overflow: hidden;
      position: relative;
      .swiper-wrapper {
        .swiper-slide {
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet {
          width: r(20px);
          height: r(4px);
          margin-right: r(2px);
          border-radius: 0;
          &:nth-of-type(2n + 1) {
            background-color: rgb(240, 203, 238);
          }
          &:nth-of-type(2n) {
            background-color: rgb(196, 214, 246);
          }
        }
        .swiper-pagination-bullet-active {
          &:nth-of-type(odd),
          &:nth-of-type(even) {
            background-color: #4efaff;
          }
        }
      }
    }
    .nav_wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 4%;
      padding: r(32px) r(36px) r(60px) r(32px);
      .nav_big_btn {
        width: 25%;
        position: relative;
        span {
          display: block;
        }
        .img_wrap {
          position: absolute;
          left: 50%;
          top: r(-12px);
          transform: translateX(-50%);
          width: r(110px);
          height: r(110px);
          border: 1px solid #01a3d6;
          border-radius: 50%;
          padding: r(2px);
          img {
            width: 100%;
            display: block;
            border-radius: 50%;
          }
        }
        .text_wrap {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          background: url(#{$img_base_url}/text_img.png);
          background-size: 100%;
          height: r(50px);
          text-align: center;
          color: #fff;
          font-size: r(20px);
          padding-top: r(5px);
        }
      }
    }
    .ab_wrapper {
      width: 100%;
      overflow: hidden;
      margin-bottom: r(26px);
      .swiper-slide {
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .game_course_wrap {
      padding: 0 r(24px);
      background-color: #0b0006;
      .game_course {
        padding-top: r(40px);
        padding-bottom: r(20px);
        overflow: hidden;
        .wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #453e5d;
          padding-bottom: r(26px);
          .time_course {
            display: flex;
            justify-content: space-between;
            .content {
              .course_wrap,
              .time_wrap {
                color: #554d69;
                text-align: center;
              }
              .course_wrap {
                font-size: r(22px);
              }
              .time_wrap {
                font-size: r(18px);
              }
            }
          }
          .now_active {
            .flag_wrap {
              width: r(40px);
              height: r(52px);
              overflow: hidden;
              margin-right: r(18px);
              img {
                width: 100%;
                display: block;
              }
            }
            .content {
              position: relative;
              .course_wrap {
                font-size: r(26px);
                color: #615ad8;
              }
              .dot {
                position: absolute;
                left: 50%;
                bottom: r(-40px);
                transform: translateX(-50%);
                width: r(24px);
                height: r(24px);
                border: r(3px) solid #615ad8;
                border-radius: 50%;
                background-color: $index_color01;
                .line_light {
                  position: absolute;
                  right: 100%;
                  top: 50%;
                  transform: translateY(-50%);
                  width: r(750px);
                  height: 2px;
                  background-color: #615ad8;
                }
              }
            }
          }
          .trophy_wrap {
            width: r(48px);
            height: r(52px);
            overflow: hidden;
            img {
              width: 100%;
              display: block;
            }
          }
          .trophy_active {
            width: r(80px);
            height: r(66px);
            overflow: hidden;
          }
        }
      }
    }
    .start_mentor {
      width: 100%;
      overflow: hidden;
      margin-bottom: r(66px);
      position: relative;
      img {
        width: 100%;
      }
      .point_wrap {
        position: absolute;
        width: r(100px);
        height: r(100px);
        .dot {
          display: inline-block;
          width: r(20px);
          height: r(20px);
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          border: r(3px) solid rgba($color: #fff, $alpha: 0.5);
          border-radius: 50%;
        }
      }
      .point_01 {
        left: r(68px);
        bottom: r(45px);
        .dot {
          background-color: $dot01;
          animation: dot01 1s infinite alternate;
        }
      }
      .point_02 {
        left: r(242px);
        bottom: r(88px);
        .dot {
          background-color: $dot02;
          animation: dot02 1s 0.5s infinite alternate;
        }
      }
      .point_03 {
        left: r(372px);
        bottom: r(56px);
        .dot {
          background-color: $dot03;
          animation: dot03 2s infinite alternate;
        }
      }
      .point_04 {
        right: r(168px);
        bottom: r(56px);
        .dot {
          background-color: $dot04;
          animation: dot04 1s 0.5s infinite alternate;
        }
      }
      .point_05 {
        right: r(21px);
        bottom: r(79px);
        .dot {
          background-color: $dot05;
          animation: dot05 1.5s infinite alternate;
        }
      }
    }
    .message_list {
      width: 100%;
      .item_wrap {
        width: 100%;
        padding: 0 r(24px);
        .messig_item {
          &:first-child {
            padding-top: 0;
          }
        }
      }
    }
    .video_list {
      width: 100%;
      padding-top: r(54px);
      background-color: $index_color02;
      .item_wrap {
        width: 100%;
        padding: 0 r(24px);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .video_item:nth-last-child(2),
        .video_item:nth-last-child(3) {
          margin-bottom: 0;
        }
      }
    }
    .ranking_wrap {
      padding-top: r(40px);
      background-color: black;
      // display: none;
      img {
        pointer-events: none;
      }
      .ranking_con {
        width: 100%;
        padding: 0 r(23px);
        .team_item:nth-last-child(2) {
          margin-bottom: 0;
        }
        .btn_wrap {
          width: r(670px);
          border: 1px solid #fff;
          border-radius: r(5px);
          font-size: 0;
          margin: 0 auto;
          margin-bottom: r(32px);
          .btn {
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: r(80px);
            color: #461d7d;
            font-size: r(30px);
          }
          .btn_active {
            background-color: #fff;
            color: #df29ae;
          }
        }
        .desc_wrap{
          font-size: r(26px);
          color: #c5a4dc;
          line-height: r(26px);
          text-align: center;
          margin-bottom: r(32px);
          vertical-align: middle;
        }
        .team_wrap,
        .personal_wrap {
          display: none;
        }
        .team_wrap {
          width: 100%;
        }
        .active {
          display: block;
        }
      }
    }
    .review_wrap {
      width: 100%;
      padding-top: r(70px);
      background-color: $index_color02;
      .review_title {
        width: 100%;
        font-size: r(36px);
        color: $footer_color;
        margin-bottom: r(32px);
        text-align: center;
      }
      .item_wrap {
        width: 100%;
        padding: 0 r(24px);
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    footer {
      padding: r(60px) 0 r(34px);
      .foot_title {
        width: 100%;
        line-height: r(28px);
        font-size: r(26px);
        color: $footer_color;
        text-align: center;
        margin-bottom: r(30px);
      }
      .code_wrap {
        width: r(215px);
        height: r(215px);
        overflow: hidden;
        margin: 0 auto;
        margin-bottom: r(60px);
        img {
          display: block;
          width: 100%;
        }
      }
      .companuy_name {
        width: 100%;
        font-size: r(20px);
        color: #6f637c;
        overflow: hidden;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
  
}
</style>

