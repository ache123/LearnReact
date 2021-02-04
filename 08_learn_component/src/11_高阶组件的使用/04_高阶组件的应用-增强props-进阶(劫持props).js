import React, { createContext, PureComponent } from 'react';

// 定义一个高阶组件

// 其中props是从UserContext.Provider中获取到的props，user是UserContext的user
// 他们组合到一起成为新的props，所以后面组件中使用的是this.props
function withUser(WrappedComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user}/>
 
          }
        }
      </UserContext.Consumer>
    )
  }
}

// 创建context

const UserContext = createContext({
  nickname: "aaa",
  level: 90,
  region: "中国"
})


class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`nickname: ${this.props.nickname} level: ${this.props.level} region: ${this.props.region}`}</h2> 
        <button onClick={e => this.checkProps()}>查看props</button>
      </div>
    )
  }

  checkProps() {
    console.log(this.props)
  }
}



class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`nickname: ${this.props.nickname} level: ${this.props.level} region: ${this.props.region}`}</h2>
      </div>
    )
  }
}

class Detail extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.nickname}</li>
          <li>{this.props.level}</li>
          <li>{this.props.region}</li>
        </ul>
      </div>
    )
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserDetail = withUser(Detail);




class App extends PureComponent {
  render() {
    return (
      <div>
        App:
        <UserContext.Provider value={{ nickname: "bbb", level: 20, region: "china" }}>
          <UserHome/>
          <UserAbout />
          <UserDetail/>
        </UserContext.Provider>

      </div>
    )
  }
}




export default App;

