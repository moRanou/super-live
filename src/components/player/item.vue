<template>
    <div class="play_item">
        <div class="team_name">
            <div class="team_img" :data-name="tutor_name">
                <img :src="team_img">
            </div>
            <div class="name_wrap">
                <span>{{team_name}}战队</span>
            </div>
        </div>
        <div class="team_mani">
            <div>{{team_mani}}</div>
            <div class="right">——{{team_name}}</div>
            <div class="arrow">
                <div class="one"></div>
                <div class="two"></div>
            </div>
        </div>
        <div class="player_list">
            <div class="item_wrap" v-for="(item,index) in team_mem" :key="index">
                <router-link :to="{ name: 'PDetail', params: { id: item.id }}">
                    <div class="item_img"><img :src="item.img"></div>
                    <div class="nun_name">{{_add0(item.num)}}号&nbsp;{{item.name}}</div>
                </router-link>
            </div>
        </div>
        <div class="more_wrap">
            <span class="btn_wrap">
                <span>展开</span>
                <i class="iconfont icon-jiankuohaocudazuo arrow_change"></i>
            </span>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common.js";
export default {
    props : {
        team_img : {
            type : String,
            default : ""
        },
        team_name : {
            type : String,
            default : ""
        },
        team_mani : {
            type : String,
            default : ""
        },
        team_mem : {
            type : Array,
            default : []
        },
        tutor_name : {
            type : String,
            default : ""
        }
    },
    data () {
        return{
            img_base_url : common.img_base_url
        }
    },
    methods : {
        _add0(index){
            // index++;
            if(index < 10){
                return '0'+index;
            }else{
                return index;
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.play_item{
    padding-bottom: r(28px);
    .team_name{
        padding: r(40px) 0 r(36px);
        .team_img,.name_wrap{
            display: inline-block;
            vertical-align: middle;
        }
        .team_img{
            width: r(88px);
            height: r(88px);
            border-radius: 50%;
            border: r(1px) solid $team_color01;
            overflow: hidden;
            margin-right: r(20px);
            box-shadow: 0 0 r(18px) 0 $team_color01;
            img{
                width: 100%;
            }
        }
        .name_wrap{
            line-height: r(88px);
            font-size: r(40px);
            color: $team_color01;
        }
    }
    .team_mani{
        position: relative;
        padding: r(18px) r(24px) r(26px) r(26px);
        font-size: r(24px);
        line-height: r(48px);
        color: $team_text01;
        border: 1px solid $team_text01;
        .right{
            text-align: right;
        }
        .arrow{
            position: absolute;
            top: 0;
            left: r(32px);
            .one{
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 0;
                border: r(17px) solid transparent;
                border-bottom-color: $team_text01;
            }
            .two{
                position: absolute;
                left: r(1px);
                bottom: r(-1px);
                width: 0;
                height: 0;
                border: r(16px) solid transparent;
                border-bottom-color: $index_color01;
            }
        }
    }
    .player_list{
        padding: r(30px) r(23px) 0;
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        max-height: r(424px);
        overflow: hidden;
        transition: all .2s;
        .item_wrap{
            min-width: r(150px);
            margin-bottom: r(36px);
            margin-right: r(15px);
            &:nth-child(4n){
                margin-right: 0;
            }
            .item_img{
                width: r(130px);
                height: r(130px);
                margin: 0 auto;
                overflow: hidden;
                background: url(#{$img_base_url}/head_bg.jpg);
                background-size: 100%;
                border-radius: 50%;
                margin-bottom: r(14px);
                img{
                    display: block;
                    width: 100%;
                }
            }
            .nun_name{
                font-size: r(24px);
                color: #f2d4fa;
                text-align: center;
            }
        }
    }
    .more_wrap{
        width: 100%;
        text-align: center;
        margin-top: r(36px);
        .btn_wrap{
            display: inline-block;
            width: r(180px);
            line-height: r(60px);
            background-color: #281259;
            border-radius: r(28px);
            color: $item_title_color;
            font-size: r(24px);
            .arrow_change{
                display: inline-block;
                transform: rotate(-90deg);
                padding-right: r(4px);
                padding-top: r(8px);
                transition: all .3s;
                font-size: r(24px);
            }
            .arrow_rotate{
                padding-top: 0;
                // padding-bottom: r(8px);
                transform: rotate(90deg);
            }
        }
    }
    .more_active{
        max-height: r(1100px);
        height: auto;
    }
    .more_margin{
        margin: 0;
    }
}
</style>
