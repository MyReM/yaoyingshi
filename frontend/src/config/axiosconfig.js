import axios from 'axios'
import Vue from 'vue'

Vue.prototype.$http = axios
const cancelToken = axios.CancelToken
const source = cancelToken.source()

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000, // 请求超时时间,
    cancelToken: source.token
  })

// request拦截器
service.interceptors.request.use(config => {
  const method = config.method.toUpperCase()
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    if (config.headers['Content-Type'] !== 'multipart/form-data') {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
  }

  // config.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  config.headers.put['Content-Type'] = 'application/json;charset=UTF-8'

  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})
    
// 添加响应拦截器
service.interceptors.response.use(function (response) {
　　// 对响应数据做点什么
　　return response
}, function (error) {
　　// 对响应错误做点什么
　　return Promise.reject(error)
})

export default service
