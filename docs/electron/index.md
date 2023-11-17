## Electron-Vite
[教程](https://cn.electron-vite.org/guide)

### 安装
```
前提条件
electron-vite 需要 Node.js 版本 14.18+ 和 Vite 版本 3.0+
```
```bash
pnpm i electron-vite -D
```

#### 设置淘宝源
如果没有设置淘宝源，到下面的pnpm install会出现`electron: Running postinstall script， failed in *s`错误，原因：网络太差了或者github无法访问，electron （文件有86M,有点大）依赖没有下载下来，所以报错了！
```bash
pnpm config set electron_mirror https://npm.taobao.org/mirrors/electron/
```

#### 创建项目hello
```bash
# 注意：有些node版本不能识别@，将@quick-start/electron用单引号括起来
pnpm create '@quick-start/electron' hello --template vue-ts
```

vue-ts为模板预设
目前支持的模板预设如下：

| JavaScript| TypeScript |
| -         | - |
| vanilla	| vanilla-ts |
| vue       | vue-ts |
| react     | react-ts |
| svelte	| svelte-ts |
| solid     | solid-ts |

如果是win7系统，安装最新版会运行错误，安装低版本
```bash
# 查看版本
pnpm view '@quick-start/create-electron' versions

# 安装版本1.0.12，Electron的版本是v22.3.23
pnpm create '@quick-start/electron@1.0.12' hello --template vue-ts
```

#### 安装运行
```bash
# hello是上面创建的项目名，进入该文件夹
cd hello
# 记得要切换electron_mirror到淘宝源
pnpm install
pnpm run dev
```

#### 安装包（根据自身工程而定）
```bash
pnpm install '@vueuse/core'
pnpm install vue-router
# Vue 的专属状态管理库，它允许你跨组件或页面共享状态。
pnpm install pinia
pnpm install element-plus
pnpm install '@element-plus/icons-vue'
# Vue3组件通信
pnpm install mitt
# 剪贴板
pnpm install vue-clipboard3

pnpm add -D sass
pnpm install js-cookie
pnpm install path-to-regexp
# vue devtools
pnpm install electron-devtools-installer --save-dev

# 拖拽库
pnpm install sortablejs
# 顶部进度条
pnpm install nprogress

# 数据库mysql包
pnpm install mysql

# 代码高亮
pnpm install highlight.js

# JS字符编码转换
pnpm install iconv-lite
[npm地址](https://www.npmjs.com/package/iconv-lite)

# 标记暂时
pnpm install axios
pnpm install qs
pnpm install screenfull
```