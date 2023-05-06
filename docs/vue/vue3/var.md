# 变量
基础变量和数组用ref,对象用reactive
``` ts
const index = ref()
const arr = ref<Array>([])
const entity = reactive({
  a: 10,
  b: 'abc'
})
```

## ref
### 数组
```ts
# 赋值得加.value，不然会失去响应性
# 正确
arr.value = [1,2,3]

# 错误，会失去响应性
arr = [1,2,3]


# 用js数组函数时也得加.value
const index = arr.value.findIndex(i => {
  return i.name === 'tom'
})

# 调用数组元素得在数组后面先加.value再加序号
console.log(arr.value[index].name)

# 字符串转数组
const str = '[1,2,3]'
arr.value = JSON.parse(str)

# 数组转字符串
console.log(JSON.stringify(arr.value))
```

## reactive
### 读取
不用加.value
```ts
# 正确,不用加.value
console.log(entity.a)
```

### 赋值
#### 元素赋值
不用加.value
```ts
# 正确,不用加.value
entity.a = 9
```

#### 整个对象赋值
定义的时候得用let
```ts
let entity = reactive({
  a: 10,
  b: 'abc'
})

# 错误，会失去响应性
entity = {
  a: 100,
  b: 'abcd'
}

# 正确
Object.assign(entity, {
  a: 100,
  b: 'abcd'
})
```