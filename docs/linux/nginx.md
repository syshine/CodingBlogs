## Nginx 安装

### 安装编译工具及库文件
```bash
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```
### 安装 PCRE
PCRE 作用是让 Nginx 支持 Rewrite 功能。
1. 下载 PCRE 安装包，[下载地址](http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz)
```bash
[root@bogon src]# cd /usr/local/src/
[root@bogon src]# wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
```

2. 解压安装包:
```bash
[root@bogon src]# tar zxvf pcre-8.35.tar.gz
```

3. 进入安装包目录
```bash
[root@bogon src]# cd pcre-8.35
```

4. 编译安装 
```bash
[root@bogon pcre-8.35]# ./configure
[root@bogon pcre-8.35]# make && make install
```

5. 查看pcre版本
```bash
[root@bogon pcre-8.35]# pcre-config --version
```

### 安装 Nginx
1、下载 Nginx，下载地址：https://nginx.org/en/download.html
```bash
[root@bogon src]# cd /usr/local/src/
[root@bogon src]# wget http://nginx.org/download/nginx-1.6.2.tar.gz
```

 2、解压安装包
```bash
[root@bogon src]# tar zxvf nginx-1.6.2.tar.gz
```

3、进入安装包目录
```bash
[root@bogon src]# cd nginx-1.6.2
```

4、编译安装
```bash
[root@bogon nginx-1.6.2]# ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35
[root@bogon nginx-1.6.2]# make
[root@bogon nginx-1.6.2]# make install
```

5、查看nginx版本
```bash
[root@bogon nginx-1.6.2]# /usr/local/webserver/nginx/sbin/nginx -v
```

到此，nginx安装完成。

运行nginx提示未找到命令解决办法:
我们输入的命令都是系统先去/usr/bin目录下去寻找  这个目录类似于我们windows系统中的环境变量  如果在这个目录下找不到命令 就会提示command not found（未找到命令）。
将文件链接到usr/bin路径下,使用命令
ln -s 文件路径  环境变量路径
```bash
ln -s /usr/local/webserver/nginx/sbin/nginx  /usr/bin
```

## Nginx 命令
```bash
/usr/local/webserver/nginx/sbin/nginx                       # 启动 Nginx
/usr/local/webserver/nginx/sbin/nginx -s reload             # 重新载入配置文件
/usr/local/webserver/nginx/sbin/nginx -s reopen             # 重启 Nginx
/usr/local/webserver/nginx/sbin/nginx -s stop               # 停止 Nginx
```