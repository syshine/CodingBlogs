# Environment 环境变量
## 创建 env
在根目录下创建
.env.development
```
# just a flag
ENV = 'development'

VITE_PORT = 9501

# base api
VITE_APP_BASE_API = '/dev-api'

# proxy api
VITE_APP_PROXY_API = 'http://127.0.0.1:port/xxx/'
```
.env.prod
```
# just a flag
ENV = 'development'

VITE_PORT = 9501

# base api
VITE_APP_BASE_API = '/prod-api'

# proxy api
VITE_APP_PROXY_API = 'http://127.0.0.1:port/xxx/'
```

## 启用 env 
在package.json添加--mode指令:
``` json
"scripts": {
  "dev": "vite",
  "develop": "vite --mode development",
  "prod": "vite --mode production",
  "build": "vite build",
  "preview": "vite preview"
}
```

## 在 vite.config 中使用 env 环境变量
vite.config.ts:
```ts
import { defineConfig, loadEnv } from 'vite'
export default ({ mode }) => defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // detail: https://cn.vitejs.dev/config/server-options.html#server-proxy
      [loadEnv(mode, process.cwd()).VITE_APP_BASE_API]: {
        target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_API,
        changeOrigin: true,
        rewrite: (path) => {
          const apiBase = loadEnv(mode, process.cwd()).VITE_APP_BASE_API
          const envApi = new RegExp('^' + apiBase)
          return path.replace(envApi, '')
        },
      },
    },
  }
})
```

## 在.vue 中使用 env 环境变量
```ts
console.log(import.meta.env.VITE_APP_BASE_API)
```