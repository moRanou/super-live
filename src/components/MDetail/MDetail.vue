<template>
    <div class="MDetail_web">
        <com_title url="/message"></com_title>
        <div class="content_wrap">
            <div class="a_title">
                <span>-&nbsp;{{desc.title}}&nbsp;-</span>
            </div>
            <div class="a_content">
                
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
    name : 'MDdetail',
    components : {
        com_title,
    },
    created () {
        this.id = this.$route.params.id;
        this._get_data();
        common.title_change("资讯详情");
    },
    data () {
        return {
            id : 2,
            desc : {},
            signPackage : {}
        }
    },
    methods : {
        _get_data () {
            axios.post(common.article_desc,{
                id : this.id
            }).then(res=>{
                // console.log(res);
                this.desc = res.data.data.article;
                this.signPackage = res.data.data.signPackage;
            }).then(()=>{
                // wxapi.wxRegister(this.wxRegCallback,{url:window.location.href});
                wxapi.wxRegister_o(this.wxRegCallback,this.signPackage);
                var content = document.querySelector(".a_content");
                if(this.desc.detail){
                    content.innerHTML = this.desc.detail;
                }
            })
        },
        wxRegCallback() {
            var friends = wxapi.wxShareTimeline(this.desc.title,window.location.href,this.desc.filepath);
            // 分享朋友圈
            wxapi.ShareTimeline(friends);
            var friend = wxapi.wxShareAppMessage(this.desc.title,this.desc.desc,window.location.href,this.desc.filepath,"","");
            // 分享朋友
            wxapi.ShareAppMessage(friend);
        },
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.MDetail_web{
    @include web_reset;
    .title{
        background-color: #000;
    }
    background-color: #fff;
    .content_wrap{
        @include web_next;
        padding-top: 0;
        .a_title{
            text-align: center;
            font-size: r(30px);
            color: #fff;
            line-height: r(46px);
        }
        .a_content{
            padding: 0 r(24px);
            *{
                max-width: 100%;
                img{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
}
</style>
