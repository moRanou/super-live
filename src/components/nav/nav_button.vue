<template>
    <div class="nav_button">
        <router-link :to="url">
            <span class="icon_wrap">
                <img :src="img">
            </span>
            <span class="text_wrap">{{typeN}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        img:{
            type : String,
            default : ""
        },
        typeN:{
            type : String,
            default : ""
        },
        url:{
            type : String,
            default : ""
        },
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.nav_button{
    text-align: center;
    font-size: 0;
    span{
        display: block;
    }
    .icon_wrap{
        width: r(90px);
        height: r(90px);
        line-height: r(90px);
        background-color: #17083d;
        border-radius: 50%;
        margin-bottom: r(16px);
        text-align: center;
        img{
            width: 48.9%;
            vertical-align: middle;
        }
    }
    .text_wrap{
        font-size: r(24px);
        line-height: r(24px);
        color: #9d92a6;
    }
}
</style>
