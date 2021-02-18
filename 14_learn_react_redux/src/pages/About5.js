import React, { useEffect } from 'react'
// import connect from '../utils/connect'
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  subAction,
  decAction
} from '../store/actionCreators'

function About(props) {
  console.log("About页面传染")

  const { banners, recommends, counter } = useSelector(state => ({
    banners: state.banners,
    recommends: state.recommends,
    counter: state.counter
  }), shallowEqual);

  const dispatch = useDispatch();

  function decrement() {
    dispatch(decAction());
  }

  function subNumber(num) {
    dispatch(subAction(num))
  }

  return (
    <div>
      <hr />
      <h1>About</h1>
      <h2>当前计数：{counter}</h2>
      <button onClick={e => decrement()}>-1</button>
      <button onClick={e => subNumber(5)}>-5</button>
      <h1>Banner</h1>
      <ul>
        {
          banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )

}


export default About;
