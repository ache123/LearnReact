import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
      </div>
    )

  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

}