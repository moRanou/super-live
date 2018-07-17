<template>
    <div class="list_title">
        <div class="left_wrap">
            <span class="red_box"></span>
            <span class="text_wrap">{{text}}</span>
        </div>
        <div class="right_wrap">
            更多
        </div>
    </div>
</template>
<script>
export default {
    props:{
        text:{
            type : String,
            default : ""
        }
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.list_title{
    width: 100%;
    padding: r(20px) r(15px) r(20px) r(30px);
    display: flex;
    justify-content: space-between;
    align-content: center;
    .left_wrap{
        span{
            display: inline-block;
            vertical-align: middle;
        }
        .red_box{
            width: r(15px);
            height: r(30px);
            background-color: red;
            margin-right: r(20px);
        }
        .text_wrap{
            font-size: r(26px);
        }
    }
    .right_wrap{
        width: r(80px);
        line-height: r(32px);
        border-radius: r(10px);
        border: 1px solid black;
        text-align: center;
        font-size: r(24px);
    }
}
</style>
