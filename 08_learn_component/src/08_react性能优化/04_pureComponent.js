import React, { PureComponent } from 'react'

function Header() {
  console.log("header被调用")
  return <h2>我是header</h2>
}

class Banner extends PureComponent {
  render() {
    console.log("banner render被调用")
    return <h2>我是banner</h2>
  }
}

function ProductList() {
  console.log("ProductList被调用")

  return (
    <div>
      <ul>
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
      </ul>
    </div>
  )
}


// 在类组件中，不想写shouldComponentUpdate，可以将类继承PureComponent,该类帮你做浅层比较
class Main extends PureComponent {
  render() {
    console.log("main render被调用")

    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }

}

function Footer() {
  console.log("Footer被调用")

  return <h2>我是Footer</h2>
}


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello"
    }
  }

  render() {
    console.log("app render被调用")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }

  // 每次使用shouldComponentUpdate太麻烦了，而且如果数据多，每一个都要判断不可能
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.counter !== nextState.counter) {
  //     return true;
  //   }
  //   return false;
  // }


  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
