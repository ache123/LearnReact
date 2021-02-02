import React, { PureComponent, memo } from 'react'


// 函数组件类似PureComponent的优化,使用memo

const MemoHeader = memo(function Header() {
    console.log("header被调用")
    return <h2>我是header</h2>
})


class Banner extends PureComponent {
  render() {
    console.log("banner render被调用")
    return <h2>我是banner</h2>
  }
}


// ProductList组建没有被重新调用，因为上层组件main没被重新调用
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


const MemoFooter = memo(function Footer() {
  console.log("Footer被调用")
  return <h2>我是Footer</h2>
})



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
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}
