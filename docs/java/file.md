# 文件和文件夹

## 文件
```java
// 新建文件
File newFile = new File("pathname");

// 文件是否存在
file.exists()) {
  // 删除文件
  file.delete();
}
```

### MultipartFile保存
```java
MultipartFile multipartfile; // 这里仅声明，实际应该有值
File newFile = new File("pathname");
multipartfile.transferTo(newFile);
```

## 文件夹
### 新建文件夹
```java
File folder = new File("pathname");
folder.mkdir();
```

### 判断文件夹是否存在
```java
File folder = new File("pathname");
if (folder.exists()) {
  System.out.println("文件夹存在");
}
```