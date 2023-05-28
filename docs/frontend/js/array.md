# 数组
以下代码中变量`peoples`如无声明，则默认定义为：
```js
const peoples = [
  { name: "Tom", age: 20, sex: '男' },
  { name: "Jerry", age: 18, sex: '女' }
]
```
## 创建
创建一个数组有三种方法。

下面的代码定义了一个名为 myCars的数组对象：
```js
// 常规方式:
var myCars=new Array();
myCars[0]="Saab";      
myCars[1]="Volvo";
myCars[2]="BMW";

// 简洁方式:
var myCars=new Array("Saab","Volvo","BMW");

// 字面:
var myCars=["Saab","Volvo","BMW"];
```

## 常规
### 连接
```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join()); // Banana,Orange,Apple,Mango
```

## 查找
### findIndex
```js
const peoples = [
  { name: "Tom", age: 20, sex: '男' },
  { name: "Jerry", age: 18, sex: '女' }
]

const index = peoples.findIndex(item => {
  return item.name === "Tom"
})

console.log(index) // 0
```

### find
```js
const peoples = [
  { name: "Tom", age: 20, sex: '男' },
  { name: "Jerry", age: 18, sex: '女' }
]

const people = peoples.find(item => {
  return people.name === "Tom"
})

console.log(JSON.stringify(people)) // {"name":"Tom","age":20,"sex":"男"}
```
## 遍历
### map
map返回的是return的结果，而不是原数组中的元素，新的数组长度和原数组是一致的
```js
const peoples = [
  { name: "Tom", age: 20, sex: '男' },
  { name: "Jerry", age: 18, sex: '女' }
]

const listTemp = peoples.map((item, index) => {
  return {
    name: item.name,
    sex: item.sex,
  }
})

console.log(JSON.stringify(listTemp)) // [{"name":"Tom","sex":"男"},{"name":"Jerry","sex":"女"}]
```

### filter
filter返回的是对原数组的过滤，其元素和原数组还是原数组中的元素，长度可能发生变化
```js
const peoples = [
  { name: "Tom", age: 20, sex: '男' },
  { name: "Jerry", age: 18, sex: '女' }
]

const listTemp = peoples.filter((item, index) => {
  return item.age > 19
})

console.log(JSON.stringify(listTemp)) // [{"name":"Tom","age":20,"sex":"男"}]
```