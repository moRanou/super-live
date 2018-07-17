
//本地
// const domain = "http://php5eduline.com/"; //本地环境
// const base_url = "/static/"; // 本地开发

// // 测试
// const domain = "http://mservice.php05.cn/"; // 测试服务器域名
const base_url = "/webapp/report/dist/static/"; // 局域网测试

// // 生产环境
const domain = "http://yunketang.meifu123.com/"; // 生产服务器域名
// const domain = "http://yunketang.meifu123.com/"; // 生产服务器域名2关闭
// const base_url = "/webapp/report/dist/static/"; // 局域网测试

// const base_url = "/report/dist/static/"; // 手机测试
export default {
    domain : domain,
    index : domain+"index.php?app=home&mod=Cr&act=getHomeData", // 首页接口
    more : domain+"index.php?app=home&mod=Cr&act=getMore", // 其他页面更多接口
    ranking : domain+"index.php?app=home&mod=Cr&act=getRanking", // 排行接口
    more_ranking : domain+"index.php?app=home&mod=Cr&act=getMemRanking", // 排行接口
    team_info : domain+"index.php?app=home&mod=Cr&act=getTeaminfo", // 战队详情
    tutor_info : domain+"index.php?app=home&mod=Cr&act=getTutor", // 导师详情
    video_desc : domain+"index.php?app=home&mod=Cr&act=getVedioDesc", // 视频详情
    article_desc : domain+"index.php?app=home&mod=Cr&act=getOneArticle", // 视频详情
    ad_action : domain+"index.php?app=home&mod=Cr&act=addSolicitent", // 咨询提交
    ad_data : domain+"index.php?app=home&mod=Cr&act=getAdDescImg", // 广告详情
    priority : domain+"index.php?app=home&mod=Cr&act=getPriority", // 播放视频
    img_base_url : base_url+"img",
    video_base_url : base_url+"video",
    info_base_url : domain+"index.php?app=home&mod=Cr&act=getMemberinfo",
    time_change : function(arr,now){
        now = new Date(now);
        now = time_fun(now);
        arr.forEach(el=>{
          var time_arr = el.add_time.split(/[- : \/]/);
          // console.log(time_arr);
          if(time_arr[3] && time_arr[4] && time_arr[5]){
            var time = new Date(time_arr[0],time_arr[1]-1,time_arr[2],time_arr[3],time_arr[4],time_arr[5]);
          }else{
            var time = new Date(time_arr[0],time_arr[1]-1,time_arr[2]);
          }
          // console.log(time);
          el.add_time = time_fun(time);
        })
        arr.forEach(el=>{
          var time = el.add_time;
          // console.log(time);
          if(time.year == now.year && time.month == now.month && time.day == now.day){
            if(time.hour == now.hour){
              var min = now.minute - time.minute;
              if(min > 1){
                el.add_time = min + "分钟前";
              }else{
                el.add_time = "刚刚";
              }
            }else{
              var hour = now.hour - time.hour;
              el.add_time = hour + "小时前";
            }
          }else{
            el.add_time = time.year+"-"+time.month+"-"+time.day;
          }
        })
        function time_fun(time){
            var obj = {};
            obj.time = time;
            obj.year = time.getFullYear();
            obj.month = time.getMonth() + 1;
            obj.day = time.getDate();
            obj.hour = time.getHours();
            obj.minute = time.getMinutes();
            return obj;
        }
    },
    num_chagne : function(arr){
        arr.forEach(el=>{
            if(el.num < 10){
                el.num = "0" + el.num;
            }
        })
    },
    title_change(title_text){
      let title = document.querySelector("title");
      title.innerText = title_text;
    },
    redirect (res) {
      if(res.data.status == 100){
        // console.log(res.data);
        if(res.data.data.url){
          window.location.href = res.data.data.url;
        }
      }
    }
}
