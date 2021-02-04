import React, { PureComponent } from 'react';

function withAuth(WrappedComponent) {
  const newCpn = props => {
    const {isLogin} = props;
    if(isLogin) {
      return <WrappedComponent {...props}/>
    }else {
      return <LoginPage/>
    }
    
  }

  newCpn.displayName = "AuthCpn"
  return newCpn;
}

class CartPage extends PureComponent {
  render() {
    return (
      <div>
        CartPage
      </div>
    )
  }
}

class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        LoginPage
      </div>
    )
  }
}

const AutHCart = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AutHCart isLogin={false}/>
      </div>
    )
  }
}
