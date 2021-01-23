import React, { Component } from 'react'

class ChildCpn extends Component {

  // 不实现也能正常运行
  // constructor(props) {
  //   super();
  //   this.props = props;
  // }

  // constructor(props) {
  //   super(props);
  // }


  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h2>子组件展示数据： {name + " " + age}</h2>
      </div>
    )
  }
}





export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "aaa",
      age: 20
    }
  }

  render() {
    return (
      <div>
        <ChildCpn name = {this.state.name} age = {this.state.age}/>
      </div>
    )
  }
}
