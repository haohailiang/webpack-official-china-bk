const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    // 入口文件名称
    entry: './index.js',
    // 输出文件名称
    output: {
        filename: 'bundle.js'
    },
	// 这里是我们新添加的处理不同类型文件需要的 Loader
    module: {
    	rules: 
    	[
    		{ test: /\.css$/, 
    			use: 
    			[ 
	    			{ loader: 'style-loader' }, 
	    			{ loader: 'css-loader' } 
	    		]
    		}
    	]
    },
    // 添加 plugin 的配置选项
    plugins: [
        new HtmlWebpackPlugin({
            title: '自动生成HTML文件',
        })
    ]
}