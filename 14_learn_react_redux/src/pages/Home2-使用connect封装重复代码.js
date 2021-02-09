import React from 'react'
import connect from '../utils/connect'

import {
  incAction,
  addAction
} from '../store/actionCreators'

function Home(props) {
  return (
    <div>
      <hr />
      <h1>Home</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={e => props.increment()}>+1</button>
      <button onClick={e => props.addNumber(5)}>+5</button>
    </div>
  )
}


const mapStateToProps = state => ({
  counter: state.counter
});
const mapDispachToProp = dispatch => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num))
  }
});

export default connect(mapStateToProps, mapDispachToProp)(Home);