# 1. Element UI
Element UI在vue2使用

[参考网站](https://element.eleme.cn/2.15/#/zh-CN/component/installation)

Element 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。请参考[多语言方案](https://element.eleme.cn/2.15/#/zh-CN/component/i18n)

## 1.1 单文件组件方式(.vue)
### 安装
```
npm i element-ui -S
```

### 全局使用
```js
import Vue from 'vue'

// 导入ElementPlus
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
```

## 1.2 HTML模式(html,jsp等)
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script src="https://unpkg.com/vue@2.6.8/dist/vue.min.js"></script>
  
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.11/lib/theme-chalk/index.css">
  <link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.11/lib/index.js">

  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <!-- 引入组件库 -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
</head>
<body>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</body>
</html>
```

# 2. Element Plus
Element Plus在vue3使用

[参考网站](https://element-plus.gitee.io/zh-CN/guide/installation.html)

Element Plus 组件 默认 使用英语，如果你希望使用其他语言，你可以参考下面的[方案](https://element-plus.gitee.io/zh-CN/guide/i18n.html)。
Element Plus 提供了全局配置国际化的配置。

## 2.1 单文件组件方式(.vue)
### 安装
```
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus --save

# Yarn
$ yarn add element-plus

# pnpm
$ pnpm install element-plus
```

### 全局使用
```js
import { createApp } from 'vue'
import App from './App.vue'

// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App).use(ElementPlus, {
  locale: zhCn,
}).mount('#app')
```

## 2.2 HTML模式(html,jsp等)
```html
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />

    <!-- 说明:3.2.20是vue版本号, 2.2.20是element-plus版本号 (如需保持最新版本,就将地址中的@版本号去掉)-->
    <!-- 导入VUE -->
    <script src="https://unpkg.com/vue@3.2.20/dist/vue.global.js" ></script>
    <!-- 这个是maven方式导入vue -->
    <!-- <script type="text/javascript" src="${pageContext.request.contextPath}/webjars/vue/3.2.20/dist/vue.global.js"></script> -->
    
    <!-- 导入样式表 -->
    <link rel="stylesheet" href="https://unpkg.com/element-plus@2.2.20/dist/index.css" />

    <!-- 导入组件库 -->
    <script src="https://unpkg.com/element-plus@2.2.20/dist/index.full.js"></script>

    <!-- 中文 -->
    <script src="https://unpkg.com/element-plus@2.2.20/dist/locale/zh-cn"></script>

    <title>Element Plus demo</title>
  </head>
  <body>
    <div id="app">
      <el-button>{{ message }}</el-button>
    </div>
    <script>
      const App = {
        data() {
          return {
            message: "Hello Element Plus",
          };
        },
      };
      const app = Vue.createApp(App);
      app.use(ElementPlus);
      app.mount("#app");
      app.use(ElementPlus, {
        locale: ElementPlusLocaleZhCn,
      })
    </script>
  </body>
</html>
```

如果是maven方式导入, 还需要在pom.xml添加依赖
```xml
<!-- https://mvnrepository.com/artifact/org.webjars.npm/vue -->
<dependency>
  <groupId>org.webjars.npm</groupId>
  <artifactId>vue</artifactId>
  <version>3.2.20</version>
</dependency>
```