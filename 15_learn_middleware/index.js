import store from './store/index.js';

import {
  addAction, subAction,
} from './store/actionCreators.js';


// 1.基本做法
// console.log("dispatch前---：", addAction(10));
// store.dispatch(addAction(10));
// console.log("dispatch后---：", store.getState());

// console.log("dispatch前---：", addAction(15));
// store.dispatch(addAction(15));
// console.log("dispatch后---：", store.getState());

// 2.封装函数
// function dispatchAndLogging(action) {
//   console.log("dispatch前---：", action);
//   store.dispatch(action);
//   console.log("dispatch后---：", store.getState());
// }

// dispatchAndLogging(addAction(10));
// dispatchAndLogging(addAction(5));

// 3.函数的基础上进行优化：修改原有的dispatch
// hack技术：monkeyingpatch
// const next = store.dispatch;
// function dispatchAndLogging(action) {
//   console.log("dispatch前---：", action);
//   next(action);
//   console.log("dispatch后---：", store.getState());
// }
// store.dispatch = dispatchAndLogging;

// store.dispatch(addAction(10));
// store.dispatch(addAction(5));


// 4.将之前的操作进行封装
// 封装patchLogging的代码
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log("dispatch前---：", action);
    next(action);
    console.log("dispatch后---：", store.getState());
  }
  store.dispatch = dispatchAndLogging;
}

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndLogging(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  
  store.dispatch = dispatchAndLogging;
}

patchLogging(store);
patchThunk(store);

// store.dispatch(addAction(10));
// store.dispatch(addAction(5));

// function foo(dispatch, getState) {
//   dispatch(subAction(10));
// }

// store.dispatch(foo);


// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
  const newMiddleware = [...middlewares];
  newMiddleware.forEach(middleware => {
    middleware(store);
  })
}

applyMiddlewares(patchThunk, patchLogging)