import React, { PureComponent } from 'react'

import appStyle from './style.module.css'

import Home from '../home';
import Profile from '../profile';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple"
    }
  }
  render() {
    return (
      <div>
        App
        <h2 className={appStyle.title} style={{color:this.state.color}}>我是app的标题</h2>
        <Home/>
        <Profile/>
      </div>
    )
  }
}
