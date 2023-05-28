# jQuery
jQuery是一个快速、简洁的JavaScript框架。

jQuery 库包含以下功能：
- HTML 元素选取
- HTML 元素操作
- CSS 操作
- HTML 事件函数
- JavaScript 特效和动画
- HTML DOM 遍历和修改
- AJAX
- Utilities

[下载地址](https://jquery.com/download/)
[菜鸟教程](https://www.runoob.com/jquery/jquery-tutorial.html)

## 示例
### jQuery 语法
jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。

基础语法： `$(selector).action()`

美元符号定义 jQuery
选择符（selector）"查询"和"查找" HTML 元素
jQuery 的 action() 执行对元素的操作
实例:
```js
$(this).hide() // 隐藏当前元素

$("p").hide() // 隐藏所有 <p> 元素

$("p.test").hide() // 隐藏所有 class="test" 的 <p> 元素

$("#test").hide() // 隐藏 id="test" 的元素
```

### 文档就绪事件
```js
$(document).ready(function(){
  // 开始写 jQuery 代码...
});

// 简洁写法（与以上写法效果相同）
$(function(){
  // 开始写 jQuery 代码...
});
```