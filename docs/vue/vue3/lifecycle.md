```ts
//从 vue 中引入 多个生命周期函数
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, 
  onBeforeUnmount, unMounted} from 'vue'
export default {
  name: 'App',
  setup() {
    onBeforeMount(() => {
      // 在挂载前执行
    })
    onMounted(() => {
      // 在挂载后执行
    })
    onBeforeUpdate(() => {
      // 在更新前前执行
    })
    onUpdated(() => {
      // 在更新后执行
    })
    onBeforeUnmount(() => {
      // 在组件销毁前执行
    })
    unMounted(() => {
      // 在组件销毁后执行
    })
    return {}
  }
  
}
```