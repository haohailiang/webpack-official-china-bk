const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:[
    './entry.js',
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: "http://www.baidu.com/dist/",
    filename: 'result.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '配置文件修改名字'
    })
  ]
};