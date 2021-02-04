import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
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

export default class App extends PureComponent {

  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
    this.counterRef = createRef();
  }

  // 通过ref使用dom
  render() {
    return (
      <div>
        {/* <h2 ref=字符串/对象/函数>Hello React</h2> */}
        <h2 ref="titleRef">Hello React</h2>

        
        {/* 目前react推荐的方式 */}
        <h2 ref={this.titleRef}>aaaa</h2>

        <h2 ref={arg => this.titleEl = arg}>bbb</h2>


        <button onClick={e => this.changeText()}>改变文本</button>

        <hr/>

        {/* 这里只能是类对象，函数组件不能使用ref属性 */}
        {/* ref接收组件挂载的实例，函数组件没有实例 */}
        <Counter ref={this.counterRef}/>
        <button onClick={e => this.appBtnClick()}>App按钮</button>
      </div>
    )
  }

  appBtnClick() {
    this.counterRef.current.increment();
  }

  changeText() {
    // 1. 使用方式一：字符串(不推荐)
    this.refs.titleRef.innerHTML = "HELLO CH";
    // 2. 使用方式二，对象
    // console.log(this.titleRef.current);
    this.titleRef.current.innerHTML = "HELLO CH";

    // 3. 使用方式三：回调函数方式
    // console.log(this.titleEl);
    this.titleEl.innerHTML = "HELLO CH";

  }
}
