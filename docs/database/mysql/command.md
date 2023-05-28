# 命令
## 表操作
操作之前应连接某个数据库(详见库操作的第4条)

### 1. 建表
命令：create table <表名> ( <字段名1> <类型1> [,..<字段名n> <类型n>]);

```sql
create table MyClass(
id int(4) not null primary key auto_increment,
name char(20) not null,
sex int(4) not null default '0',
degree double(16,2));
```
### 2. 获取表结构
命令： desc 表名，或者show columns from 表名

```sql
desc MyClass;
--或者
show columns from MyClass;
```
### 3. 删除表
命令：drop table <表名>
例如：删除表名为 MyClass 的表

```sql
drop table MyClass;
```
### 4. 插入数据
命令：insert into <表名> [( <字段名1>[,..<字段名n > ])] values ( 值1 )[, ( 值n )]
例如，往表 MyClass中插入二条记录, 这二条记录表示：编号为1的名为Tom的成绩为96.45, 编号为2 的名为Joan 的成绩为82.99， 编号为3 的名为Wang 的成绩为96.5.

```sql
-- 自动插入id，指定字段名(推荐)
insert into MyClass(name, sex, degree) values('Tom', 1, 96.45),('Joan', 2,82.99), ('Wang', 2, 96.59);
-- 指定id，全字段(不推荐)
insert into MyClass values(1,'Tom', 1,96.45),(2,'Joan', 2,82.99), (3,'Wang', 2, 96.59);
```
### 5. 查询表中的数据
#### 1. 查询所有行
命令： select <字段1，字段2，...> from < 表名 > where < 表达式 >
例如：查看表 MyClass 中所有数据

```sql
select * from MyClass;
```
#### 2. 查询前几行数据
例如：查看表 MyClass 中前2行数据

```sql
select * from MyClass order by id limit 0,2;
```
### 6. 删除表中数据
命令：delete from 表名 where 表达式
例如：删除表 MyClass中编号为1 的记录

```sql
delete from MyClass where id=1;
```
### 7. 修改表中数据
update 表名 set 字段=新值,… where 条件

```sql
update MyClass set name='Mary' where id=1;
```
### 8. 在表中增加字段：
命令：alter table 表名 add字段 类型 其他;
例如：在表MyClass中添加了一个字段passtest，类型为int(4)，默认值为0

```sql
alter table MyClass add passtest int(4) default '0'
```
### 9. 更改表名
命令：rename table 原表名 to 新表名;
例如：在表MyClass名字更改为YouClass

```sql
mysql> rename table MyClass to YouClass;
```
### 10. 清空表
```sql
delete from MyClass;
```
### 11. 索引
```sql
-- 给字段加索引
alter table tablename add index 索引名 (字段名1[，字段名2 …]);
alter table tablename add index emp_name (name);
-- 加主关键字的索引
alter table tablename add primary key(id);
-- 加唯一限制条件的索引
alter table tablename add unique emp_name2(cardnumber);
-- 删除某个索引
alter table tablename drop index emp_name;
```

## 库操作
### 1. 创建数据库
命令：create database <数据库名>
例如：建立一个名为dbtest的数据库
```sql
create database dbtest;
```

### 2. 删除数据库
命令：drop database <数据库名>
例如：删除名为 dbtest的数据库
```sql
drop database dbtest;
```

### 3. 显示所有的数据库
命令：show databases （注意：最后有个s）
```sql
show databases;
```

### 4. 连接数据库
命令： use <数据库名>
例如：如果dbtest数据库存在，尝试存取它：
```sql
use dbtest;
```

### 5. 当前选择（连接）的数据库
```sql
mysql> select database();
```

### 6. 当前数据库包含的表信息
```sql
--（注意：最后有个s）
show tables;
```

## 系统
### 查看MySQL版本
select version()
### 标题2.1.3.2