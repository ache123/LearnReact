import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
      name: "ch"
    }
  }

  render() {
    return (
      <div>
        <h2>当前： {this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={e => this.changeText()}>change</button>
      </div>
    )
  }



  changeText() {

    this.setState({
      message: "change"
    })

  }
  // 这里的setState只有message没有name，但是name在最后渲染时还存在，因为
  // Object.assign({}, this.state, { message: "change"})

}
