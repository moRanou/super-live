<template>
<div class="login">
  <common-back></common-back>
    <div class="login_bg">
       <div class="login_main">
        <li>
         <span>手机号码</span>
         <input type="tel" @blur="blur" v-model="form.tel" :class="{focus:cur==0}" @focus="focus(0)" placeholder="请输入手机号码">
        
        </li>
        <li>
           <span>验证码</span>
          <input type="number"  oninput="if(value.length>5)value=value.slice(0,5)" @blur="blur" v-model="form.verify" :class="{focus:cur==4}" @focus="focus(4)"  placeholder="请输入5位数字验证码">
          <img class="code_img" @click="changeCodeImg()" :src="img_url">
        </li>
        <li :class="{warning:warning}" v-show="hiddenCode">
         <span>动态密码</span>
         <input type="number" @blur="blur" v-model="form.code"
            oninput="if(value.length>6)value=value.slice(0,6)"
         :class="{focus:cur==1}"  @focus="focus(1)" placeholder="短信验证码">
         <i v-if="warning">请输入正确的验证码</i>
          <send-msg v-show="hiddenCode"  v-model="start" reset-str="重新获取验证码"  @click.native="sendCode" ></send-msg>
        </li>
          <li>
         <span>姓名</span>
         <input type="text" @blur="blur" v-model="form.name"  :class="{focus:cur==2}" @focus="focus(2)" placeholder="请输入您的名字" id="">
        </li>
         <li>
         <span>支持者ID</span>
         <input type="number" @blur="blur" v-model="form.id"  :class="{focus:cur==3}" @focus="focus(3)" placeholder="请输入您的支持ID,可不填,仅首次有效" id="">
        </li>
          <div class="login_edit">
            <button class="active" @click="login">注册进入直播</button>
        </div>
      </div>
          <p>Copyright © 2018 美服网. All Rights Reserved.</p>
    </div>
</div>
</template>

