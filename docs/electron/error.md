### console.log中文乱码
我们可能在Windows的控制台会出现中文乱码的问题，当我们在Windows的控制台下输入chcp,可以查看到当前字符编码，常见的gb2312的值是936，utf8的值是65001。这种情况下只要对package.json进行设置就能解决。
```json
// 前面添加chcp 65001 && 
"scripts": {
    "start": "chcp 65001 && electron-vite preview",
    "dev": "chcp 65001 && electron-vite dev",
}
```