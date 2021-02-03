import React, {  PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friend: [
        { name: "aaa", age: 20 },
        { name: "bbb", age: 18},
        { name: "ccc", age: 2 },
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>好友列表：</h2>
        <ul>
          {
            this.state.friend.map((item, index) => {
              return (
                <div>
                  <li key={item.name}>
                    姓名：{item.name} 
                    年龄：{item.age}
                    <button onClick={e => this.increment(index)}>年龄+1</button>
                  </li>
                  
                </div>
                
              )
            })
          }
        </ul>

        <button onClick={e => this.insertData()}>添加数据</button>
      </div>
    )
  }

  increment(index) {
    const newArr = [...this.state.friend];
    newArr[index].age += 1;
    this.setState({
      friend: newArr
    })
  }

  // 如果这里直接在friend中push，那么在性能优化时，newState和原始的state是一样的，无法更新render
  insertData() {
    const newData = {name: "ddd", age: 90}
    this.setState({
      friend: [...this.state.friend, newData]
    })
  }
}
