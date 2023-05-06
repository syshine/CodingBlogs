# Vite Press
## 下载安装
新建文件夹,进入后用命令窗口(cmd)依次运行
```bash
# Installation
pnpm add -D vitepress

# Setup Wizard
pnpm exec vitepress init
```

![选择配置](./images/vitepress-init.png)

运行站点：
```bash
npm run docs:dev
```

## 错误
### 启动错误
failed to start server. error:
TypeError: dns.setDefaultResultOrder is not a function
应该是node版本不对，目前注释掉下面语句可以运行
```js
# @dist\node\serve-4e1f0fc0.js里的
dns.setDefaultResultOrder("verbatim");
```

如果是从github下载的最新版本，则应该注释
```ts
# @src\node\server.ts里的
import dns from 'dns'
dns.setDefaultResultOrder("verbatim");
```