<template>
    <div class="message_web">
        <com_title></com_title>
        <div class="item_wrap">
            <message_item v-for="(item,index) in info" :key="index"
                            :id="item.id"
                            :img_url="item.filepath" 
                            :title_text="item.title" 
                            :view_text="item.look_num" 
                            :time_text="item.add_time">
            </message_item>
        </div>
        <div class="load_more">
            <span><i class="iconfont icon-fresh-4"></i>&nbsp;加载更多</span>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common.js";
import com_title from "@/components/title/title";
import message_item from "@/components/index/message_item";
import axios from "axios";
import wxapi from "../..//mixins/wxapi.js";
export default {
  components: {
    com_title,
    message_item
  },
  created() {
    this._get_article();
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
      time: "",
      page: 1
    };
  },
  methods: {
    wxRegCallback() {
      var a = wxapi.wxShareTimeline(
        "【我最闪耀】美二代领袖大赛最新资讯",
        window.location.href
      );
      wxapi.ShareTimeline(a);
      var b = wxapi.wxShareAppMessage(
        "【我最闪耀】美二代领袖大赛最新资讯",
        "《超燃美二代》活动直播、美二代投票入口、【我最闪耀】美二代领袖大赛决赛……更多美二代活动最新消息，尽在美二代专题页。",
        window.location.href
      );

      wxapi.ShareAppMessage(b);
    },
    _get_article() {
      axios
        .post(common.more, {
          action: "article",
          ispaging: 1,
          page_size: 10,
          page: this.page
        })
        .then(res => {
          // console.log(res.headers);
          this.info = res.data.data.info;
          this.time = res.headers.date;
          this._title_change();
        })
        .then(() => {
          common.time_change(this.info, this.time);
          // console.log(this.info);
        });
    },
    _add_data() {
      this.page++;
      axios
        .post(common.more, {
          action: "article",
          ispaging: 1,
          page_size: 10,
          page: this.page
        })
        .then(res => {
          // console.log(res);
          var new_info = res.data.data.info;
          common.time_change(new_info, this.time);
          new_info.forEach(el => {
            this.info.push(el);
          });
          // console.log(this.info);
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
    _title_change() {
      // console.log(this.time);
      var now_time = new Date(this.time);
      var obj = {};
      obj.year = now_time.getFullYear();
      obj.month = now_time.getMonth() + 1;
      obj.day = now_time.getDate();
      now_time = obj;
      if (now_time.year == 2018) {
        if (now_time.month == 6 && now_time.day >= 18 && now_time.day <= 24) {
          common.title_change("现场报道");
        } else if (
          now_time.month == 10 &&
          now_time.day >= 6 &&
          now_time.day <= 9
        ) {
          common.title_change("现场报道");
        } else {
          common.title_change("最新资讯");
        }
      }
    }
  }
};
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.message_web {
  @include web_reset;
  @include get_more;
  .item_wrap {
    width: 100%;
    padding: r(24px) r(24px) 0;
    @include web_next;
    .messig_item {
      &:first-child {
        padding-top: 0;
      }
    }
  }
}
</style>
