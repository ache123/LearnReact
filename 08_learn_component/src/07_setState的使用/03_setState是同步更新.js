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
        <button id="btn">改变文本</button>
      </div>
    )
  }

  // 情况二：setState在原生dom事件中是同步的
  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "change"
      })
      console.log(this.state.message);
    })
  }

  changeText() {

    // 情况一：将setState放在定时器中是同步的
    setTimeout(() => {
      this.setState({
        message: "change"
      })
      console.log(this.state.message);
    }, 0)
  }


}
