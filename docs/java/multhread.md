# 多线程
## 简单使用
```java
//匿名内部类创建多线程
new Thread(){
  @Override
  public void run() {
    System.out.println(Thread.currentThread().getName()+"创建新线程1");
  }
}.start();

//使用Lambda表达式，实现多线程
new Thread(()-> {
  System.out.println(Thread.currentThread().getName()+"创建新线程2");
}).start();

//优化Lambda
new Thread(()-> System.out.println(Thread.currentThread().getName()+"创建新线程3")).start();
```
## 标题2.2
### 标题2.2.3.1
### 标题2.2.3.2
### 标题2.2.3.3
## 标题2.3
### 标题2.3.3.1
### 标题2.3.3.2