# 类型转换
### String和int互转
```java
int a = Integer.parseInt("123")
String str = String.valueOf(321)
```

### String转Calendar
```java
String date = "2000-01-02 03:04:05"
SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
Date lastUpdateTime = sdf.parse(date);
Calendar calendar = Calendar.getInstance();
calendar.setTime(lastUpdateTime);
```

### Calendar转String
```java
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String strTime = sdf.format(calendar.getTime());
```

## 数组和列表
### 数组转列表
```java
List<int> list = Arrays.asList([1,2,3]);
```