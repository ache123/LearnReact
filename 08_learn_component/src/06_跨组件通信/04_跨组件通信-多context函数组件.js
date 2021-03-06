import React, { Component } from 'react';

// 1.创建context对象,括号中是默认值(在数据拥有组件中注册)
const UserContext = React.createContext({
  nickname: "aaa",
  age: -1
})

const ThemeContext = React.createContext({
  color: "black"
})


// 之后学习redux就不会这样写了
function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                thmem => {
                  return (
                    <div>
                      <h2 style={{color:thmem.color}}>用户名称：{value.nickname}</h2>
                      <h2>年龄： {value.age}</h2>
                      <h2>颜色： {thmem.color}</h2>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>

          )
        }
      }
    </UserContext.Consumer>
  )
}




function Profile(props) {
  return (
    <div>
      <ProfileHeader />
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

  // 2.将数据与context绑定
  render() {

    return (
      <div>
        <UserContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "red" }}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
