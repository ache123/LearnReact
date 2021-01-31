import React, { Component } from 'react';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

export default class App extends Component {
  // a标签中的herf地址，如果只是写# eslint会报错，可以写/#，eslint会把它当成路径

  render() {
    return (
      <div>
        <NavBar>
          <span>aaa</span>
          <span>abc</span>
          <a href="/#">ccc</a>
        </NavBar>

        <NavBar2 leftSlot={<span>aaa</span>}
                 centerSlot={<span>abc</span>} 
                 rightSlot={<a href="/#">ccc</a>}/>
          
      </div>
    )
  }
}
