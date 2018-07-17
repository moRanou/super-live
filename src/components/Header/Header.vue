<template>
   <header>
      <span @click="goBack"><i></i> 返回</span>
       <h3>{{title}}</h3>
       <span></span>
   </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/common/scss/common.scss";
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  line-height: r(90px);
  background-color: $bgColorHeader;
  color: #ffffff;
  h3 {
    text-align: center;
    width: 70%;
    font-size: r(35px);
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    font-size: r(28px);
    i {
      display: inline-block;
      border-right: r(5px) solid #ffffff;
      border-bottom:r(5px) solid #ffffff;
      width: r(28px);
      height: r(28px);
      transform: rotate(135deg);
    }
  }
}
</style>
