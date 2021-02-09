import React, { PureComponent } from 'react'
import About from './pages/About3'
import Home from './pages/Home3'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <About/>
        <Home/>
      </div>
    )
  }
}
