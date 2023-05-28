# 流程控制
## 循环
### for
```js
let arr = [1,2,3,4,5,6,7]
for(let i = 0;i<arr.length;i++){
  console.log(arr[i])
}
// 1,2,3,4,5,6,7
```

### for...of
for...of是es6的
for...of这个方法避开了for...in循环的所有缺陷
适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合
它可以正确响应break,continue和return语句
```js
// for-of遍历数组对象
let arr=[ 
  { name:'张三', age:11 },
  { name:'李四', age:12 },
  { name:'王五', age:13 }
]

for(let item of arr){
  console.log(item);
}

// for-of遍历字符串
let str="你好啊!Javascript"
for (const item of str) {
  console.log(item);
}
```

借助Object.entries遍历对象：
```js
const obj = {
  name: "Megan",
  age: "do the Math",
  role: "front-end developer"
}

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);  // name Megan
  console.log(`${key}:${value}`); // name:Megan
}
```

### for...in
for...in 是es5中有的

for...in是为遍历对象而设计的，不适用于遍历数组。
它可以正确响应break,continue和return语句
for-in遍历数组的缺点：
因为for-in遍历的index值"0","1","2"等是字符串而不是数字
for-in循环存在缺陷：会遍历对象自身的和继承的可枚举属性(不含Symbol属性)
```js
var myObject = { a:1, b:2, c:3 }

for (var key in myObject) {
  console.log('key值',key);
}
```