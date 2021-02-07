import React, { PureComponent } from 'react';

// import axios from 'axios'

import request from './service/request'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }
  async componentDidMount() {

    // 1.axios发送基本网络请求
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "ch",
    //     age:18
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log("error");
    // });

    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "kobe",
    //     age: 40
    //   },
    //   method: "post" 
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log("erros");
    // });

    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: "lilei",
    //     age:30
    //   }
    // }).then(console.log);


    // axios.post("http://httpbin.org/post", {
    //   name: "lucy", 
    //   age: 20
    // }).then(console.log)


    //2. await async 同步代码写异步请求，做异步操作,函数必须是异步函数
    // try {
    //   const result = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: "lilei",
    //       age: 30
    //     }
    //   });

    //   console.log(result);
    // } catch(err) {
    //   console.log(err)
    // }

    // 3. axios all 合并多个网络请求
    // const request1 = axios({
    //   url: "/get",
    //   params: {
    //     name: "ch",
    //     age:18
    //   }
    // });

    // const request2 = axios({
    //   url: "/post",
    //   data: {
    //     name: "kobe",
    //     age: 40
    //   },
    //   method: "post" 
    // })
    // axios.all([request1, request2]).then(([res1, res2]) => {
    //   console.log(res1, res2);
    //   // console.log(res);
    // });

    // const promise1 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise1");
    //   }, 1000);
    // });

    // const promise2 = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("promise2");
    //   }, 3000);
    // });

    // Promise.all([promise1, promise2]).then(res => {
    //   console.log(res);
    // })

    // 5.创建新的实例，当请求的服务器与默认不同时，项目需要请求不同的服务器时
    // const instance = axios.create({
    //   baseURL: "http://aaa.com",
    // })
    // instance.post();

    // 6. axios拦截器

    // 请求拦截
    // axios.interceptors.request.use(config => {
    //   // 发送网络请求，在页面中间显示loading

    //   // 某一些请求要求用户携带token，如果没有携带，直接跳转登录页面

    //   // params/data序列化操作


    //   console.log("请求被拦截");

    //   return config;
    // }, err => {
    //   // 请求没有发送出去来到这
    // })

    // axios.interceptors.response.use(res => {
    //   return res.data;
    // }, err => {
    //   // 网络请求发生错误
    //   if (err && err.response) {
    //     switch (err.response.state) {
    //       case 400:
    //         console.log("请求错误");
    //         break;
    //       case 402:
    //         console.log("未授权访问");
    //         break;
    //       default:
    //         console.log("请求错误");
    //     }
    //   }
    //   return;
    // })


    // axios.get("http://httpbin.org/get", {
    //   params: {
    //     name: "lilei",
    //     age: 30
    //   }
    // }).then(console.log).catch(err => {
    //   console.log(err)
    // })

    // 7.封装后使用
    request({
      url: "/get",
      params: {
        name: "lilei",
        age: 30
      }
    }).then(console.log);
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
