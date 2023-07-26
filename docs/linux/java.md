## Linux安装JDK
下载RPM包然后进入该文件夹安装
[参考网址](https://blog.csdn.net/king_kgh/article/details/76893339)
### 下载
下载x64 RPM Package: [JDK17下载地址](https://www.oracle.com/java/technologies/downloads/#jdk17-linux)

### 安装
进入jdk-17_linux-x64_bin.rpm所在文件夹安装，例如在`/mnt/hgfs/installer`
```bash
# 进入RPM包所在文件夹
cd /mnt/hgfs/installer

# 安装
rpm -ivh jdk-17_linux-x64_bin.rpm
```

## Linux运行jar
[参考网址](https://blog.csdn.net/li1325169021/article/details/115362238)

1. 将jar包并上传到linux环境的/usr/local/jar/目录下

2. 进入/usr/local/jar/目录
```bash
cd /usr/local/jar/
```

3. 启动jar包
```bash
# 启动常规环境
java -jar ./springboot-0.0.1-SNAPSHOT.jar

# 启动测试环境
# java -jar ./springboot-0.0.1-SNAPSHOT.jar --spring.profiles.active=test
```

4. 停止jar包
关闭终端即可，或者进行下面的操作<p />
查询springboot到进程号,再通过kill -s 9 ${pid} 进行杀死再重新启动
```bash
[root@CentOS-1 jar]# ps -ef | grep springboot-0.0.1-SNAPSHOT
root     2990078 2988309 10 10:08 pts/0    00:00:51 java -jar springboot-0.0.1-SNAPSHOT.jar
root     2990522 2988309  0 10:16 pts/0    00:00:00 grep --color=auto springboot-0.0.1-SNAPSHOT
[root@CentOS-1 jar]# kill -s 9 2990078
```