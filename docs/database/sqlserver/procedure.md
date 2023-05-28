# 存储过程
## 游标
### 游标语法
游标的使用过程：声明游标、打开游标、遍历游标、关闭游标

- 声明游标：DECLARE 游标名称 CURSOR FOR 查询语句;
- 打开游标：open 游标名称;
- 遍历游标：fetch 游标名称 into 变量列表;

  取出当前行的结果，将结果放在对应的变量中，并将游标指针指向下一行的数据。

  当调用 fetch 的时候，会获取当前行的数据，如果当前行无数据，会引发 mysql 内部的 NOT FOUND 错误。

- 关闭游标：close 游标名称; 游标使用完毕之后一定要关闭。

例子：
```sql
DECLARE @name nvarchar (255);
--声明游标
--select中的参数，必须要和游标取出来的变量名相同
DECLARE mycursor CURSOR
FOR select user_name from user

--打开游标
OPEN mycursor ;
--从游标中取出数据，赋值到刚才定义的变量中
FETCH NEXT FROM mycursor INTO @name;

--事务--当 xact_abort 选项为 on 时，sql server 在遇到错误时会终止执行并 rollback 整个事务。
set xact_abort on
begin transaction

--判断游标的状态
--0 fetch语句成功
--1 fetch语句失败或者此行不在结果集中
--2 提取的行不存在
WHILE (@@fetch_status = 0 && @@error <> 0)
BEGIN
  print('姓名：' + @name);

  if @@error = 0 
  begin 
    FETCH NEXT FROM mycursor INTO @name ;
  end
END ;

if(@@error <> 0)
begin
  rollback tran
end
else
begin
  commit transaction
end

--关闭游标
CLOSE mycursor ;
--释放游标
DEALLOCATE mycursor ;
```
### 标题2.1.3.1
### 标题2.1.3.2
## 标题2.2
### 标题2.2.3.1
### 标题2.2.3.2
### 标题2.2.3.3
## 标题2.3
### 标题2.3.3.1
### 标题2.3.3.2