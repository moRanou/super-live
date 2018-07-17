<template>
    <div class="BStart">
        <com_title title_name="超然美二代"></com_title>
        <div class="content_img">
            <img :src="img_base_url+'/BStart01.jpg'">
            <img :src="img_base_url+'/BStart02.jpg'">
            <img :src="img_base_url+'/BStart03.jpg'">
            <img :src="img_base_url+'/BStart04.jpg'">
            <img :src="img_base_url+'/BStart05.jpg'">
            <img :src="img_base_url+'/BStart06.jpg'">
            <img :src="img_base_url+'/BStart07.jpg'">
        </div>
    </div>
</template>

<script>
import com_title from "@/components/title/title";
import common from "@/common/js/common.js";
export default {
    components : {
        com_title,
    },
    created(){
        // console.log(this.$route)
        common.title_change("美二代活动投票");
    },
    data(){
        return{
            img_base_url : common.img_base_url
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.BStart{
    @include web_reset;
    .content_img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        img{
            display: block;
            width: 100%;
        }
        .code_wrap{
            position: absolute;
            left: r(268px);
            bottom: r(270px);
            width: r(215px);
            height: r(215px);
            overflow: hidden;
            img{
                width: 100%;
                display: block;
            }
        }
    }
}
</style>
