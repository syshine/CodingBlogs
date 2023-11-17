# PNPM
## 简介
PNPM的全称是Performant Node Package Manager，是 Node.js 的替代包管理器。它是 npm 的直接替代品，但速度更快、效率更高。

[官网](https://pnpm.io/zh/)

## 安装
已经安装Node.js, 可以用命令提示行指令安装
```bash
npm install pnpm -g
```

如果没安装Node.js,可以使用以下脚本安装 pnpm。

**Windows**
使用 PowerShell：
```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

## 设置源
```bash
# 查看源
pnpm config get registry 
# 切换淘宝源
pnpm config set registry https://registry.npmmirror.com/
pnpm config set disturl https://npm.taobao.org/dist

# 还原
pnpm config set registry https://registry.npmjs.org
```

## 使用
```bash
pnpm install 包  // 
pnpm i 包
pnpm add 包    // -S  默认写入dependencies
pnpm add -D    // -D devDependencies
pnpm add -g    // 全局安装
```

## 移除
```bash
pnpm remove 包                            //移除包
pnpm remove 包 --global                   //移除全局包
```

## 更新
```bash
pnpm up                //更新所有依赖项
pnpm upgrade 包        //更新包
pnpm upgrade 包 --global   //更新全局包
```

## 设置存储路径
```bash
pnpm config set store-dir /path/to/.pnpm-store
```

## 在系统上禁止使用脚本解决方法
```bash
# 以管理员身份运行power shell
set-executionpolicy remotesigned
```