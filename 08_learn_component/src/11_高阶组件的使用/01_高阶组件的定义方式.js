import React, { PureComponent } from 'react'

class App  extends PureComponent {
  render() {
    return (
      <div>
        App: {this.props.name}
      </div>
    )
  }
}

// 可以更改组件在react developer tools中的名字
App.displayName = "CH";

// function enhanceComponent(WrappedComponent) {
  // 类组件
//   return class extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props}/>
//     }
//   }
// }

function enhanceComponent2(WrappedComponent) {
  // 函数组件
  function NewComponent(props) {
    return <WrappedComponent {...props}/>
  }
  NewComponent.displayName = "kobe"
  return NewComponent;
}

const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;

// 类的两种定义方式
// class Person {

// }

// const aaa = class Person {

// }

// // 在es6中类表达式中的类名可以省略

// const aaa = class {

// }