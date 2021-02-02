import React, { Component } from 'react'



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello"
    }
  }

  render() {
    console.log("app render被调用")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  // 使用该声明周期方法，判断最新的state、props和之前的是否变化
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }


  // message对应的数据在app中没有依赖（无展示），但是render还是会被调用
  changeText() {
    this.setState({
      message: "aaa"
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
