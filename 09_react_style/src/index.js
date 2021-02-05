import React from 'react';
import ReactDOM from 'react-dom';

// import App from './01_内联样式/App';

// webpack 当导入的为文件夹时，自动找到该文件夹下的index.js
// import App from './02_普通的css/app';

// import App from './03_css_modules/app';
// import App from './04_styled_components/app';

import App from './05_react_添加class/index'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

