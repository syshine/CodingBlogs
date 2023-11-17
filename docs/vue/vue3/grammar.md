# 语法


### defineProps
获取组件传值
```html
<template>
  <h1>{{ msg }}</h1>
  <div @click="clickThis">1111</div>
</template>

<script setup lang="ts">
  defineProps<{ // 采用ts专有声明，无默认值
    msg: string,
    num?: number
  }>()
     // 采用ts专有声明，有默认值
    interface Props {
        msg?: string
        labels?: string[]
    }
    const props = withDefaults(defineProps<Props>(), {
        msg: 'hello',
        labels: () => ['one', 'two']
    })
    
  defineProps({ // 非ts专有声明
    msg: String,
    num: {
      type:Number,
      default: ''
    }
  })
</script>

<style scoped lang="less">
</style>
```

### defineEmits
子组件向父组件事件传递
```html
<template>
  <div @click="clickThis">点我</div>
</template>

<script setup lang="ts">
    /*ts专有*/
  const emit= defineEmits<{
    (e: 'click', num: number): void
  }>()
    /*非ts专有*/
  const emit= defineEmits(['click'])
  
  const clickThis = () => {
    emit('click',2)
  }
</script>

<style scoped lang="less">
</style>
```

### defineExpose
子组件暴露自己的属性
```html
<template>
  <div>子组件helloword.vue</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(123456)
defineExpose({
  count
})
</script>

<style scoped lang="less">
</style>
```

父组件获取属性
```html
<template>
  <div @click="helloClick">父组件</div>
  <helloword ref="hello"></helloword>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import helloword from './components/HelloWorld.vue'
const hello = ref(null)
const helloClick = () => {
  console.log(hello.value.count) // 123456
}
</script>

<style lang="less" scoped>
</style>
```

### watch
```ts
// 侦听一个 getter 函数：
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// 侦听一个 ref：
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})

// 当侦听多个来源时，回调函数接受两个数组，分别对应来源数组中的新值和旧值：
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})
```

当使用 getter 函数作为源时，回调只在此函数的返回值变化时才会触发。如果你想让回调在深层级变更时也能触发，你需要使用 { deep: true } 强制侦听器进入深层级模式。在深层级模式时，如果回调函数由于深层级的变更而被触发，那么新值和旧值将是同一个对象。

```ts
const state = reactive({ count: 0 })
watch(
  () => state,
  (newValue, oldValue) => {
    // newValue === oldValue
  },
  { deep: true }
)
```

当直接侦听一个响应式对象时，侦听器会自动启用深层模式：
```ts
const state = reactive({ count: 0 })
watch(state, () => {
  /* 深层级变更状态所触发的回调 */
})
```

停止侦听器：
```ts
const stop = watch(source, callback)

// 当已不再需要该侦听器时：
stop()
```