<script>
import commonBack from "@/components/title/title.vue";
import sendMsg from "@/components/SendMsg/SendMsg";
import { userCode, getName, userLogin, baseUrl,demoTest } from "../../api/index";
export default {
  components: {
    commonBack,
    sendMsg
  },
  data() {
    return {
      word: "获取验证码",
      start: false,
      cur: -1,
      warning: false,
      hiddenCode: true,
      code: 1,
      img_url: "",
      codeImg: baseUrl + "/public/captcha.php?model=1&t=",
      reg: /^[1][345678]\d{9}$/,
      form: {
        tel: "",
        code: "",
        name: "",
        id: "",
        verify: ""
      }
    };
  },
  watch: {},
  methods: {
    login() {
      if (!this.form.tel.trim()) {
        this.phoneEmpty();
        return;
      } else if (!this.reg.test(this.form.tel)) {
        this.phoneWarning();
        return;
      } else if (!this.form.verify.trim()) {
        this.codeEmpty();
        return;
      } else if (!this.form.code.trim()) {
        this.$dialog.toast({
          mes: "动态密码不能为空！",
          timeout: 1500
        });
        return;
      } else if (!this.form.name.trim()) {
        this.$dialog.toast({
          mes: "名字不能为空！",
          timeout: 1500
        });
        return;
      }
      this.userLogin();
    },

    userLogin() {
      userLogin({
        phone: this.form.tel,
        code: this.form.code,
        uname: this.form.name,
        mem_id: this.form.id
      }).then(res => {
        if (res.status == 1) {
          window.location.href = baseUrl + "/webapp/zshdLive/mobile_live.html";
        } else {
          this.$dialog.toast({
            mes: res.info,
            timeout: 1500
          });
        }
      });
    },

    sendCode() {
      if (!this.form.tel.trim()) {
        this.phoneEmpty();
        return;
      } else if (!this.reg.test(this.form.tel)) {
        this.phoneWarning();
        return;
      }
      if (!this.form.verify.trim()) {
        this.codeEmpty();
        return;
      }
      this.userCode();
    },
    userCode() {
      userCode({
        phone: this.form.tel,
        time: new Date().getTime(),
        verify: this.form.verify,
        token: this.$md5(this.form.tel + new Date().getTime() + this.form.tel)
      }).then(res => {
        if (res.status == 0) {
          this.codeWarning(res.info);
          return;
        } else {
          this.$dialog.loading.open("发送中...");
          this.form.name = res.data.uname;
          setTimeout(() => {
            this.start = true;
            this.$dialog.loading.close();
            this.$dialog.toast({
              mes: "已发送",
              icon: "success",
              timeout: 1500
            });
          }, 1000);
        }
      });
    },

    //手机号提示
    phoneEmpty() {
      this.$dialog.toast({
        mes: "手机号不能为空！",
        timeout: 1500
      });
    },
    phoneWarning() {
      this.$dialog.toast({
        mes: "请输入正确的手机号码！",
        timeout: 1500
      });
    },

    //验证码提示
    codeEmpty() {
      this.$dialog.toast({
        mes: "验证码不能为空！",
        timeout: 1500
      });
    },

    codeWarning(info) {
      this.$dialog.toast({
        mes: info,
        timeout: 1500
      });
    },
 
    changeCodeImg() {
      // 根据时间戳刷新验证码
      this.img_url = this.codeImg + new Date().getTime();
    },
    focus(num) {
      this.cur = num;
    },
    blur() {
      this.cur = -1;
    }
  },
  mounted() {},
  created() {
    this.img_url = this.codeImg;
  }
};
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
body {
  min-height: 100%;
  position: relative;
}
.login {
  min-height: 100%;
  background-color: #0b0d3d;
  .login_bg {
    position: relative;
    min-height: 100%;
    background: url(#{$img_base_url}/login_banner.jpg) no-repeat;
    background-size: 100%;
    padding-top: r(430px);
    .login_main {
      width: 100%;
      min-height: 100%;
      padding: 0 r(50px);
      li {
        margin-bottom: r(30px);
        span {
          display: flex;
          color: #7e6f93;
          font-size: r(26px);
          margin-bottom: r(10px);
        }
        input {
          width: 100%;
          color: #d9bee4;
          font-size: r(30px);
          padding: r(10px) 0;
          border-bottom: 1px solid #76698b;
          //改变光标的颜色
          caret-color: #04a4b6;
        }
        input.focus {
          border-bottom: 1px solid #04a4b6;
        }
        input::-webkit-input-placeholder {
          color: #3f3959;
        }
        input::-moz-input-placeholder {
          color: #3f3959;
        }
        input::-ms-input-placeholder {
          color: #3f3959;
        }
      }
      li:nth-of-type(3) {
        position: relative;
        button {
          position: absolute;
          bottom: 13%;
          right: 0;
          font-size: r(24px);
          padding: r(10px) r(15px);
          background-color: #00ffff;
        }
      }
      li:nth-of-type(2) {
        position: relative;
        img {
          position: absolute;
          bottom: 13%;
          right: 0;
          width: r(150px);
        }
      }

      li:nth-of-type(2).warning {
        position: relative;
        input {
          color: #d30966;
          border-bottom: 1px solid #d30966;
        }
        i {
          position: absolute;
          bottom: 10%;
          right: 0;
          font-size: r(24px);
          color: #d30966;
        }
      }
      .login_edit {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-top: r(60px);
        button {
          width: 100%;
          text-align: center;
          font-size: r(30px);
          background-color: #26284d;
          color: #0b0d3d;
          padding: r(20px);
          margin-bottom: r(10px);
        }
        button.active {
          background-color: #00ffff;
          color: #0a0c40;
        }
        span {
          padding: r(20px);
          font-size: r(26px);
        }
      }
    }
    p {
      margin-top: 1.5rem;
      text-align: center;
      white-space: nowrap;
      color: #2f2b50;
      z-index: 66;
      font-size: r(20px);
    }
  }
}
</style>
