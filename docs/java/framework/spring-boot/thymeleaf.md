# Thymeleaf
Thymeleaf is a modern server-side Java template engine for both web and standalone environments.
译过来就是：Thymeleaf是适用于Web和独立环境的现代服务器端Java模板引擎
[官网](www.thymeleaf.org)

使用Thymeleaf可以在Controller和html之间`传递数据`

## 使用
pom.xml添加依赖
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

application.yml配置
```yml
spring:
  thymeleaf:
    # 禁用页面缓存
    cache: false
    # 页面编码
    # encoding: UTF-8
    # 模板引擎目录，默认模板引擎文件是放在templates目录
    # prefix: classpath:/templates/
```

Controller
```java
@Controller
public class HelloController {
  @RequestMapping("/hello")
  public String hello(ModelMap map) {
    // 加入一个属性，用来在模板中读取
    map.addAttribute("msg", "hello from controller");
    return "hello";
  }
}
```

`.\src\main\resources\templates\hello.html`
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
  <title>欢迎</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
</head>
<body>
  <h1 th:text="${msg}">Hello World</h1>
</body>
</html>
```