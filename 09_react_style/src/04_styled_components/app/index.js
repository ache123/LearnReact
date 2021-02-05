import React, { PureComponent } from 'react'
import styled, {ThemeProvider} from 'styled-components';

import Home from '../home';
import Profile from '../profile';

const HYButton = styled.button`
  padding: 10px 20px;
  color: red;
`

const HYPrimaryButton = styled(HYButton) `
  background-color:green;
`

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple"
    }
  }
  render() {
    return (
      // ThemeProvider的属性可以共享给里面的组件
      <ThemeProvider theme={{themeColor: "yellow", fontSize: "30px"}}>
        App
        <h2>我是app的标题</h2>
        <Home/>
        <hr/>
        <Profile/>
        <HYButton>我是普通按钮</HYButton>
        <HYPrimaryButton>我是主要的按钮</HYPrimaryButton>
      </ThemeProvider>
    )
  }
}
