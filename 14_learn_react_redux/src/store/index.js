import {createStore, applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk'

import reducer from './reducer.js';

// 应用一些中间件
const storeenhance = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, storeenhance);


export default store;