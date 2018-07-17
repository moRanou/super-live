import http from './common'
// export const baseUrl = 'http://mservice.php05.cn'//此处为测试环境
export const baseUrl = 'http://yunketang.meifu123.com'//此处为生产环境
// export const baseUrl = 'http://yunketang.meifu123.com'//此处为生产环境2
// 登陆
export const userCode = (params) => {
    return http.fetchPost(`${baseUrl}/index.php?app=public&mod=Passport&act=getLiveCode`, params)
}

export const userLogin = (params) => {
    return http.fetchPost(`${baseUrl}/index.php?app=public&mod=Passport&act=liveReg`, params)
}

//微信接口
export const weiXinData = (params)=>{
    return http.fetchPost(`${baseUrl}/index.php?app=home&mod=Cr&act=getsignPackage `, params)
}

//测试接口
export const demoTest =(params)=>{
    return http.fetchPost(`${baseUrl}/index.php?app=home&mod=Cr&act=live_login`,params)
}
