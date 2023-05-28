# 分页
## 常规
```sql
SELECT * FROM table_name LIMIT 20 OFFSET 50
```
LIMIT和OFFSET的具体含义和用法，
- LIMIT X表示：读取X条数据。
- LIMIT X, Y表示：跳过X条数据，读取Y条数据。
- LIMIT Y OFFSET X表示：跳过X条数据，读取Y条数据。

当数据库里的数据量超过服务器内存能够存储的能力，并且需要对所有数据进行分页，问题就会出现，为了实现分页，每次收到分页请求时，数据库都需要进行低效的全表遍历。

## 覆盖索引优化
```sql
SELECT * FROM (SELECT id FROM table_name LIMIT 3400000,20) a
LEFT JOIN table_name b ON a.id = b.id;

#或者是

SELECT * FROM table_name a
INNER JOIN (SELECT id FROM table_name LIMIT 3400000,20) b USING (id);
```

因此，针对LIMIT和OFFSET的分页，
- 数据量大的时候不能使用OFFSET/LIMIT来进行分页，因为OFFSET越大，查询时间越久。
- 当然不能说所有的分页都不可以，如果你的数据就那么几千、几万条，那就很无所谓，随便使用。
- 如果我们的表没有主键，例如是具有多对多关系的表，那么就使用传统的OFFSET/LIMIT方式。
- 这种方法适用于要求ID为数值类型，并且查出的数据ID连续的场景且不能有其他字段的排序。