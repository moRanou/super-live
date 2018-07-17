<template>
    <div class="mentor_web">
        <com_title url="/player"></com_title>
        <div class="content_wrap">
            <img v-for="(item,index) in web_data" :key="index" :src="item">
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common";
import com_title from "@/components/title/title";
import axios from 'axios';
import wxapi from '@/mixins/wxapi.js';
var i = 0;
export default {
    components : {
        com_title,
    },
    created () {
        this.id = this.$route.params.id;
        this._get_data();
        common.title_change("导师介绍");
    },
    data () {
        return {
            img_base_url : common.img_base_url,
            web_data : [],
            data : [],
            active_data : {},
            id : "",
            signPackage : {}
        }
    },
    methods : {
        _get_data(){
            axios.post(common.tutor_info,{
                id : this.id
            })
            .then(res=>{
                // console.log(res);
                this.web_data = res.data.data.tutor.detail_img;
                this.data = res.data.data.tutor;
                this.signPackage = res.data.data.signPackage;
                // console.log(this.web_data);
            }).then(()=>{
                // wxapi.wxRegister(this.wxRegCallback,{url:window.location.href});
                wxapi.wxRegister_o(this.wxRegCallback,this.signPackage);
            })
        },
        _cut(){
            i++;
            if(i >= 4){
                i = 0;
            }
            this.active_data = this.web_data[i];
            // console.table({
            //     i : this.active_data
            // })
        },
        wxRegCallback() {
            var friends = wxapi.wxShareTimeline("【我最闪耀】导师 "+this.data.name,window.location.href,this.data.detail_img[0]);
            // 分享朋友圈
            wxapi.ShareTimeline(friends);
            var friend = wxapi.wxShareAppMessage("【我最闪耀】导师 "+this.data.name,this.data.desc,window.location.href,this.data.detail_img[0],"","");
            // 分享朋友
            wxapi.ShareAppMessage(friend);
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.mentor_web{
    @include web_reset;
    background-color: #18073b;
    .content_wrap{
        @include web_next;
        padding-top: 0;
        img{
            width: 100%;
            display: block;
        }
    }
}
</style>
