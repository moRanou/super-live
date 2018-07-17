import wx from 'weixin-js-sdk'
import {weiXinData} from "@/api/index.js"
const wxapi = {
    wxRegister (callback,data) {
        weiXinData(data).then((res) => {
        //  console.log(res)
            wx.config({
            debug: false, // 开启调试模式
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名，见附录1
            jsApiList: [
                'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
        }).catch((error) => {
        //    console.log(error)
        })
        wx.ready((res) => {
            // 如果需要定制ready回调方法/ n b
            if (callback) {
            callback()
            }
        })
    },

    wxRegister_o (callback,res) {
        wx.config({
            debug: false, // 开启调试模式
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature, // 必填，签名，见附录1
            jsApiList: [
                'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
                'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.ready((res) => {
            // 如果需要定制ready回调方法/ n b
            if (callback) {
            callback()
            }
        })
    },

    //分享到朋友圈
    ShareTimeline (opstion) { 
        wx.onMenuShareTimeline({
            title: opstion.title, // 分享标题
            link: opstion.link, // 分享链接
            imgUrl: opstion.imgUrl, // 分享图标
            success () {
            // 用户成功分享后执行的回调函数
            opstion.success()
            },
            cancel () {
            // 用户取消分享后执行的回调函数
            opstion.error()
            }
        })
    },
    //分享给朋友
    ShareAppMessage(opstion){
        wx.onMenuShareAppMessage({
            title: opstion.title, // 分享标题
            desc: opstion.desc, // 分享描述
            link: opstion.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: opstion.imgUrl, // 分享图标
            type: opstion.type, // 分享类型,music、video或link，不填默认为link
            dataUrl: opstion.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
            // 用户点击了分享后执行的回调函数
            opstion.success()
            },
            cancel () {
                // 用户取消分享后执行的回调函数
                opstion.error()
            }
        });
    },
    // 创建对象分享朋友圈
    wxShareTimeline(title,url,imgUrl="http://yunketang.meifu123.com/data/upload/2018/mrlive/index.jpg") {
        let opstion = {
            title: title, // 分享标题
            link: url, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function() {
                alert("分享成功");
            },
            error: function() {
                alert("分享失败");
            }
        };
        return opstion;
    },
    wxShareAppMessage(title,desc,url,imgUrl="http://yunketang.meifu123.com/data/upload/2018/mrlive/index.jpg",type,dataUrl) {
        let opstion = {
            title: title,
            desc: desc,
            link: url,
            imgUrl: imgUrl,
            type: type,
            dataUrl: dataUrl,
            success: function() {
            alert("分享成功");
            },
            error: function() {
            alert("分享失败");
            }
        };
        return opstion;
    }
}

export default wxapi
