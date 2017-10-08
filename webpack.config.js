const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    // 入口文件名称
    entry: './index.js',
    // 输出文件名称
    output: {
        filename: 'bundle.js'
    },
    devtool: 'eval-source-map',
	// 这里是我们新添加的处理不同类型文件需要的 Loader
    module: {
    	rules: 
    	[
    		{ test: /\.css$/, 
    			use: 
    			[ 
	    			{ loader: 'style-loader' }, 
	    			{ loader: 'css-loader?sourceMap' } 
	    		]
    		}
    	]
    },
    // 添加 plugin 的配置选项
    plugins: [
        // 新添加的内置的 plugin！
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '自动生成HTML文件',
        }),
        //provide $, jQuery and window.jQuery to every script
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        })
    ],
    devServer: {
        compress: true, // 让 dev－server 启动 gzip压缩
        hot: true, // 让 dev－server 启动 HMR 功能
    }
}