//注意这种写法 我们把jQuery这个变量直接插入到plugin.js里面了
//相当于在这个文件的开始添加了 var jQuery = require('jquery');
import 'imports-loader?jQuery=jquery!./plugin.js';

let node = $('<p>Hello, World 第二种方法!</p>');
node.greenify().appendTo('body');
