import React, { Component } from 'react'
import PropTypes from 'prop-types'

function ChildCpn(props) {
  const { name, age } = props;
  const { names } = props;
  return (
    <div>
      <h2>子组件展示数据： {name + " " + age}</h2>
      <ul>
        {
          names.map((item, index) => {
            return <li>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

class ChildCpn2 extends Component {
  // 类组件的属性验证还可以这样写
  // es6中的class fields写法
  static propTypes = {

  }

  static defaultProps = {

  }
}


// 对传参类型进行验证,类组件和函数组件都可以这样写
ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  names: PropTypes.array
}

ChildCpn.defaultProps = {
  name: "def",
  age: 30,
  names: ["aaa", "bbb"]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="ch" age={18} names={["abx", "aaa"]} />
        <ChildCpn name="aa" age={20} names={["abx", "aaa"]} />
        <ChildCpn/>
      </div>
    )
  }
}

