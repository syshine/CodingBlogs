# 错误解决
### import.meta.env
#### 问题描述
1.仅当 '--module' 选项为 'es2020'、'es2022'、'esnext'、 'system'、'node12' 或 'nodenext' 时，才允许 'import.meta' 元属性。ts(1343)

2.类型“ImportMeta”上不存在属性“env”
#### 解决办法
问题2解决办法是 "types": ["vite/client"]
```json
# tsconfig.json
{
  "compilerOptions": {
    "module": "es2020",
    "moduleResolution": "node",
    "target": "es2020",
    "esModuleInterop": true,
    "types": ["vite/client"]
  }
}
```
[问题1参考](https://github.com/kulshekhar/ts-jest/issues/3888)
[问题2参考](https://blog.csdn.net/chengxuyuanjava123/article/details/123874161)

## 类型报错
### 已声明“*”，但从未读取其值 ts(6133)
#### 问题描述
已声明“event”，但从未读取其值
```ts
ipcMain.on('counter-value', (event, value) => {
  console.log('新值是: ' + value)
})
```
#### 解决办法
将未使用的变量名前面加下划线_
```ts
ipcMain.on('counter-value', (_event, value) => {
  console.log('新值是: ' + value)
})
```

### 函数参数非必传
TypeScript中的函数配置可选参数，在ES5或者ES6中函数中的实参可以不传递进去，但是在TS中必须传递进去。
#### 解决办法
如果需要设置非必传参数，就必须设置可选参数具体如下
```ts
const fun = (a: string, b?: number) => {
  //形参后面加个?代表可以传递参数也可以不传递参数
  console.log(a) //typescript
}
fun('typescript')
```