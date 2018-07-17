<template>
    <div class="PDetail_web">
        <com_title url="/player"></com_title>
        <div class="content_wrap">
            <div class="recom_wrap">
                <div class="head_img">
                    <img :src="p_data.img">
                </div>
                <div class="name_wrap">
                    <span>{{_add0(p_data.num)}}号&nbsp;{{p_data.name}}</span>
                </div>
                <div class="text_wrap">
                    <span>{{p_data.declaration}}</span>
                </div>
                <div class="btn_wrap">
                    <router-link to="/BStart">
                        <span>为TA投票</span>
                    </router-link>
                </div>
            </div>
            <div v-for="(item,index) in p_data.detail" :key="index" 
                    :class="_class_change(index)">
                <span v-if="index != 1">{{item}}</span>
                <img v-else :src="item">
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
    name: "PDetail",
    components : {
        com_title,
    },
    created () {
        this.id = this.$route.params.id;
        this._axiostest();
        common.title_change("选手介绍");
    },
    data () {
        return{
            img_base_url : common.img_base_url,
            id : 1,
            p_data : {},
            signPackage : {}
        }
    },
    methods : {
        _axiostest(){
            axios.post(common.info_base_url,{
                    id : this.id,
            }).then(res=>{
                // console.log(res);
                this.p_data = res.data.data.memberinfo;
                this.signPackage = res.data.data.signPackage
            }).then(()=>{
                // wxapi.wxRegister(this.wxRegCallback,{url:window.location.href});
                wxapi.wxRegister_o(this.wxRegCallback,this.signPackage);
            })
        },
        _add0(index){
            // index++;
            if(index < 10){
                return '0'+index;
            }else{
                return index;
            }
        },
        _class_change(index){
            if(index == 1){
                return "detail_img"
            }else{
                return "detail_text"
            }
        },
        wxRegCallback() {
            console.log(this.video_desc)
            var friends = wxapi.wxShareTimeline("【我最闪耀】选手 "+this.p_data.name,window.location.href,this.p_data.img);
            // 分享朋友圈
            wxapi.ShareTimeline(friends);
            var friend = wxapi.wxShareAppMessage("【我最闪耀】选手 "+this.p_data.name,this.p_data.declaration,window.location.href,this.p_data.img,"","");
            // 分享朋友
            wxapi.ShareAppMessage(friend);
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.PDetail_web{
    @include web_reset;
    .title{
        background-color: rgba($color: #87608f, $alpha: 0.5);
    }
    .content_wrap{
        @include web_next;
        background: url(#{$img_base_url}/bg03.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        padding-top: r(160px);
        .recom_wrap{
            margin: 0 r(24px) r(38px);
            height: r(430px);
            background: url(#{$img_base_url}/dcard.png);
            background-size: 100%;
            background-repeat: no-repeat;
            position: relative;
            .head_img{
                width: r(220px);
                height: r(220px);
                border: r(6px) solid #fff;
                background: url(#{$img_base_url}/head_bg.jpg);
                background-size: 100%;
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                left: 50%;
                top: 0;
                transform: translateX(-50%) translateY(-50%);
                box-shadow: 0 0 r(24px) r(10px) rgba(255, 0, 255, 0.5);
                img{
                    display: block;
                    width: 100%;
                }
            }
            .name_wrap{
                padding-top: r(140px);
                text-align: center;
                font-size: r(36px);
                color: #ff00ff;
                margin-bottom: r(18px);
            }
            .text_wrap{
                padding: 0 r(24px);
                height: r(96px);
                line-height: r(48px);
                font-size: r(26px);
                color: #00ffff;
                margin-bottom: r(25px);
                overflow: hidden;
                text-align: center;
            }
            .btn_wrap{
                width: r(180px);
                height: r(64px);
                margin: 0 auto;
                line-height: r(64px);
                text-align: center;
                color: #18073b;
                font-size: r(28px);
                background-color: #00ffff;
                border-radius: r(43px);
                position: relative;
                span{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    transform: translateX(-50%) translateY(-50%);
                }
            }
        }
        .detail_text{
            width: 100%;
            padding: 0 r(48px) r(34px);
            font-size: r(26px);
            line-height: r(48px);
            color: #f2d4fa;
            text-indent: 2em;
        }
        .detail_img{
            width: 100%;
            overflow: hidden;
            padding: 0 r(48px) r(26px);
            img{
                display: block;
                width: 100%;
            }
        }
    }
}
</style>
