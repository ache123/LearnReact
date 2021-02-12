import React, { PureComponent } from 'react'
import { connect } from 'react-redux'



import {
  fetchHomeMultidataAction
} from '../store/home/actionCreators'

class Home extends PureComponent {
  componentDidMount() {

    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <hr />
        <h1>Home</h1>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  counter: state.counterInfo.counter
});
const mapDispachToProp = dispatch => ({
  getHomeMultidata() {
    dispatch(fetchHomeMultidataAction);
  }
});

export default connect(mapStateToProps, mapDispachToProp)(Home);