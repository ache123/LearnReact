import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      names: ["aaa", "bbb", "ccc"]
    }
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          {
            this.state.names.map((item, index) => {
              return (
                <CSSTransition key={item}
                  timeout={500}
                  classNames="item">
                  <div>
                    {item}
                    <button onClick={e => this.removeItem(index)}>-</button>
                  </div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>添加</button>
      </div>


    )
  }

  removeItem(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => indey !== index)
    })
  }

  addName() {
    this.setState({
      names: [...this.state.names, "ch"]
    })
  }
}
