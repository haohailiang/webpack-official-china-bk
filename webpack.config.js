const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=10000&name=build/[name].[ext]'
        }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '配置文件修改名字'
    }),
  ]
};