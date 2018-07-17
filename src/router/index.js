import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import '@/common/js/flexible_css.debug.js'
import '@/common/js/flexible.debug.js'
import '@/common/iconfont/iconfont.css'
// import '@/common/scss/common.scss'
import '@/common/css/reset.css'
import BStart from '@/components/BStart/BStart'
import ranking from '@/components/ranking/ranking'
import message from '@/components/message/message'
import player from '@/components/player/player'
import video from '@/components/video/video'
import PDetail from '@/components/PDetail/PDetail'
import intro from '@/components/intro/intro'
import mentor from '@/components/mentor/mentor'
import OVideo from '@/components/OVideo/OVideo'
import VDetail from '@/components/VDetail/VDetail'
import MDetail from '@/components/MDetail/MDetail'
import ad from '@/components/ad/ad'
import class_web from '@/components/class/class'
const Login = resolve => require(['@/pages/Login/Login.vue'], resolve)
Vue.use(Router)
import { demoTest } from '@/api/index'
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/', // 首页
      name: 'index',
      component: index,
    },
    {
      name: 'Login', // 登录
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (to.name == 'Login') {
          demoTest().then(res => {
            if (res.status == 100) {
              window.location.href = res.data.url
            } else {
              next()
            }
          })
        }
        next()
      }
    },
    {
      path: '/BStart', // 为开始
      component: BStart
    },
    {
      path: '/ranking', // 排行
      component: ranking
    },
    {
      path: '/message', // 文章
      component: message
    },
    {
      path: '/player', // 选手
      component: player
    },
    {
      path: '/video', // 视频
      component: video
    },
    {
      path: '/PDetail/:id', // 选手详情
      name: 'PDetail',
      component: PDetail
    },
    {
      path: '/intro', // 简介
      component: intro
    },
    {
      path: '/mentor/:id', // 明星导师
      component: mentor
    },
    {
      path: '/OVideo', // 往期回顾
      component: OVideo
    },
    {
      path: '/VDetail/:id', // 视频详情
      name: "VDetail",
      component: VDetail
    },
    {
      path: '/MDetail/:id', // 文章详情
      name: "MDetail",
      component: MDetail
    },
    {
      path: '/ad/:id', // 广告详情
      name: "ad",
      component: ad
    },
    {
      path: '/class', // 弟子班详情
      component: class_web
    }
  ]
})
