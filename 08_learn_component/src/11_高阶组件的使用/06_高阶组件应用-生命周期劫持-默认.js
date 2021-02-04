import React, { PureComponent } from 'react';


class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return <h2>Home</h2>
  }

  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime
    console.log(`渲染时间为${interval}`)
  }

}



class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <About/>
      </div>
    )
  }
}
