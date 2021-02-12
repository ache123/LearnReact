import {createStore, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'

import createSagaMiddleware from 'redux-saga';
import saga from './saga'

import reducer from './reducer.js';

// 应用一些中间件
// 1.引入thunkMiddleware中间件
// 2.创建SagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();
const storeEnhance = applyMiddleware(thunkMiddleware, sagaMiddleware);

// 使用Redux DevTools写法
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const store = createStore(reducer, composeEnhancers(storeEnhance));


// 正常写法
// const store = createStore(reducer,storeEnhance);

// SagaMiddleware中间件生效必须使用run(),才能对dispatch action进行拦截
sagaMiddleware.run(saga);

export default store;