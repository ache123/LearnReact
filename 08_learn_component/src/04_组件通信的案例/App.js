import React, { Component } from 'react';
import TabControl  from './TabControl';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.titles = ['新款', '流行', '精选'];

    this.state = {
      curTitle: "新款",
    }
  }

  render() {
    const {curTitle} = this.state;
    return (
      <div>
        <TabControl 
          titles={this.titles}
          itemClick={index => this.itemClick(index)}/>
        <h2>{curTitle}</h2>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      curTitle: this.titles[index]
    })
  }

}
