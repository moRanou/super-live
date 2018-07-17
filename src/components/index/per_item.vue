<template>
    <div class="per_item">
        <div class="left_wrap">
            <span class="rank_wrap" v-if="on_off == 'on'">
                <img :src="img_base_url+'/'+sort_num+'.png'" v-if="sort_judge()">
                <span class="sort_num" v-if="!sort_judge()">{{sort_num}}</span>
            </span>
            <span class="head_img_wrap">
                <span class="head_img">
                    <img :src="head_img">
                </span>
                <span class="crown_wrap" v-if="sort_judge() && on_off == 'on'">
                    <img :src="img_base_url+'/crown'+sort_num+'.png'">
                </span>
            </span>
            <span class="message_wrap">
                <span class="per_name">{{per_name}}</span>
                <span class="poll">{{poll}}&nbsp;人</span>
            </span>
        </div>
        <div class="right_wrap">
            <!-- <span class="vote_btn">投票</span> -->
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common.js";
export default {
    props : {
        sort_num : {
            type : [String,Number],
            default : ""
        },
        head_img : {
            type : String,
            default : ""
        },
        per_name : {
            type : String,
            default : ""
        },
        poll : {
            type : [String,Number],
            default : ""
        },
        on_off : {
            type : String,
            default : "off"
        }
    },
    data () {
        return {
            img_base_url : common.img_base_url
        }
    },
    methods : {
        sort_judge () {
            if(this.sort_num == "01" || this.sort_num == "02" || this.sort_num == "03"){
                return true;
            }else{
                return false;
            }
        },
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.per_item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
    padding: r(45px) 0 r(20px);
    border-bottom: 1px solid #1c192a;
    &:nth-last-child(2){
        padding-bottom: 0;
    }
    .left_wrap{
        span{
            display: inline-block;
            vertical-align: middle;
        }
        .rank_wrap{
            width: r(60px);
            height: r(60px);
            line-height: r(60px);
            overflow: hidden;
            text-align: center;
            margin-right: r(20px);
            img{
                width: 100%;
                vertical-align: middle;
            }
            .sort_num{
                font-size: r(32px);
                font-weight: bold;
                font-style: italic;
                text-align: center;
                color: #fff;
            }
        }
        .head_img_wrap{
            width: r(130px);
            height: r(130px);
            border-radius: 50%;
            position: relative;
            margin-right: r(14px); 
            // overflow: hidden;
            img{
                display: block;
                width: 100%;
            }
            .head_img{
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background: url(#{$img_base_url}/head_bg.jpg);
                background-size: 100%;
                border-radius: 50%;
            }
            .crown_wrap{
                width: r(49px);
                height: r(49px);
                position: absolute;
                left: 0;
                top: r(-16px);
                z-index: 1;
            }
        }
        .message_wrap{
            .per_name{
                display: block;
                font-size: r(28px);
                color: #fff;
                line-height: r(28px);
                margin-bottom: r(16px);
            }
            .poll{
                font-size: r(20px);
                color: #e191ba;
                line-height: r(20px);
            }
        }
    }
    .right_wrap{
        .vote_btn{
            display: block;
            width: r(100px);
            height: r(50px);
            line-height: r(50px);
            border: 1px solid #fff;
            border-radius: r(26px);
            text-align: center;
            color: #fff;
            background-color: #0083cd;
            font-size: r(24px);
        }
    }
}
</style>
