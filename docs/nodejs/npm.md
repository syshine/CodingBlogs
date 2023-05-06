# NPM
## 概述
NPM的全称是Node Package Manager，是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。 

2020年3月17日，Github宣布收购npm，GitHub现在已经保证npm将永远免费。

npm是JavaScript运行时环境Node.js的默认包管理器。

## 使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。出现版本提示表示安装成功:

由于外网访问速度较慢,可使用 **淘宝镜像**
```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```
[菜鸟教程-Runoob](https://www.runoob.com/nodejs/nodejs-npm.html)

## 常用命令
- NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

- 使用```npm help <command>```可查看某条命令的详细帮助，例如```npm help install```。

- 在package.json所在目录下使用```npm install . -g```可先在本地安装当前命令行程序，可用于发布前的本地测试。

- 使用```npm update <package>```可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

- 使用```npm update <package> -g```可以把全局安装的对应命令行程序更新至最新版。

- 使用```npm cache clear```可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

- 使用```npm unpublish <package>@<version>```可以撤销发布自己发布过的某个版本代码。

## 常用插件
### Vue Router 路由
```bash
npm install vue-router --save
```

### Element Plus 控件
```bash
npm install element-plus --save
```
### Axios HTTP库
Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中。
Vue 版本推荐使用 axios 来完成 ajax 请求。
```bash
npm install axios
```
### Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
```bash
npm install vuex
```

### Pinia
Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。
Pinia 起源于一次探索 Vuex 下一个迭代的实验，与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。
```bash
npm install pinia
```

### js-cookie
[js-cookie](https://github.com/js-cookie/js-cookie)是一个简单的,轻量级的处理cookies的js API，用来处理cookie相关的插件
```bash
npm i js-cookie
```


### sass
vite 报错 internal server error preprocessor dependency sass not found. did you install it vite
安装node-sass 或 sass 就可以解决

执行命令
```bash
npm install node-sass
// 或者
npm install sass --save-dev
```

### NProgress
NProgress是一个比较简单的页面加载用进度条（其实也可以用作接口加载进度，或者其它处理加载进度样式）。
```bash
npm install --save nprogress
```

### 国际化 vue-i18n
多语言
```bash
npm install vue-i18n
```

### Icon图标 element-plus/icons-vue
[使用方法](https://element-plus.gitee.io/zh-CN/component/icon.html)
```bash
npm install '@element-plus/icons-vue'
```

### svg图标 vite-plugin-svg-icons
- 预加载 在项目运行时就生成所有图标,只需操作一次 dom
- 高性能 内置缓存,仅当文件被修改时才会重新生成

[参考1](https://www.jianshu.com/p/0269d18f0ab1)
[参考2](http://events.jianshu.io/p/aad7faa3900e)
[vite-plugin-svg-icons github官网](https://github.com/vbenjs/vite-plugin-svg-icons)
[vite-plugin-svg-icons github官网-中文说明](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md)
#### 1. 安装
此处还需要安装下fast-glob相关依赖，不然vite运行npm run dev时会报Cannot find module 'fast-glob’的错误
```bash
npm i fast-glob -D
npm i vite-plugin-svg-icons -D
```

#### 2. vite.config.ts 中的配置插件
```ts
//插件引入
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

  plugins: [
    vue(),
    Components({
      // UI库
      resolvers: [ArcoResolver()],
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",

      /**
       * 自定义插入位置
       * @default: body-last
       */
      // inject?: 'body-last' | 'body-first'

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      // customDomId: '__svg__icons__dom__',
    }),
  ],
```
<!-- #### 3.配置 tsconfig.json
如果你使用的 Typescript, 可以在 tsconfig.json 配置文件中添加：
```ts
// tsconfig.json
{
  "compilerOptions": {
    "types": ["vite-plugin-svg-icons/client"]
  }
}
``` -->

#### 3.配置 main.ts(或main.js)
```ts
import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:svg-icons-register';  // 引入注册脚本
import SvgIcon from '@/components/SvgIcon/index.vue';

const app = createApp(App)
// 注册全局组件
app.component('SvgIcon', SvgIcon)
```

#### 4.创建引入文件
将下载的svg文件拷贝到src/assets/icons/svg/文件夹下

创建SvgIcon组件, components/SvgIcon/index.vue文件内容如下
```html
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  iconClass: { // 图标名称与assets/icon/svg下使用的文件名一致
    type: String,
    required: true
  },
  className: { // 给图标添加class
    type: String,
    default: ''
  },
  color: { // 设置图标颜色
    type: String,
    default: '#333'
  }
});
const iconName = computed(() => {
  return `#icon-${props.iconClass}`;
});
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`;
  }
  return 'svg-icon';
});
</script>

<style scope lang="scss">
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 15px;
  margin-right: 12px;
  position: relative;
}

.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
```

#### 5.使用方法
```html
// 自定义的svg图标
<svg-icon icon-class="lock" class="loack-icon"></svg-icon>
<svg-icon icon-class="password" />
```

### postcss-loader
postcss 一种对css编译的工具，类似babel对js的处理，常见的功能如：
1. 使用下一代css语法
2. 自动补全浏览器前缀
3. 自动把px代为转换成rem
4. css 代码压缩等等
[简介](https://www.jianshu.com/p/9a9048bc8978)
```bash
npm install postcss-loader –save-dev
```

### wangeditor
富文本编辑器
wangEditor 有详细的中文文档，以及中文交流环境。因为作者就是国内程序员。
[官网](https://www.wangeditor.com/)
```bash
npm install @wangeditor/editor
#安装 Vue2 组件(可选)
npm install @wangeditor/editor-for-vue --save
#安装 Vue3 组件(可选)
npm install @wangeditor/editor-for-vue@next --save

```