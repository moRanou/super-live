<template>
    <div class="team_item">
        <span class="team_img_wrap"><img :src="team_img"></span>
        <span class="border_wrap"><img :src="border_img"></span>
        <span class="ordinal_wrap"><img :src="ordinal_img"><span class="point_wrap">/&nbsp;25分</span></span>
        <span class="team_name" :class="odd_class">{{team_name}}</span>
    </div>
</template>

<script>
export default {
    props : {
        border_img : {
            type : String,
            default : ""
        },
        ordinal_img : {
            type : String,
            default : ""
        },
        team_img : {
            type : String,
            default : ""
        },
        team_name : {
            type : String,
            default : ""
        }
    },
    data(){
        return{
            odd_class : ""
        }
    },
    created(){
        // console.log(this.team_name.length)
        if(this.team_name.length%2 == 1){
            this.odd_class = "odd_class";
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.team_item{
    position: relative;
    width: 100%;
    margin-bottom: r(30px);
    .team_img_wrap,.border_wrap,.ordinal_wrap{
        overflow: hidden;
        img{
            display: block;
            width: 100%;
        }
    }
    .team_img_wrap{
        display: block;
        width: 94%;
        margin: 0 auto;
        padding-top: 3%;
    }
    .border_wrap{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
    }
    .ordinal_wrap{
        position: absolute;
        left: r(8px);
        top: r(-6px);
        width: r(240px);
        height: r(50px);
        .point_wrap{
            position: absolute;
            font-size: r(35px);
            line-height: r(50px);
            color: #ffd9ef;
            right: r(32px);
            top: 0;
        }
    }
    .team_name{
        font-size: r(28px);
        position: absolute;
        width: 100%;
        text-align: center;
        // left: 50%;
        left: 0;
        // transform: translateX(-50%);
        bottom: 0;
        color: #fff;
        font-weight: bold;
        line-height: r(28px);
    }
    .odd_class{
        // transform: translateX(-40%);
    }
}
</style>
