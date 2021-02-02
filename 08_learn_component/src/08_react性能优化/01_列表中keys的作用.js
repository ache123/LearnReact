import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["aaa","bbb"]
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item,index) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
        <button onClick={e => {this.insertMovie()}}>添加</button>
      </div>
    )
  }

  insertMovie() {
    // 在数组后面加入有无key意义不大
    // this.setState({
    //   movies: [...this.state.movies, "ccc"]
    // })

    // 在数组前面或者中间插入需要key实现性能优化
    // 用index作为key性能不会优化，因为每次渲染index都会改变
    this.setState({
      movies: ["ccc", ...this.state.movies]
    })
  }
}
