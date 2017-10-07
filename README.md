# 参考网址
* [webpack 中文文档](https://doc.webpack-china.org/)
* [搜罗一切webpack的好文章好工具](https://github.com/webpack-china/awesome-webpack-cn/)
# 搜罗一切webpack的好文章好工具
* [webpack指南](https://webpack.toobug.net/zh-cn/) | `TooBug` | 2015
* [webpack-demos](https://github.com/ruanyf/webpack-demos) | `ruanyf` | 2016
# 使用方法
* 安装webpack和webpack-dev-server 
* 安装package.json中的包
* 启动项目
* 访问[http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)
OR
* [http://localhost:8080/index.html](http://localhost:8080/index.html)
```
$ npm i webpack@1.x webpack-dev-server@1.x --save-dev
$ npm install
$ webpack-dev-server
```
# 传递环境变量参数
```
$ env DEBUG=true webpack-dev-server
```