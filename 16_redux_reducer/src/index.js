import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { StoreContext } from './utils/contect'
import store from './store'

import { Provider } from 'react-redux'

ReactDOM.render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

