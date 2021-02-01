import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数： {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    // 这种方法可以修改，但是页面不会刷新，react不知道state改变了
    // this.state.counter += 1;
    // console.log(this.state.counter);
    
    this.setState({
      counter: this.state.counter + 1
    })
  
  }
}
