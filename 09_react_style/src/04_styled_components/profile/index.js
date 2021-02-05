import React, { PureComponent } from 'react'

import styled from 'styled-components'


/**
 * 特点：
 * 1.props穿透
 * 2.attrs的使用
 * 3.传入state作为props属性
 */
const ProfileInput = styled.input.attrs({
  placeholder: "key",

  // 直接在attrs中写死，下面模板字符串使用
  borderColor: "red"
})`
  background-color:lightblue;
  border-color: ${props => props.borderColor};


  /*使用组件的时候传递的color，先给到attrs，然后到props  */
  color: ${props => props.color};
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple"
    }

  }
  render() {
    return (
      <div>
        <ProfileInput type="password" color={this.state.color}/>
        <h2 >我是Profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    )
  }
}
