import React, { Component } from 'react'

function Header() {
  console.log("header被调用")
  return <h2>我是header</h2>
}

class Banner extends Component {
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

class Main extends Component {
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


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conter: 0
    }
  }

  render() {
    console.log("app render被调用")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.conter + 1
    })
  }
}
