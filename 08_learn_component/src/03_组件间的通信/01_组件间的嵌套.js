import React, { Component } from 'react'

function Header() {
  return <h2>我是header</h2>
}

function Banner() {
  return <h2>我是banner</h2>
}

function ProductList() {
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

function Main() {
  return (
    <div>
      <Banner/>
      <ProductList/>
    </div>
  )
}

function Footer() {
  return <h2>我是Footer</h2>
}


export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
