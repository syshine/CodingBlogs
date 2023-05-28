# 函数
[更多函数学习(runoob)](https://www.runoob.com/mysql/mysql-functions.html)
## 字符串函数
### LOCATE
语法：
`LOCATE(s1,s)`

说明：
从字符串 s 中获取 s1 的开始位置

例子:
```sql
-- 获取 st 在字符串 myteststring 中的位置：
SELECT LOCATE('st','myteststring');  -- 5

-- 返回字符串 abc 中 b 的位置：
SELECT LOCATE('b', 'abc') -- 2
```

### LEFT
语法：
`LEFT(s,n)`

说明：
返回字符串 s 的前 n 个字符

例子:
```sql
-- 返回字符串 runoob 中的前两个字符：
SELECT LEFT('runoob',2) -- ru
```

### MID
语法：
`MID(s,n,len)`

说明：
从字符串 s 的 n 位置截取长度为 len 的子字符串，同 SUBSTRING(s,n,len)

例子:
```sql
-- 从字符串 RUNOOB 中的第 2 个位置截取 3个 字符：
SELECT MID("RUNOOB", 2, 3) AS ExtractString; -- UNO
```

### RIGHT
语法：
`RIGHT(s,n)`

说明：
返回字符串 s 的后 n 个字符

例子:
```sql
-- 返回字符串 runoob 的后两个字符：
SELECT RIGHT('runoob',2) -- ob
```
## 数字函数
### CEIL(同CEILING)
语法：
`CEIL(x)`
`CEILING(x)`

说明：
返回大于或等于 x 的最小整数

例子:
```sql
SELECT CEIL(1.5); -- 2
SELECT CEIL(-1.5); -- -1
```

### FLOOR
语法：
`FLOOR(x)`

说明：
返回小于或等于 x 的最大整数

例子:
```sql
SELECT FLOOR(1.5); -- 1
SELECT FLOOR(-1.5); -- -2
```

### GREATEST
语法：
`GREATEST(expr1, expr2, expr3, ...)`

说明：
返回列表中的最大值

例子:
```sql
-- 返回以下数字列表中的最大值：
SELECT GREATEST(3, 12, 34, 8, 25); -- 34

-- 返回以下字符串列表中的最大值：
SELECT GREATEST("Google", "Runoob", "Apple");   -- Runoob
```

### LEAST
语法：
`LEAST(expr1, expr2, expr3, ...)`

说明：
返回列表中的最小值

例子:
```sql
-- 返回以下数字列表中的最小值：
SELECT LEAST(3, 12, 34, 8, 25); -- 3

-- 返回以下字符串列表中的最小值：
SELECT LEAST("Google", "Runoob", "Apple");   -- Apple
```

### RAND
语法：
`RAND()`

说明：
返回 0 到 1 的随机数

例子:
```sql
SELECT RAND() --0.93099315644334
```

### ROUND
语法：
`ROUND(x [,y])`

说明：
返回离 x 最近的整数，可选参数 y 表示要四舍五入的小数位数，如果省略，则返回整数。

例子:
```sql
SELECT ROUND(1.23456); -- 1
SELECT ROUND(345.156, 2); -- 345.16

```
## 高级函数

### IF
语法：
`IF(expr,v1,v2)`

说明：
如果表达式 expr 成立，返回结果 v1；否则，返回结果 v2。

例子:
```sql
select if(true, 1, 0); -- 1
select if(false, 1, 0);	-- 0
```

### IFNULL
语法：
`IFNULL(expression, alt_value)`

说明：
如果第一个参数的表达式 expression 为 NULL，则返回第二个参数的备用值。

例子:
```sql
select ifnull(1, 2); -- 1
select ifnull(null, 0); -- 0
```

### NULLIF
语法：
`NULLIF(expr1, expr2)`

说明：
比较两个字符串，如果字符串 expr1 与 expr2 相等 返回 NULL，否则返回 expr1

例子:
```sql
SELECT NULLIF(25, 25); -- NULL
SELECT NULLIF(25, '25'); -- NULL
SELECT NULLIF(25, 23); -- 25
```