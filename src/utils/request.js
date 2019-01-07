import axios from 'axios'
// import qs from 'qs'
// import { Message } from 'element-ui'

// mock地址
const mockUrl = ''
// const serverUrl = process.env.BASE_API
const serverUrl = ''
// const serverUrl = 'https://api5-test.ninebot.cn'

// axios默认参数配置
axios.defaults.timeout = 1000 * 50
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  console.log(res.data)
  let data = res.data
  return new Promise((resolve) => {
    if (data.code === 1) {
      // if (data.message) {
      //   // 为null
      //   Message.success({title: data.message ? data.message : ''})
      // }
      // console.log(data)
      resolve(data)
    } else {
      // Message.error({
      //   title: '系统提示',
      //   desc: data.message ? data.message : '网络繁忙！'
      // })
      resolve(false)
    }
  }).catch(error => {
    console.log(error)
  })
}, function (error) {
  const res = error.response
  // console.log(res)
  if (res.status === 401) { // token失效状态码
    window.parent.postMessage('refresh', '*')
  } else {
    return Promise.reject(error)
  }
})

export default function request (url, option) {
  let httpUrl
  if (!option.noPrefix) {
    httpUrl = option.mock ? mockUrl + url : serverUrl + url
  } else {
    httpUrl = option.mock ? mockUrl + url : url
  }
  let reqUrl = ''
  // console.log(0, url, option.body.method, option, !(option.body.data))
  if (option.body.method === 'GET' && option.body.data) {
  // if (option.body.method === 'GET') {
  //   console.log('get', qs.stringify(option.body.data))
    // reqUrl = httpUrl + '?' + qs.stringify(option.body.data) + '?s=' + new Date().getTime()
    reqUrl = httpUrl + '/' + (option.body.data)
  } else {
    // console.log('post', option.body)
    /* eslint-disable */
    '/'
    reqUrl = httpUrl
  }

  const defaultOptions = {
    method: 'POST',
    // url:reqUrl + '?s=' + new Date().getTime()
    url: reqUrl

  }
  const newOptions = { ...defaultOptions, ...option.body }
  return axios({
    ...newOptions
  }).then(res => {
    return res
  })
}
