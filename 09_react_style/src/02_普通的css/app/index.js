import React, { PureComponent } from 'react'

import './style.css'

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        App
        <h2 className="title">我是app的标题</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
