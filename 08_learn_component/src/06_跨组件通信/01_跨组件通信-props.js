import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户名称：{props.nickname}</h2>
      <h2>年龄： {props.age}</h2>
    </div>
  )
}

// 属性展开语法spread attributes
function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader nickname={props.nickname} age={props.age} /> */}
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nickname: "ch",
      age: 16
    }
  }
  render() {
    // const { nickname, age} = this.state
    return (
      <div>
        {/* <Profile nickname={nickname} age={age} /> */}
        <Profile {...this.state}/>
      </div>
    )
  }
}
