import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios'


import App from './App';

// 4.默认配置
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.headers.common["token"] = "aaaaaaa";
// axios.defaults.headers.post["Content-type"] = "application/text"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

