# Spring Cloud Config
Spring Cloud Config是一个分布式配置管理系统，它提供了一个中心化的配置服务器来管理应用程序的配置信息。它允许开发人员将应用程序的配置信息存储在一个集中的位置，并将这些配置信息分发给多个应用程序实例。Spring Cloud Config支持多种后端存储，包括Git、SVN、本地文件系统等。它还提供了一组REST API，可以用于动态获取配置信息，以便应用程序能够及时更新自己的配置。通过使用Spring Cloud Config，开发人员可以轻松地管理和更新应用程序的配置信息，从而提高应用程序的可维护性和可扩展性。
## 示例
新建一个Spring Boot项目Config服务端，客户端以eureka server(eureka-client,gateway也需要修改)举例
### Spring Cloud Config服务端
#### Maven依赖
pom.xml
```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

#### 配置文件
application.yml
```yml
server:
  port: 6001
spring:
  profiles:
    active: native
```
将eureka-server项目的application.yml拷贝到./resources/config/里，并重命名为eureka-server.yml (文件名跟文件里的spring.application.name保持一致)


#### 代码
```java
@SpringBootApplication
@EnableConfigServer
public class DemoEurekaConfigApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemoEurekaConfigApplication.class, args);
	}
}
```

### Spring Cloud Config客户端
以下为eureka-server项目：
#### Maven依赖
pom.xml
```xml
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
```

#### 配置文件
然后application.yml的内容修改为：
```yml
spring:
  config:
    import: "optional:configserver:http://config-service:6001"
    activate:
      on-profile: docker
---
spring:
  application:
    name: eureka-server
  config:
    import: "optional:configserver:http://localhost:6001"
```
项目启动时会从http://localhost:6001/ 拉取eureka-server.yml导入配置