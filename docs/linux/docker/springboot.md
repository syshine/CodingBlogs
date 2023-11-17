


## 实例

### Dockerfile制作jdk17镜像(Centos7)
[参考网页](https://blog.csdn.net/liu20121787/article/details/129698907)
1. 创建目录并下载jdk17
```bash
sudo mkdir -p /usr/local/dockerjdk17
cd /usr/local/dockerjdk17
sudo wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.tar.gz
```

2. 创建 Dockerfile 文件
vi Dockerfile （内容如下：）
```dockerfile
FROM centos:7
LABEL org.opencontainers.image.authors="syshine"
WORKDIR /usr/local/java
ADD jdk-17_linux-x64_bin.tar.gz /usr/local/java/
ENV JAVA_HOME=/usr/local/java/jdk-17.0.8
# ENV JAVA_HOME=/usr/java/jdk-17
ENV CLASSPATH=.:$JAVA_HOME/lib/jrt-fs.jar
ENV PATH=$PATH:$JAVA_HOME/bin
```

3. 构建镜像(注意后面有点，表示当前目录)
```bash
sudo docker build -t='jdk17' .
```

4. 创建容器
```bash
sudo docker run -di --name jdk17 -d jdk17
```

5. 进入容器
```bash
sudo docker exec -it 容器ID /bin/bash
```

6. 查看版本 
```bash
java -version
```

### Docker 快速部署Springboot项目
[参考网页](https://blog.csdn.net/BThinker/article/details/125515096)

1. 项目准备

2. 编写Dockerfile文件
文件中jdk17是上一步制作的jdk17镜像名称
```dockerfile
# Docker image for springboot file run
# VERSION 0.0.1
# Author: 
# 基础镜像使用java
FROM jdk17
# 作者
LABEL org.opencontainers.image.authors="syshine"
# VOLUME 指定了临时文件目录为/tmp。
# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
VOLUME /tmp 
# 将jar包添加到容器中并更名为xx.jar
ADD docker-0.0.1-SNAPSHOT.jar /demo-docker.jar 
# 改这个文件的访问时间和修改时间为当前时间
RUN bash -c 'touch /demo-docker.jar'
# 用于运行程序，类似于 CMD 指令，但其不会被 docker run 的命令行参数指定的指令所覆盖，而且这些命令行参数会被当作参数送给 ENTRYPOINT 指令指定的程序。
ENTRYPOINT ["java", "-jar", "/demo-docker.jar"]
```

将jar包和Dockerfile文件放在上传到同一空目录下

3. 执行镜像打包
进入第2步的目录执行
```bash
sudo docker build -f ./Dockerfile.dockerfile . -t demo-docker:v1.0
```

查看镜像
```bash
sudo docker images
```

4. 启动容器
```bash
# -d参数是让容器后台运行
# 16913为部署后实际代理端口,6913为程序的端口
sudo docker run -d -p 16913:6913 --name demo-docker demo-docker:v1.0 
```

5. 测试结果
访问网址： localhost:16913/docker/hello

6. 动态查看日志
```bash
sudo docker logs -f --tail=100 demo-docker
```

