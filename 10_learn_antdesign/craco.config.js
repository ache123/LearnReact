const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');


// __dirname当前文件所在路径与dir拼接
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);



module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: false, // 开启暗黑模式
              compact: false, // 开启紧凑模式
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],

  // 为文件夹起别名
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components"),
    }
  }
};