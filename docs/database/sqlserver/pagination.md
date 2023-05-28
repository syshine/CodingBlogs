# 分页

## sql server 2012
```sql
-- 第21到30条数据
select * from table_name where id < 10 offset 20 rows fetch next 10 rows only

-- pageSize = 10, pageIndex = 1
select * from table_name where id < 10 offset ((pageIndex - 1) * pageSize) rows fetch next pageSize rows only
```

## sql server 2008
```sql
-- 第21到30条数据
SELECT * FROM( SELECT *, ROW_NUMBER() OVER(order by (select 0))RN FROM(
  select * from table_name
)TT)TP WHERE RN>20 AND RN<=30

-- pageSize = 10, pageIndex = 1, orderBy = "(select 0)"
SELECT * FROM( SELECT *, ROW_NUMBER() OVER(order by orderBy)RN FROM(
  select * from table_name
)TT)TP WHERE RN>pageSize * (pageIndex-1) AND RN<=pageSize * pageIndex
```