import React, { PureComponent } from 'react';

import { EventEmitter } from 'events'

// 事件总线 event bus  (全局对象) 单独放一个文件 导入导出
const eventBus = new EventEmitter();


class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }

  // 取消handleSayHelloListener回调函数的事件监听
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }

  handleSayHelloListener(message, num) {
    console.log(message, num)
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}
class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={e => this.emmitEvent()}>点击了profile</button>
      </div>
    )
  }

  emmitEvent() {
    eventBus.emit("sayHello", "Hello Home", 123);
  }

}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

