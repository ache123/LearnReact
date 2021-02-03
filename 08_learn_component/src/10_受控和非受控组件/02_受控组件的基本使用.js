import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            用户：
            {/* 受控组件  单向事件流 */}
            <input type="text" 
                  id="username" 
                  onChange={e => this.handleChange(e)}
                  value={this.state.username}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    // 取消form中submit的默认行为
    event.preventDefault();
    console.log(this.state.username);


  }

  handleChange(event) {
    this.setState({
      username: event.target.value
    })
  }
}
