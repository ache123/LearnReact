import React, { Component } from 'react';


class Cpn extends Component {
  render() {
    return <h2>我是cpn组件</h2>
  }

  componentWillUnmount() {
    console.log("调用了cpn的componentWillUnmount方法");
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isShow: true
    }
    console.log("执行了组件的constructor方法");
  }


  render() {
    console.log("执行了组件的render方法");


    return (
      <div>
        我是App组件
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick = {e => {this.increment()}}>+1</button>
        <hr/>
        {this.state.isShow && <Cpn/>}
        <button onClick = { e => {this.changeCpn()}}>切换</button>
      </div>
    )
  }

  changeCpn() {
    this.setState({
      isShow: !this.state.isShow
    })
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log("执行了组件的componentDidMount方法");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("执行了组件的componentDidUpdate方法");
  }
}
