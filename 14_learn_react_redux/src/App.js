import React, { PureComponent } from 'react'
import About from './pages/About4'
import Home from './pages/Home4'

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
