import React, { createContext, PureComponent } from 'react';


// 创建context

const UserContext = createContext({
  nickname: "aaa",
  level: 90,
  region: "中国"
})




// 下面两个组件中同样的部分太多了，用高阶组件抽离
class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h2>About: {`nickname: ${user.nickname} level: ${user.level} region: ${user.region}`}</h2>
              </div>
            )

          }
        }
      </UserContext.Consumer>
    )
  }
}




class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <div>
                <h2>About: {`nickname: ${user.nickname} level: ${user.level} region: ${user.region}`}</h2>
              </div>
            )

          }
        }
      </UserContext.Consumer>
    )
  }
}



class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <UserContext.Provider value={{ nickname: "bbb", level: 20, region: "china" }}>
          <Home />
          <About />
        </UserContext.Provider>

      </div>
    )
  }
}




export default App;

