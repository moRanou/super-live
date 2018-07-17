<template>
    <div class="video_web">
        <com_title></com_title>
        <div class="content_wrap">
            <div class="title_wrapper">
                <span><img :src="img_base_url+'/zhibo.png'"></span>
            </div>
            <div class="video_wrapper">
                <div class="video_wrap">
                    <iframe class="video" :src='video.vedio_url' frameborder=0></iframe>
                </div>
                <div class="video_title">
                    <span>{{video.title}}</span>
                </div>
                <div class="detail_wrap">
                    <span>{{video.desc}}</span>
                </div>
            </div>
            <div class="moment_wrap">
                <div class="title_wrapper">
                    <span>-&nbsp;超燃瞬间&nbsp;-</span>
                </div>
                <div class="item_wrap">
                    <video_item v-for="(item,index) in video_data" :key="index"
                                :id="item.id"
                                :img_url="item.cover_img"
                                :title="item.title" 
                                :subtitle="item.subtitle"
                                :detail="item.desc">
                    </video_item>
                </div>
            </div>
            <div class="load_more">
                <span><i class="iconfont icon-fresh-4"></i>&nbsp;加载更多</span>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common";
import com_title from "@/components/title/title";
import video_item from "@/components/index/video_item";
import axios from "axios";
import wxapi from "../../mixins/wxapi.js";
export default {
  components: {
    com_title,
    video_item
  },
  created() {
    this._get_video_data();
    this._get_video();
    common.title_change("最新视频");
    // wxapi.wxRegister(this.wxRegCallback, { url: window.location.href });
  },
  mounted() {
    this._get_more();
  },
  data() {
    return {
      video_url: common.video_base_url + "/test.mp4",
      img_base_url: common.img_base_url,
      video_data: [],
      more_icon: "",
      video: {},
      page: 1
    };
  },
  methods: {
    wxRegCallback() {
      var a = wxapi.wxShareTimeline(
        "【我最闪耀】美二代领袖大赛精彩视频",
        window.location.href
      );
      // 分享朋友圈
      wxapi.ShareTimeline(a);
      var b = wxapi.wxShareAppMessage(
        "【我最闪耀】美二代领袖大赛精彩视频",
        "错过了首届美二代活动？想及时观看第二届美二代们的超燃瞬间？马上进入【我最闪耀】美二代领袖大赛专题页，观看更多精彩视频",
        window.location.href
      );
      // 分享朋友
      wxapi.ShareAppMessage(b);
    },

    _get_video_data() {
      axios
        .post(common.more, {
          action: "vedio",
          ispaging: 1,
          page: this.page,
          key: "new_vedio"
        })
        .then(res => {
          // console.log(res);
          this.video_data = res.data.data.info;
        });
    },
    _add_data() {
      this.page++;
      axios
        .post(common.more, {
          action: "vedio",
          ispaging: 1,
          page: this.page,
          key: "new_vedio"
        })
        .then(res => {
          // console.log(res);
          res.data.data.info.forEach(el => {
            this.video_data.push(el);
          });
          // console.log(this.video_data);
          this.more_icon.classList.remove("rotate");
        });
    },
    _get_more() {
      let more_wrap = document.querySelector(".load_more span");
      this.more_icon = document.querySelector(".load_more i");
      more_wrap.addEventListener("click", () => {
        this.more_icon.classList.add("rotate");
        this._add_data();
      });
    },
    _get_video() {
      axios.post(common.priority).then(res => {
        // console.log(res);
        this.video = res.data.data;
      });
    }
  }
};
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.video_web {
  @include web_reset;
  .content_wrap {
    @include web_next;
    @include get_more;
    background: url(#{$img_base_url}/bg01.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    > .title_wrapper {
      padding: r(45px) 0 r(30px);
      text-align: center;
      span {
        display: inline-block;
        width: r(300px);
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .video_wrapper {
      padding: 0 r(24px) r(50px);
      .video_wrap {
        width: 100%;
        height: r(395px);
        margin-bottom: r(24px);
        .video {
          width: 100%;
          height: 100%;
          background: #000;
        }
      }
      .video_title {
        font-size: r(30px);
        color: #fff;
      }
      .detail_wrap {
        width: 100%;
        span {
          display: block;
          height: r(30px);
          overflow: hidden;
          line-height: r(30px);
          font-size: r(24px);
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #7054d3;
        }
      }
    }
    .moment_wrap,
    .review_wrap {
      width: 100%;
      padding: r(30px) r(24px) 0;
      .title_wrapper {
        width: 100%;
        text-align: center;
        color: #f4e2fa;
        font-size: r(36px);
        margin-bottom: r(30px);
      }
      .item_wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    .moment_wrap {
      background-color: #000;
    }
  }
}
</style>
