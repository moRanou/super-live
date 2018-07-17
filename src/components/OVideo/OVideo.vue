<template>
    <div class="video_web">
        <com_title></com_title>
        <div class="content_wrap">
            <div class="title_wrapper">
                <span>-&nbsp;往期回顾&nbsp;-</span>
            </div>
            <div class="item_wrap">
                <video_item v-for="(item,index) in info" :key="index"
                                :id="item.id"
                                :img_url="item.cover_img" 
                                :title="item.title" 
                                :subtitle="item.subtitle"
                                :detail="item.desc">
                    </video_item>
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
import wxapi from "@/mixins/wxapi.js";
export default {
  components: {
    com_title,
    video_item
  },
  created() {
    this._get_data();
    common.title_change("往期回顾");
    // wxapi.wxRegister(this.wxRegCallback, { url: window.location.href });
  },
  mounted() {
    this._get_more();
  },
  data() {
    return {
      img_base_url: common.img_base_url,
      info: [],
      more_icon: "",
      page: 1
    };
  },
  methods: {
    wxRegCallback() {
      var a = wxapi.wxShareTimeline(
        "【我最闪耀】美二代领袖大赛往期回顾",
        window.location.href,
        
      );
      // 分享朋友圈
      wxapi.ShareTimeline(a);
      var b = wxapi.wxShareAppMessage(
        "【我最闪耀】美二代领袖大赛往期回顾",
        "首届【我最闪耀】美二代领袖大赛获得上百万的投票量，近80万的直播关注",
        window.location.href,
      );
      // 分享朋友
      wxapi.ShareAppMessage(b);
    },
    _get_data() {
      axios
        .post(common.more, {
          action: "vedio",
          ispaging: 1,
          key: "old_vedio"
        })
        .then(res => {
          // console.log(res);
          this.info = res.data.data.info;
        });
    },
    _add_data() {
      this.page++;
      axios
        .post(common.more, {
          action: "vedio",
          ispaging: 1,
          page: this.page,
          key: "old_vedio"
        })
        .then(res => {
          // console.log(res);
          res.data.data.info.forEach(el => {
            this.info.push(el);
          });
          // console.log(this.info);
          this.more_icon.classList.remove("rotate");
        });
    },
    _get_more() {
      let more_wrap = document.querySelector(".load_more span");
      // console.log(more_wrap)
      this.more_icon = document.querySelector(".load_more i");
      more_wrap.addEventListener("click", () => {
        this.more_icon.classList.add("rotate");
        this._add_data();
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
}
</style>
