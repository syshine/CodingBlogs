# MySQL设置
## 数据库存放位置
1. 先停止MySQL服务，然后在my.ini文件里修改(mysql8.0在C:\ProgramData\MySQL\MySQL Server 8.0)
```ini
# Path to the database root 修改数据存放位置
# datadir=C:/ProgramData/MySQL/MySQL Server 8.0\Data
datadir=D:\mysql\Data

# 上传文件夹
secure-file-priv="D:\mysql\Uploads"
```
2. 把MySQL Server 8.0里的Data和Uploads文件夹拷贝到D:\mysql文件夹里，稳妥起见不要用剪切，如果以后出现什么问题，还可以改回来。
3. 启动MySQL服务

