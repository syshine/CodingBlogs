# 开源项目
## element-plus

源码地址:  https://github.com/element-plus/element-plus

- Vue 3 Composition API
- fire Written in TypeScript


## bilibili-vue

预览地址： http://www.lybenson.com/bilibili/

### 技术栈
前端：vue3 + vuex + vite + stylus + nginx

后端：koa2

### 项目运行
源码地址: https://github.com/lybenson/bilibili-vue
如何运行
运行前请先安装nodejs

clone项目到本地

```bash
git clone https://github.com/lybenson/bilibili-vue.git
```

前端运行
```bash
cd bilibili-vue && yarn && yarn dev
```

后端运行
```bash
cd bilibili-vue/bilibili-api && yarn install && yarn dev
```
为了确保运行正确，请先运行后端服务。再运行前端，之后访问 http :// localhost: 8080