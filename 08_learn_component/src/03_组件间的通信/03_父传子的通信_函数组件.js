import React, { Component } from 'react'

function ChildCpn(props) {
  const { name, age } = props;
  return (
    <div>
      <h2>子组件展示数据： {name + " " + age}</h2>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="ch" age="18" />
      </div>
    )
  }
}

