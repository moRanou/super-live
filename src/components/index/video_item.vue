<template>
    <div class="video_item">
        <router-link :to="'/VDetail/'+id">
            <div class="img_wrap">
                <img :src="img_url">
                <div class="shape"></div>
            </div>
            <div class="text_wrap">
                <span class="title_wrap">{{title}}</span>
                <span class="sec_title">{{subtitle}}</span>    <!--副标题-->
                <!-- <span class="detail_wrap">{{detail}}</span> -->
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        img_url:{
            type : String,
            default : ""
        },
        title : {
            type : String,
            default : ""
        },
        subtitle : {
            type : String,
            default : ""
        },
        detail : {
            type : String,
            default : ""
        },
        id : {
            tyep : String,
            default : ""
        }
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.video_item{
    width: 48.5%;
    margin-bottom: r(36px);
    .img_wrap{
        width: 100%;
        overflow: hidden;
        margin-bottom: r(20px);
        position: relative;
        .shape{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
        }
        img{
            display: block;
            width: 100%;
        }
    }
    .text_wrap{
        span{
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .title_wrap{
            font-size: r(30px);
            color: $item_title_color;
            height: r(36px);
            line-height: r(36px);
            width: 100%;
            white-space: nowrap;
        }
        .sec_title,.detail_wrap{
            font-size: r(24px);
            height: r(52px);
            line-height: r(52px);
            white-space: nowrap;
            color: $small_color;
        }
    }
}
</style>
