<template>
    <div class="play_web">
        <com_title :url="_back()"></com_title>
        <div class="content_wrap">
            <div class="video_wrap">
                <div class="title_wrapper">
                    <span>-&nbsp;超燃瞬间&nbsp;-</span>
                </div>
                <iframe class="video"
                        :src='video_desc.vedio_url' 
                        frameborder=0>
                </iframe>
            </div>
            <div class="item_title">
                <span>{{video_desc.title}}</span>
            </div>
            <div class="item_detail">
                <div class="detail_title">
                    <span>简&nbsp;介</span>
                </div>
                <div class="text_wrap">
                    <span>{{video_desc.desc}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common";
import com_title from "@/components/title/title";
import axios from "axios";
import wxapi from '@/mixins/wxapi.js';
export default {
    name : "VDetail",
    props : {
        url : {
            type : String,
            default : "a"
        }
    },
    components : {
        com_title,
    },
    created () {
        this.id = this.$route.params.id;
        this._get_data();
        common.title_change("精彩视频");
    },
    data () {
        return {
            img_base_url : common.img_base_url,
            video_desc : {},
            id : 1,
            signPackage : {}
        }
    },
    methods : {
        _get_data () {
            axios.post(common.video_desc,{
                id : this.id
            }).then(res=>{
                // console.log(res);
                this.video_desc = res.data.data.vedio;
                this.signPackage = res.data.data.signPackage;
            }).then(()=>{
                // wxapi.wxRegister(this.wxRegCallback,{url:window.location.href});
                wxapi.wxRegister_o(this.wxRegCallback,this.signPackage);
            })
        },
        _back () {
            if(this.video_desc.key == "new_vedio"){
                return "/video";
            }else{
                return "/OVideo";
            }
        },
        wxRegCallback() {
            console.log(this.video_desc)
            var friends = wxapi.wxShareTimeline(this.video_desc.title,window.location.href,this.video_desc.cover_img);
            // 分享朋友圈
            wxapi.ShareTimeline(friends);
            var friend = wxapi.wxShareAppMessage(this.video_desc.title,this.video_desc.desc,window.location.href,this.video_desc.cover_img,"","");
            // 分享朋友
            wxapi.ShareAppMessage(friend);
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.play_web{
    @include web_reset;
    .content_wrap{
        @include web_next;
        padding-top: r(30px);
        .title_wrapper{
            width: 100%;
            text-align: center;
            color: #f4e2fa;
            font-size: r(36px);
            margin-bottom: r(20px);
        }
        .video_wrap{
            width: 100%;
            height: r(422px);
            margin-bottom: r(30px);
            .video{
                width: 100%;
                height: 100%;
                margin-bottom: r(30px);
            }
        }
        .item_title{
            padding-left: r(24px);
            padding-top: r(70px);
            font-size: r(30px);
            color: $item_title_color;
            margin-bottom: r(48px);
        }
        .item_detail{
            .detail_title{
                padding-left: r(24px);
                font-size: r(30px);
                color: #8f7ea1;
                margin-bottom: r(20px);
                span{
                    border-left: r(4px) solid #8f7ea1;
                    padding-left: r(16px);
                }
            }
            .text_wrap{
                font-size: r(24px);
                line-height: r(40px);
                color: #453e5d;
                padding: 0 r(38px);
            }
        }
    }
}
</style>
