# Spring Cloud Gateway
代替zuul网关
## Gateway实例
### Maven依赖
pom.xml
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

### 配置文件
application.yml
```yml
server:
  port: 6003
spring:
  application:
    name: gateway
  profiles:
    active: prod
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true # 开启从注册中心动态创建路由的功能，利用微服务名进行路由"

      routes:
        - id: service-order
          #uri: http://localhost:8761  #匹配后提供服务的路由地址 没有进行负载均衡
          uri: lb://service-order #匹配后提供服务的路由地址-------这里用的动态路由格式统一为 lb://注册进eureka服务中心的名字
          predicates:
            - Path=/order/** #断言，路径相匹配的进行路由--------断言也就是匹配方式，当识别到/servero1/**时就会跳转上面的uri
          filters:   #这个必须写
            - StripPrefix=1  #  请求/name/bar/foo，去除掉前面两个前缀之后，最后转发到目标服务的路径为/foo-----这里写的是只去掉一个，多了自然会导致路径错误，不同的访问url配置也不同
        - id: service-points
          uri: lb://service-points
          predicates:
            - Path=/points/**
          filters:
            - StripPrefix=1

eureka:
  instance:
    hostname: cloud-gateway-service
  client: # 服务提供者provider注册进eureka服务列表内
    service-url:
      register-with-eureka: true
      fetch-registry: true
#      defaultZone: http://localhost:6002/eureka/
      defaultZone: http://localhost:8761/eureka/

```

### 代码
```java
@SpringBootApplication
@EnableDiscoveryClient//代表自己是一个服务提供方
public class DemoEurekaGatewayApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoEurekaGatewayApplication.class, args);
	}
}
```