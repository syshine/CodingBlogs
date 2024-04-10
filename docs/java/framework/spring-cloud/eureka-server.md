# Spring Cloud Netflix Eureka Server
服务注册中心
## Netflix Eureka Server实例
### Maven依赖
pom.xml
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

### 配置文件
application.yml
```yml
server:
  # 8761是默认端口
  port: 8761
spring:
  application:
    #指定应用名称
    name: eureka-server
  profiles:
    active: prod
eureka:
  server:
    enable-self-preservation: true
    # default is 0.85 we can set the value to 0.49
    renewalPercentThreshold: 0.49
  instance:
    preferIpAddress: true
    hostname: localhost	#${spring.cloud.client.ipAddress}
    instanceId: ${spring.cloud.client.ipAddress}:${server.port}
    # default is 30
    leaseRenewalIntervalInSeconds: 30
  client:
    registerWithEureka: false	#自身 不在向eureka注册
    fetchRegistry: false		#启动时禁用client的注册
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```

### 代码
启动类
```java
@SpringBootApplication
@EnableEurekaServer //当前使用eureka的server
public class DemoEurekaServerApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoEurekaServerApplication.class, args);
	}
}
```