import axios from 'axios' // 引入axios
import jsonBig from 'json-bigint' // 引入json大数处理

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn' // 基础路径
})

// 配置处理后端返回数据超出js安全证书范围问题
request.defaults.transformResponse = [function (data) {
  try {
    return jsonBig.parse(data)
  } catch (err) {
    return {}
  }
}]

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // Do someting before request is sent
    return config
  },
  function (error) {
    // Do someting with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
