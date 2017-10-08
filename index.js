//这个也不需要了 因为$, jQuery, window.jQuery都可以直接使用了
//import $ from 'jquery';
import './plugin.js';

let node = $('<p>Hello, World!</p>');
node.greenify().appendTo('body');
