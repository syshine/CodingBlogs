# 常见错误

## 运行时，警告提示

### 运行vue项目时，警告提示"export 'default' (imported as 'Vue') was not found in 'vue'
在main.js中

#### 原因：
安装的vue-cli为v4以上的版本，其不包含全局的 Vue，Vue 被 createApp函数代替

#### 解决方案：
在main.js中
将
```js
// 这是vue2写法
import Vue from 'vue'
new Vue({
  el: '#app',
  render: h => h(App)
})
```
改成
```js
// 这是vue3写法
import { createApp } from 'vue'
createApp(App).mount('#app')
```
