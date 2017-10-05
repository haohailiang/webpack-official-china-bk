const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
    app:'./src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '配置文件修改名字'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
};