# 数据库备份
如果命令提示符显示`mysqldump`不是内部或者外部的命令，请在环境变量里的`Path`里添加路径：`C:\Program Files\MySQL\MySQL Server 8.0\bin`（因具体安装路径和版本而定）
## 命令格式
`mysqldump [选项] 数据库名 [表名] > 脚本名`
或
`mysqldump [选项] --数据库名 [选项 表名] > 脚本名`
或
`mysqldump [选项] --all-databases [选项]  > 脚本名`

## 实例
备份所有数据库：
```bash
mysqldump -uroot -p --all-databases > D:\dbtest.sql
```

备份指定数据库：
```bash
mysqldump -uroot -p test > D:\dbtest.sql
```

备份指定数据库指定表(多个表以空格间隔)
```bash
mysqldump -uroot -p  mysql db event > D:\dbtest.sql
```
备份指定数据库排除某些表
```bash
mysqldump -uroot -p test --ignore-table=test.t1 --ignore-table=test.t2 > D:\dbtest.sql
```
### 注意！
Win10的PowerShell数据重定向文件编码为UTF16，使用--result-file=选项代替`>`指定导出文件目录，这样由 mysqldump 命令本身导出的文件就可以避开由于终端编码问题导致的乱码原因了
```bash
mysqldump -uroot -p test --ignore-table=test.t1 --ignore-table=test.t2 --result-file=D:\dbtest.sql
```


# 数据库还原
## 系统行命令
如果命令提示符显示`mysqladmin`不是内部或者外部的命令，请在环境变量里的`Path`里添加路径：`C:\Program Files\MySQL\MySQL Server 8.0\bin`（因具体安装路径和版本而定）
```bash
mysqladmin -uroot -p create dbtest
mysql -uroot -p dbtest< D:\dbtest.sql
# 注：在导入备份数据库前，db_name如果没有，是需要创建的； 而且与db_name.db中数据库名是一样的才可以导入。
```

## soure 方法
```
mysql > use dbtest
mysql > source D:\dbtest.sql
```