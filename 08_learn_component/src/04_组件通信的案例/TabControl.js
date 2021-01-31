import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curItem: 0
    }
  }

  render() {
    const {titles} = this.props;
    const {curItem} = this.state;
    return (
      <div className="tab-control">
        {
          titles.map((item,index) => {
            return (
            <div className={"tab-item " + (index  === curItem ? "active" : "")} 
                 key={index}
                 onClick = {e => {this.itemClick(index)}}>
              <span>{item}</span>
            </div> )
          })
        }
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      curItem: index
    })

    const {itemClick} = this.props;
    itemClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired
}
