import axios from 'axios';
import { 
  takeEvery, 
  put, 
  all, 
} from 'redux-saga/effects';
import {
  FETCH_HOME_MULTIDATA,
  // ADD_NUMBER
} from './home/constants';

import {
  changeBannersAction,
  changeRecommendsAction
} from './home/actionCreators'

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  console.log(res);
  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list
  // yield put(changeBannersAction(banners));
  // yield put(changeRecommendsAction(recommends)); 
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendsAction(recommends))
  ])

}

// 监听action对应的type，监听到就执行生成器函数
function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
}

export default mySaga;