import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：
            {/* 受控组件  单向事件流 */}
            <input type="text" 
                  id="username" 
                  name="username"
                  onChange={e => this.handleChange(e)}
                  value={this.state.username}/>
          </label>
          <label htmlFor="password">
            密码：
            {/* 受控组件  单向事件流 */}
            <input type="text"
                  id="password"
                  name="password"
                  onChange={e => this.handleChange(e)}
                  value={this.state.password} />
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消form中submit的默认行为
    event.preventDefault();

    const {username, password} = this.state;
    console.log(username, password);


  }

  handleChange(event) {
    this.setState({
      // 计算属性名
      [event.target.name]: event.target.value
    })
  }
}
