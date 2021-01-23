import React from 'react'


// 1. 类组件
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "你好啊"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <span>我是App组件</span>
//         {/** 格式化 alt + shift + f */}
//         <h2>{this.state.message}</h2>
//       </div>
//     )
//   }
// }

// 2. 函数式组件
/**
 * 特点：
 * 1. 没有this对象
 * 2. 没有内部状态（类组件中的this.state） -> 后面通过hooks解决这个问题
 * 
 */
export default function App() {
  return (
    <div>
      <span>我是function组件</span>
      <h2>你好啊</h2>
    </div>

  )
}