import React, { PureComponent } from 'react'

import {
  // BrowserRouter,
  // Link,
  NavLink,
  // Route,
  // Switch,
  withRouter
} from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Profile from './pages/Profile'

import './App.css'
// import NoMatch from './pages/NoMatch'
// import User from './pages/User'
// import Login from './pages/Login'
// import Product from './pages/Product'
// import Detail from './pages/Detail'
// import Detail2 from './pages/Detail2'
// import Detail3 from './pages/Detail3'

import { renderRoutes } from 'react-router-config'
import routes from './router'

class App extends PureComponent {
  render() {
    const id = "123";
    const info = {name:"ch", age: 18};
    return (
      <div>
        {/* <BrowserRouter> */}
        {/* Link一定会渲染出来 */}
        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

        {/* 
          <NavLink exact to="/" activeStyle={{color: "red"}}>首页</NavLink>
          <NavLink to="/about" activeStyle={{ color: "red" }}>关于</NavLink>
          <NavLink to="/profile" activeStyle={{ color: "red" }}>我的</NavLink> */}


        {/*       navlink默认活跃时有avtive类
          <NavLink exact to="/" >首页</NavLink>
          <NavLink to="/about" >关于</NavLink>
          <NavLink to="/profile" >我的</NavLink> */}

        {/* 自定义活跃时类名 */}
        <NavLink exact to="/" activeClassName="link-active">首页</NavLink>
        <NavLink to="/about" activeClassName="link-active">关于</NavLink>
        <NavLink to="/profile" activeClassName="link-active">我的</NavLink>
        <NavLink to="/user" activeClassName="link-active">用户</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName="link-active">详情</NavLink>
        {/* 下面这个不推荐了 */}
        <NavLink to={`/detail2?name=ch&age=18`} activeClassName="link-active">详情2</NavLink>
        {/* search直接显示在网址中，state保留在location中 */}
        <NavLink to={{
                   pathname: "/detail3",
                   search: "?name=abc",
                   state: info
                 }} 
                 activeClassName="link-active">
          详情3
        </NavLink>
        <button onClick={e => this.jumpProduct()}>商品</button>

        {/* Route是一个占位  Switch保证排他性：定义路径和组件之间的映射关系*/}
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}

        {renderRoutes(routes)}

        {/* </BrowserRouter> */}
      </div>
    )
  }

  jumpProduct() {
    this.props.history.push("/product");
  }
}


export default withRouter(App);