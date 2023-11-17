# Vue2转Vue3
## 导入组件
vue3需要在组件路径后面加.vue
```vue
# vue2写法
import Detail from './components/Detail'

# vue3写法
import Detail from './components/Detail.vue'
```

## 数组
对象数组用ref,如
```ts
let listData = ref<Array>([])
JSON.stringify(listData.value)
```

## props属性
```ts
props: {
  list: {
    type: Array,
    default() {
      return []
    }
  }
}
```
改成
```ts
const props = defineProps<{
  list: {
    type: Array,
    default: []
  }
}>()
```

## filter过滤器
我们建议用计算属性或方法代替过滤器，而不是使用过滤器

## 生命周期
在Vue2中提供了生命周期钩子函数，如`beforeCreate` 、`created` 、`beforeMount` 、`mounted` 、`beforeUpdate`、`updated`、`beforeDestory`、`destoryed`等，用于在组件不同阶段执行一些我们想要的执行的操作

到了Vue3，有所变化

1. beforeCreate ---->setup
2. created ---->setup
3. beforeMount ---->onBeforeMount
4. mounted ---->onMounted
5. beforeUpdate ---->onBeforeUpdate
6. updated ---->onUpdated
7. beforeDestory ---->onBeforeUnmount
8. destoryed ---->onUnmounted

可以看到，setup 函数代替了 beforeCreate和created 两个生命周期函数，因此我们认为setup的执行时间在beforeCreate 和created 之间

[参考网页](https://www.jianshu.com/p/5f1f324ef2e2)

## mixins
vue3推荐使用组合式API，
放在composables文件夹下, 导出函数默认以use开头,如:useSidebar

## $parent
读取父组件属性
父组件
```html
<template>
  <div class="container" >
    <div ref="tagRef" >
      aaa
    </div>
  </div>
</template>
```
### Vue2用法
子组件直接读取
```js
const tagList = this.$parent.$refs.tagRef
```

### Vue3用法
使用父组件provide,子组件inject读取
#### 父组件
```ts
import { ref, provide, readonly } from 'vue'
const tagRef = ref()
// 提供给子组件
provide('tagRef',tagRef)
// provide('tagRef', readonly(tagRef)) // 只读模式
```

#### 子组件
```ts
import { inject } from 'vue'
const tagRef = inject('tagRef')
console.log(tagRef.value.length)
```


## $ref
 $refs 是所有注册过 ref 的集合（对象）
### Vue2用法
定义组件
```html
<el-select ref="select" v-model="value" placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</el-select>
```
使用
```js
this.$refs.select.blur()
```
### Vue3用法
定义组件
```html
<el-select ref="selectRef" v-model="value" placeholder="请选择">
  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
</el-select>
```
使用
```ts
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const selectRef = ref()

// 使密码框失去焦点
selectRef.value.blur()
```

## $el
 $el读取的是组件实例挂载的dom元素
### Vue2用法
```js
const offsetWidth = this.$el.offsetWidth
```
### Vue3用法
改用ref获取dom元素
```html
<template>
  <div ref="rootRef">
    我是根元素
    <div>我是子元素</div>
  </div>
</template>
```
```ts
const rootRef = ref()
const offsetWidth = rootRef.value.offsetWidth // container width
```

# Element Plus
## 1.Button
type="text" 改成 link

## 2.ElDialog
```vue
# <template #title>改成<template #header>
# :visible.sync="visible"改成v-model="visible"
# :destroy-on-close="true"改成destroy-on-close
```

## 3.ElTable
```vue
#vue2
<el-table-column label="名称" prop="name">
  <template slot-scope="{row}">
    <span class="link-type">{{ row.name }}</span>
  </template>
</el-table-column>
```

template里的 slot-scope改成#default

```vue
#vue3
<el-table-column label="名称" prop="name">
  <template slot-scope="{row}">
    <span class="link-type">{{ row.name }}</span>
  </template>
</el-table-column>
```

或者直接

```vue
#vue3
let listData = ref<Array>([])
JSON.stringify(listData.value)
```

### 序号
```vue
<el-table-column type="index" label="序号" width="50" align="center" />
```

