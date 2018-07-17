<template>
    <div class="messig_item">
        <router-link :to="'/MDetail/'+id">
            <div class="img_wrap">
                <img :src="img_url">
            </div>
            <div class="item_text">
                <div class="text_title">
                    {{title_text}}
                </div>
                <div class="view_time">
                    <div class="view_wrap">
                        <span class="img_wrap">
                            <img :src="img_base_url+'/eye.png'">
                        </span>
                        <span class="text_wrap">
                            {{view_text}}
                        </span>
                    </div>
                    <div class="time_wrap">
                        <span class="img_wrap">
                            <img :src="img_base_url+'/clock.png'">
                        </span>
                        <span class="text_wrap">
                            {{time_text}}
                        </span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
import common from "@/common/js/common.js";
export default {
    props : {
        img_url : {
            type : String,
            default : ""
        },
        view_text : {
            type : String,
            default : ""
        },
        time_text : {
            type : String,
            default : ""
        },
        title_text : {
            type : String,
            default : ""
        },
        id : {
            type : String,
            default : "1"
        }
    },
    data () {
        return{
            img_base_url : common.img_base_url,
        }
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.messig_item{
    border-bottom: 1px solid $index_color02;
    a{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: r(20px) 0;
        .img_wrap{
            width: 42.74%;
            overflow: hidden;
            img{
                display: block;
                width: 100%;
            }
        }
        .item_text{
            width: 53.85%;
            font-size: 0;
            .text_title{
                font-size: r(30px);
                color: $item_title_color;
                width: 100%;
                height: r(96px);
                line-height: r(48px);
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
                margin-bottom: r(50px);
            }
        }
        .view_time{
            width: 100%;
            .view_wrap{
                // margin-right: r(76px);
                .text_wrap{
                    width: r(132px);
                }
            }
            .view_wrap,.time_wrap{
                display: inline-block;
                span{
                    display: inline-block;
                    vertical-align: middle;
                }
                .img_wrap{
                    width: r(27px);
                    overflow: hidden;
                    margin-right: r(10px);
                    img{
                        width: 100%;
                    }
                }
                .text_wrap{
                    font-size: r(18px);
                    color: $small_color;
                }
            }
        }
    }
    
}
</style>
