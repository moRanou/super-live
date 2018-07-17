<template>
    <div class="item_title">
        <span class="title_img">
            <img :src="img_url">
        </span>
    </div>
</template>
<script>
export default {
    props:{
        img_url : {
            type : String,
            default : ""
        }
    }
}
</script>
<style lang="scss">
@import "~@/common/scss/common.scss";
.item_title{
    width: 100%;
    margin-bottom: r(30px);
    .title_img{
        display: block;
        width: r(300px);
        margin: 0 auto;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
}
</style>
