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
```vue
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