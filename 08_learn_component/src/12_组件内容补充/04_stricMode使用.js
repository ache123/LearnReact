import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
  // 不安全的声明周期
  // UNSAFE_componentWillMount() {
  //   console.log("home componentWillMount")
  // }

  constructor(props) {
    super(props);

    console.log("Home constructor")
  }

  // 过时的ref API
  render() {
    return (
      // <div ref="title">
      <div>
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  // UNSAFE_componentWillMount() {
  //   console.log("Profile componentWillMount")
  // }

  constructor(props) {
    super(props);

    console.log("Profile constructor")
  }
  render() {
    return (
      <div ref="title">
        Profile
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
           <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}
