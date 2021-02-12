import axios from 'axios';
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import {
  FETCH_HOME_MULTIDATA,
  // ADD_NUMBER
} from './constants';

import {
  changeBannersAction,
  changeRecommendsAction
} from './actionCreators'

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
  // takeLatest、takeEvery区别：
  // takeEvery：每一个action都会执行
  // takeLatest：依次只能监听一个action
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  yield all([
    // takeLatest(ADD_NUMBER, fetchHomeMultidata),
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata)
  ])
}

export default mySaga;