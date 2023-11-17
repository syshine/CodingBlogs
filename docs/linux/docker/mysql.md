### Docker 安装mysql 和导入数据库
#### 安装mysql
1. 查看可用的 MySQL 版本
[MySQL 镜像库地址](https://hub.docker.com/_/mysql?tab=tags)

此外，我们还可以用命令来查看可用版本：
```bash
sudo docker search mysql
```

2. 拉取 MySQL 镜像
这里我们拉取官方的最新版本的镜像：
```bash
sudo docker pull mysql:latest
```

3. 查看本地镜像
使用以下命令来查看是否已安装了 mysql：
```bash
sudo docker images
```

4. 运行容器
安装完成后，我们可以使用以下命令来运行 mysql 容器：
```bash
$ sudo docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```
参数说明：

- -p 3306:3306 ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 宿主机ip:3306 访问到 MySQL 的服务。
- MYSQL_ROOT_PASSWORD=123456：设置 MySQL 服务 root 用户的密码。

5. 安装成功
通过命令查看是否安装成功：
```bash
sudo docker ps
```

6. 进入容器
```bash
sudo docker exec -it mysql-test bash
```

7. 登录mysql
```bash
mysql -u root -p
```

#### 导入数据库
[参考网页](https://blog.csdn.net/lhjllff12345/article/details/131541339?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-131541339-blog-86478766.235%5Ev38%5Epc_relevant_sort_base1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-131541339-blog-86478766.235%5Ev38%5Epc_relevant_sort_base1&utm_relevant_index=3)
```bash
# 将文件传入docker容器
# docker cp 本地路径  容器名称:容器路径   注意，容器里面的路径要事先建好
# 如果要把容器文件复制出来，也是docker cp  只要把本地路径放到后面去即可 下面的mysql-test是容器名称
sudo docker cp /mnt/hgfs/Share/javatest.sql mysql-test:/root/
# 然后进入docker容器内
sudo docker exec -it mysql-test /bin/bash


# 使用mysql导入数据
## 登录mysql
mysql -uroot -p
## 创建数据库
mysql> create database javatest;
## 连接数据库
mysql> use javatest
## 导入数据
mysql> source /root/javatest.sql

# # 或者系统行命令导入数据
# ## 创建数据库
# mysqladmin -uroot -p create javatest
# ## 导入数据库
# mysql -uroot -p javatest< /root/javatest.sql
# # 登录mysql
# mysql -uroot -p

# 查询
mysql> select * from javatest.test
```bash