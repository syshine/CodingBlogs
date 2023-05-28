# AJAX
AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。

简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。

## get方法
### 实例
```js
// 请求 "test.php"，但是忽略返回结果：
$.get("test.php");

// 请求 "test.php" 并连同请求发送一些额外的数据（忽略返回结果）：
$.get("test.php", { name:"Donald", town:"Ducktown" });

// 请求 "test.php" 并传递数据数组到服务器（忽略返回结果）：
$.get("test.php", { 'colors[]' : ["Red","Green","Blue"] });

// 请求 "test.php" 并提醒请求的结果：
$.get("test.php", function(data){
alert("Data: " + data);
});
```
### 语法
`$.get(URL,data,function(data,status,xhr),dataType)`

<a id="params_desc"></a>
| 参数	| 描述 |
| --- | --- |
| URL	| 必需。规定您需要请求的 URL。 |
| data	| 可选。规定连同请求发送到服务器的数据。 |
| function(data,status,xhr)	| 可选。规定当请求成功时运行的函数。<br/>额外的参数：<br/>data - 包含来自请求的结果数据<br/>status - 包含请求的状态（"success"、"notmodified"、"error"、"timeout"、"parsererror"）<br/>xhr - 包含 XMLHttpRequest 对象 |
| dataType	| 可选。规定预期的服务器响应的数据类型。<br/>默认地，jQuery 会智能判断。<br/>可能的类型：<br/>"`xml`" - 一个 XML 文档<br/>"`html`" - HTML 作为纯文本<br/>"`text`" - 纯文本字符串<br/>"`script`" - 以 JavaScript 运行响应，并以纯文本返回<br/>"`json`" - 以 JSON 运行响应，并以 JavaScript 对象返回<br/>"`jsonp`" - 使用 JSONP 加载一个 JSON 块，将添加一个 "?callback=?" 到 URL 来规定回调 |

## post方法
### 实例
```js
// 无参数
$.post("demo_test.html",function(data,status){
  alert("Data: " + data + "nStatus: " + status);
});

// 有参数
var data = { a:10, b:"test" }
$.post("demo_post.html", data, function(result){
  $("#result").html(result);
});
```
### 语法
`$(selector).post(URL,data,function(data,status,xhr),dataType)`

参数含义同[get方法](#params_desc)

## ajax方法
### 示例
```js
$.ajax({
  type: "GET",
  url: "test.json",
  data: { a:10, b:"test" },
  dataType: "json",
  success: function(result){
    $("#result").html(result);
  }
});
```
### 语法
```js
$.ajax({name:value, name:value, ... })
```
该参数规定 AJAX 请求的一个或多个名称/值对。

下面的表格中列出了可能的名称/值：
| 名称 | 值/描述 |
| --- | --- |
| async |	布尔值，表示请求是否异步处理。默认是 true。 |
| beforeSend(xhr)	|	发送请求前运行的函数。 |
| cache	|	布尔值，表示浏览器是否缓存被请求页面。默认是 true。 |
| complete(xhr,status)	|	请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。 |
| contentType	|	发送数据到服务器时所使用的内容类型。默认是："application/x-www-form-urlencoded"。 |
| context	|	为所有 AJAX 相关的回调函数规定 "this" 值。 |
| `data`	|	规定要发送到服务器的数据。 |
| dataFilter(data,type)	|	用于处理 XMLHttpRequest 原始响应数据的函数。 |
| dataType	|	预期的服务器响应的数据类型。 |
| `error(xhr,status,error)`	|	如果请求失败要运行的函数。 |
| global	|	布尔值，规定是否为请求触发全局 AJAX 事件处理程序。默认是 true。 |
| ifModified	|	布尔值，规定是否仅在最后一次请求以来响应发生改变时才请求成功。默认是 false。 |
| jsonp	|	在一个 jsonp 中重写回调函数的字符串。 |
| jsonpCallback	|	在一个 jsonp 中规定回调函数的名称。 |
| password	|	规定在 HTTP 访问认证请求中使用的密码。 |
| processData	|	布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。 |
| scriptCharset	|	规定请求的字符集。 |
| `success(result,status,xhr)`	|	当请求成功时运行的函数。 |
| timeout	|	设置本地的请求超时时间（以毫秒计）。 |
| traditional	|	布尔值，规定是否使用参数序列化的传统样式。 |
| `type`	|	规定请求的类型（GET 或 POST）。 |
| `url`	|	规定发送请求的 URL。默认是当前页面。 |
| username	|	规定在 HTTP 访问认证请求中使用的用户名。 |
| xhr	|	用于创建 XMLHttpRequest 对象的函数。 |

## 读取文件内容
```js
// 使用 AJAX 请求改变 <div> 元素的文本：
$.ajax({url:"demo_test.txt",success:function(result){
  $("#div1").html(result);
}});

// 使用 dataType 设置来规定请求的数据类型
$.ajax({url:"demo_ajax_script.js",dataType:"script"});
// demo_ajax_script.js：alert("该 JavaScript 脚本通过 AJAX 加载后执行");
```