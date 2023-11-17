# 错误
## 报错字符串长度过长，而实际长度没超过
修改数据库编码
```sql
alter database db_name character set utf8;
```

## 错误1251
Client does not support authentication protocol requested by server

mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password
### powershell或者cmd执行
1. 登录Mysql服务端：
```bash
mysql -u root -p
```
回车后输入密码再按回车登录

2. 修改加密规则
```bash
mysql> alter user 'root'@'localhost' identified with mysql_native_password by '你自己的密码';
# 刷新权限
mysql> flush privileges;
```
### MySQL Workbench执行
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你自己的密码';
flush privileges;
```