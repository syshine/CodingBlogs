# vite

## 创建工程
### 1. 创建工程
在工程目录位置cmd运行
```bash
pnpm create vite project-name --template vue-ts
```
查看 [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 以获取每个模板的更多细节：vanilla，vanilla-ts, vue, vue-ts，react，react-ts，react-swc，react-swc-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts。

### 2.初始化运行
用vs code打开工程,在终端运行
```bash
pnpm install
pnpm run dev
```

### 3.安装更多功能
```bash
pnpm install '@vueuse/core'
pnpm install vue-router
pnpm install pinia
pnpm install element-plus
pnpm install '@element-plus/icons-vue'

pnpm install axios
pnpm install js-cookie
pnpm install vue-i18n

pnpm install sass --save-dev
pnpm install fast-glob -D
pnpm install vite-plugin-svg-icons -D
```
注意：
1. VueUser
From v4.0, it works for Vue 2 & 3 within a single package by the power of vue-demi!