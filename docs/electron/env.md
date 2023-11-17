# 全局环境变量
electron-vite 会像 V​​ite 一样从项目根目录加载环境变量，并使用不同的前缀来限制可用范围。

默认情况下，以 MAIN_VITE_ 为前缀的变量暴露给主进程，PRELOAD_VITE_ 用于预加载脚本，RENDERER_VITE_ 则用于渲染器。

```env
// .env
SOME_KEY=123                # 无效变量
MAIN_VITE_SOME_KEY=123      # 主进程可用
PRELOAD_VITE_SOME_KEY=123   # 预加载脚本可用
RENDERER_VITE_SOME_KEY=123  # 渲染器可用
```
如果你想自定义 env 变量的前缀，可以使用 envPrefix 选项。
```js
// electron.vite.config.js
export default defineConfig({
  main: {
    envPrefix: 'M_VITE_'
  }
  // ...
})
```

如果你是 TypeScript 用户，请确保在 env.d.ts 中添加 import.meta.env 的类型定义，以获取用户自定义环境变量的类型检查和智能感知。

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_SOME_KEY: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```
注意：
主进程只能使用MAIN_VITE_开头的变量
renderer进程只能使用RENDERER_VITE_开头的变量
哪个进程使用变量就把env.d.ts放在哪个文件夹下，如主进程使用就是`/src/main/env.d.ts`，renderer进程使用就是`/src/renderer/env.d.ts`，如果两个进程都使用，就需要分别在各自的文件夹下设置