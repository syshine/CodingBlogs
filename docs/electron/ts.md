# window.api
## 使用TypeScript

[官网使用方法](https://www.electronjs.org/zh/docs/latest/tutorial/context-isolation#%E4%B8%8Etypescript%E4%B8%80%E5%90%8C%E4%BD%BF%E7%94%A8)

[网上大侠方法](https://blog.csdn.net/weixin_43938535/article/details/129899648)

## electron-vite用法
electron-vite已经给我们在/src/preload/index.d.ts添加了基础声明
```ts
// ./src/preload/index.d.ts
import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI,
    api: unknown
  }
}
```
我们添加自己的声明
```ts
// ./src/preload/index.d.ts
import { ElectronAPI } from '@electron-toolkit/preload'

export interface IAppAPI {
  setTitle: (title: String) => void,
  openFile: () => string,
  handleCounter: (callback: (event: IpcMainEvent, value: any) => void ) => void,
}

declare global {
  interface Window {
    electron: ElectronAPI,
    api: IAppAPI
  }
}
```
添加完成后，需要在tsconfig.json中配置 ts 路径
```json
// tsconfig.json
{
  "include": [
    "./src/preload/index.d.ts", // 相对 tsconfig.json 的路径
  ],
}
```