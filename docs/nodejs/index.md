# Node.js
## 概述

Node.js® 是一个开源、跨平台的 JavaScript 运行时环境。
[官网](https://nodejs.org/zh-cn/)

## 安装
1.下载
[下载地址](https://nodejs.org/download/release/)
[支持win7版本 node-v16.1.0-win-x86.zip](https://nodejs.org/download/release/v16.1.0/)

2.解压的文件到安装文件夹。

3.新增环境变量：NODE_SKIP_PLATFORM_CHECK  值：1。(如果配置过不用再配置)。

4.win+r运行cmd,输入node -v查看版本号。

5.配置npm路径(可选)
[参考网址](https://zhuanlan.zhihu.com/p/148188987)
我们可以改变全局模块时的路径以及缓存cache的路径路径，从而减少C盘的使用。

```bash
npm config set prefix"nodeglobal路径"
# 和
npm config set cache "node_cache路径"
```
执行成功后还得设置环境变量，详情请看上面的参考网址
## 教程

[菜鸟教程-Runoob](https://www.runoob.com/nodejs/nodejs-tutorial.html)