import React from 'react'
// import connect from '../utils/connect'
import { connect } from 'react-redux'
import {
  subAction,
  decAction
} from '../store/actionCreators'

function About(props) {

  return (
    <div>
      <h1>About</h1>
      <h1>Banner</h1>
      <ul>
        {
          props.banners.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
      <h1>Recommend</h1>
      <ul>
        {
          props.recommends.map((item, index) => {
            return <li key={item.acm}>{item.title}</li>
          })
        }
      </ul>
    </div>
  )

}

const mapStateToProps = state => ({
  banners: state.banners,
  recommends: state.recommends
})
const mapDispachToProp = dispatch => {
  return {
    decrement: function () {
      dispatch(decAction());
    },
    subNumber: function (num) {
      dispatch(subAction(num))
    }
  }
};

export default connect(mapStateToProps, mapDispachToProp)(About);
