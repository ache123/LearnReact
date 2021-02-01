import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World"
    }
  }

  render() {
    return (
      <div>
        <h2>当前： {this.state.message}</h2>
        <button onClick={e => this.changeText()}>change</button>
      </div>
    )
  }


  // 方式二
  componentDidUpdate() {
    console.log(this.state.message);
  }

  changeText() {
    // setState是异步更新的
    // 获取异步更新后的数据


    // 方式一
    this.setState({
      message: "change"
    }, () => {
      console.log(this.state.message);
    })
    
  }
}
