// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'jquery'
import video_player from 'vue-video-player'
import md5 from 'js-md5';
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import { Toast } from 'vue-ydui/dist/lib.rem/dialog';
// require('@/assets/util/vconsole.js');
Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      // window.location.href = location.href + '&goindex=true'
      window.location.href = window.location.href.replace(/\?/, "?goindex=true&");
    }
  }
}



//响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error)
    if (error) {
      Toast({
        mes: '当前访问人数过多，请稍后再试！',
        timeout: 1500,
        icon: 'error',
      });
    }

  });


Vue.prototype.$md5 = md5;
Vue.use(YDUI)
Vue.use(video_player)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
