import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 0,
      friends: [
        { name: "aaa", age: 10 },
        {name:"bbb", age: 11},
        { name: "ccc", age: 12 },
      ]
    }
  }

  // jsx返回需要一个根，但是最外面这个div有点冗余,react需要多渲染一次，所以使用fragment
  render() {
    return (
      // <Fragment>
      //   <h2>当前计数：{this.state.counter}</h2>
      //   <button onClick={e => this.increment()}>+1</button>
      // </Fragment>

      // 短语法写法，短语法不能使用key以及其他属性
      <>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <div>
          {
            this.state.friends.map((item, index) => {
              return (
                <Fragment key={item.name}>
                  <div>{item.name}</div>
                  <p>{item.age}</p>
                  <hr/>
                </Fragment>

              )
            })
          }
        </div>
      </>
    )

  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

}
