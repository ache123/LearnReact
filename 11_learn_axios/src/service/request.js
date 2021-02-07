import axios from 'axios'

import { BASE_URL, TIMEOUT} from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  console.log("请求被拦截");
  return config;
}, err => {
  // 请求没有发送出去来到这
})

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  // 网络请求发生错误
  if (err && err.response) {
    switch (err.response.state) {
      case 400:
        console.log("请求错误");
        break;
      case 402:
        console.log("未授权访问");
        break;
      default:
        console.log("请求错误");
    }
  }
  return;
})

export default instance;