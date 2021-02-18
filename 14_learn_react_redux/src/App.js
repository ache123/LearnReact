import React, { PureComponent } from 'react'
import About from './pages/About5'
import Home from './pages/Home5-reduc-thunk将异步请求放到redux中'

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
