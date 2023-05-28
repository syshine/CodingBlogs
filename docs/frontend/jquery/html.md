# jQuery HTML
## 设置内容和属性
### text()、html() 以及 val()
- text() - 设置或返回所选元素的文本内容
- html() - 设置或返回所选元素的内容（包括 HTML 标记）
- val() - 设置或返回表单字段的值
```js
$("#test1").text("Hello world!");

$("#test2").html("<b>Hello world!</b>");

$("#test3").val("RUNOOB");
```

### text()、html() 以及 val() 的回调函数
上面的三个 jQuery 方法：text()、html() 以及 val()，同样拥有回调函数。回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
```js
// text()
$("#test1").text(function(i,origText){
  return "旧文本: " + origText + " 新文本: Hello world! (index: " + i + ")"; 
});

// html()
$("#test2").html(function(i,origText){
  return "旧 html: " + origText + " 新 html: Hello <b>world!</b> (index: " + i + ")"; 
});
```

### 设置属性 - attr()
回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
```js
$("#runoob").attr("href","http://www.runoob.com/jquery");

// 同时设置多个属性
$("#runoob").attr({
  "href" : "http://www.runoob.com/jquery",
  "title" : "jQuery 教程"
});

// 回调函数
$("#runoob").attr("href", function(i,origValue){
  return origValue + "/jquery"; 
});
```

## css() 方法
### 返回 CSS 属性
#### 语法
`css("propertyname");`
#### 实例
```js
$("p").css("background-color");
```

### 设置 CSS 属性
#### 语法
`css("propertyname","value");`

设置多个CSS 属性
`css({"propertyname":"value","propertyname":"value",...});`
#### 实例
```js
$("p").css("background-color","yellow");

// 设置多个 CSS 属性
$("p").css({
  "background-color":"yellow",
  "font-size":"200%"
});
```

## 尺寸
jQuery 提供多个处理尺寸的重要方法：

- width()
- height()
- innerWidth()
- innerHeight()
- outerWidth()
- outerHeight()
![尺寸说明](./images/jquerydim.gif)

### width() 和 height() 方法
width() 方法设置或返回元素的宽度（不包括内边距、边框或外边距）。

height() 方法设置或返回元素的高度（不包括内边距、边框或外边距）。
```js
console.log("div 的宽度是: " + $("#div1").width() + "</br>");
console.log(txt+="div 的高度是: " + $("#div1").height());
```

### innerWidth() 和 innerHeight() 方法
innerWidth() 方法返回元素的宽度（包括内边距）。

innerHeight() 方法返回元素的高度（包括内边距）。
```js
console.log("div 宽度，包含内边距: " + $("#div1").innerWidth() + "</br>");
console.log(txt+="div 高度，包含内边距: " + $("#div1").innerHeight());
```

### outerWidth() 和 outerHeight() 方法
outerWidth() 方法返回元素的宽度（包括内边距和边框）。

outerHeight() 方法返回元素的高度（包括内边距和边框）。
```js
console.log("div 宽度，包含内边距和边框: " + $("#div1").outerWidth() + "</br>");
console.log(txt+="div 高度，包含内边距和边框: " + $("#div1").outerHeight());
```