import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true;
export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params}).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

// 请求的拦截器
axios.interceptors.request.use(function (config) {
  const url = encodeURI(window.location.href)
  // 判断请求的类型
  // 如果是post请求就把默认参数拼到data里面
  // 如果是get请求就拼到params里面
  if (config.method === 'post') {
    let data =config.data
    config.data = {
      from_url: url,
      ...data
    }
  } else if (config.method === 'get') {
    config.params = {
      from_url: url,
      ...config.params
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
})
