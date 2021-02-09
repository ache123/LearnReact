import React, { PureComponent } from 'react'
// import connect from '../utils/connect'
import { connect } from 'react-redux'



import {
  incAction,
  addAction,
  getHomeMultidataAction
} from '../store/actionCreators'

class Home extends PureComponent {
  componentDidMount() {
    // axios({
    //   url: "http://123.207.32.32:8000/home/multidata"
    // }).then(res => {
    //   const data = res.data.data;
    //   this.props.changeBanners(data.banner.list);
    //   this.props.changeRecommends(data.recommend.list);
    // })

    this.props.getHomeMultidata();
  }
  render() {
    return (
      <div>
        <hr />
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.increment()}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }

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
  },
  getHomeMultidata() {
    dispatch(getHomeMultidataAction);
  }
});

export default connect(mapStateToProps, mapDispachToProp)(Home);