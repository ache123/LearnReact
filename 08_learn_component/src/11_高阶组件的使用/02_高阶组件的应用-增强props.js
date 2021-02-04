import React, { PureComponent } from 'react';

// 定义一个高阶组件
function enhanceProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region="中国"/>
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home: {`nickname: ${this.props.nickname} level: ${this.props.level} region: ${this.props.region}`}</h2>
      </div>
    )
  }
}

// 因为在一个文件中所以需要用一个变量来存储，app中调用时也需要用这个变量名
const EnhanceHome = enhanceProps(Home);

// 如果是单独的文件，直接export,App中也不用改名
// export default enhanceProps(Home);

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`nickname: ${this.props.nickname} level: ${this.props.level} region: ${this.props.region}`}</h2>
      </div>
    )
  }
}

const EnhanceAbout = enhanceProps(About);


class App extends PureComponent {
  render() {
    return (
      <div>
        App: 
        <EnhanceHome nickname="aaa" level={90} />
        <EnhanceAbout nickname="bbb" level={99} />
      </div>
    )
  }
}




export default App;

