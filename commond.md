# webpack常用的命令
## 构建命令
	webpack
	#方便出错时能查阅更详尽的信息
	webpack --display-error-details
## 压缩混淆脚本，这个非常非常重要！
	webpack -p
## 监听变动并自动打包
	webpack --watch
## 生成map映射文件，告知哪些模块被最终打包到哪里了
	webpack -d
## 使命令行终端命令颜色有变化
	webpack --colors
## 使用另一份配置文件（比如webpack.config2.js）来打包
	webpack --config XXX.js
# webpack-dev-server常用的命令
## 自动打开浏览器
	webpack-dev-server --open