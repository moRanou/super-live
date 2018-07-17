<template>
    <div class="more_wrap">
        <span class="text_wrap" :class="other_class">
            <router-link :to="url">查看更多&nbsp;></router-link>
        </span>
    </div>
</template>
<script>
export default {
    props : {
        change : {
            type : String,
            default : ""
        },
        url : {
            type : String,
            default : ""
        }
    },
    data(){
        return{
            other_class : ""
        }
    },
    created(){
        if(this.change == "open"){
            this.other_class = "other"
        }
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.more_wrap{
    width: 100%;
    padding: r(30px) r(24px);
    a{
        color: $small_color;
    }
    .text_wrap{
        display: block;
        margin: 0 auto;
        width: r(180px);
        height: r(60px);
        line-height: r(60px);
        text-align: center;
        font-size: r(24px);
        border-radius: r(29px);
        background-color: $index_color02;
    }
    .other{
        background-color: $index_color01;
    }
}
</style>
