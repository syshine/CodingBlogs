### 教程
[菜鸟教程-Runoob](https://www.runoob.com/nodejs/nodejs-mysql.html)


### 安装
```bash
pnpm install mysql
```

### 示例
编写js文件，在以下实例中根据你的实际配置修改数据库用户名、及密码及数据库名：
```js
// test.js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```
运行
```bash
$ node test.js
The solution is: 2
```


### 常见错误
#### 错误 1251 - Client does not support authentication protocol requested by server
[解决方法](/database/mysql/error#错误1251)