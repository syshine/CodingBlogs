
## Linux安装Nodejs
### 下载
CentOS7.9.2009安装最新版本会有glibc版本过低问题，所以本机安装v16.20.1版本
[最新版本下载地址](https://nodejs.org/zh-cn/download)
[历史版本下载地址](https://nodejs.org/zh-cn/download/releases)
[v16.20.1下载地址](https://nodejs.org/download/release/v16.20.1/)(下载node-v16.20.1-linux-x64.tar.gz)

### 安装
在root用户下操作
1. 新建nodejs文件夹
```bash
cd /usr/local
mkdir nodejs
```

2. 解压
```bash
# /mnt/hgfs/installer是下载的nodejs压缩包所在文件夹
tar zxvf /mnt/hgfs/installer/node-v16.20.1-linux-x64.tar.gz -C /usr/local/nodejs
```

3. 编辑环境变量
类似windows系统里添加path变量。
不能用软链接来使用全局命令，因为用npm安装新插件的时候，新插件还得再建一个软链接，太麻烦！
```bash
vim /root/.bashrc

# 在环境变量的最下面一行，添加nodejs的路径
export PATH=$PATH:/usr/local/nodejs/node-v16.20.1-linux-x64/bin

# 修改以后执行生效
source /root/.bashrc

# 查看node版本
node -v
# v16.20.1
npm -v
# 8.19.4
```

[参考网址](https://www.bilibili.com/video/BV1yp4y197o7/)