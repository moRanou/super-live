<template>
    <div class="title icon-jiankuohaocudazuo iconfont" @click="back_fn">
      <!-- <span>{{title_name}}</span> -->
      <!-- <span class="back"> -->
          <!--<router-link to="/">返回</router-link>--> <!--添加返回url，通过组件之间的通讯来动态传递这一信息，在串联页面是注意完成这一功能模块-->
      <!-- </span> -->
    </div>
</template>

<script>
export default {
    props : {
        url : {
            type : String,
            default : "/"
        }
    },
    created () {
        this.$setgoindex();
    },
    methods : {
        back_fn () {
            // this.$router.push({path : this.url})
            if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') !== -1) {
                this.$router.push('/');
            } else {
                this.$router.back(-1);
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.title{
    position: fixed;
    left: r(30px);
    top: r(30px);
    // width: 100%;
    // line-height: r(90px);
    width: r(60px);
    height: r(60px);
    line-height: r(60px);
    border-radius: 50%;
    font-size: r(35px);
    text-align: center;
    // background-color: #1c1b20;
    background-color: rgba(255, 255, 255, .2);
    // background-color: #fff;
    // color: #000;
    color: #fff;
    z-index: 2;
    &::before{
        position: absolute;
        left: 46%;
        top: 52%;
        transform: translateX(-50%) translateY(-50%)
    }
    .back{
        position: absolute;
        top: 0;
        left: r(22px);
        a{
            color: #fff;
        }
    }
}
</style>

