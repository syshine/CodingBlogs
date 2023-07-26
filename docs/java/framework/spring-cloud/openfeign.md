# Spring Cloud OpenFeign
## 简介
Spring Cloud OpenFeign是一种基于Spring Cloud的声明式REST客户端，它简化了与HTTP服务交互的过程。它将REST客户端的定义转化为Java接口，并且可以通过注解的方式来声明请求参数、请求方式、请求头等信息，从而使得客户端的使用更加方便和简洁。同时，它还提供了负载均衡和服务发现等功能，可以与Eureka、Consul等注册中心集成使用。Spring Cloud OpenFeign能够提高应用程序的可靠性、可扩展性和可维护性，是构建微服务架构的重要工具之一。
[中文文档](https://springdoc.cn/spring-cloud-openfeign/)

实现服务间调用，如服务A(消费者)调用服务B(提供者)，则需要在服务A使用OpenFeign

## 示例
本例中service-order是服务A，service-points是服务B
### Maven依赖
pom.xml添加依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-openfeign-core</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
</dependency>

<!-- circuit break依赖 -->
<!-- <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency> -->
```
### 配置文件
application.yml内容
```yml
server:
  port: 6031 # 服务提供方
 
# 指定当前eureka客户端的注册地址,
eureka:
  client:
    service-url:
      defaultZone: http://${eureka.instance.hostname}:8761/eureka
  instance:
    hostname: localhost

#当前服务名称
spring:
  application:
    name: service-order
# ========== 下面是circuit break代码 ==========
#   cloud:
#     openfeign:
#       circuitbreaker:
#         enabled: true
#         alphanumeric-ids:
#           enabled: true

# resilience4j:
#   circuitbreaker:
#     instances:
#       PointsClienttestCircuitBreaker:
#         minimumNumberOfCalls: 69
#   timelimiter:
#     instances:
#       PointsClienttestCircuitBreaker:
#         timeoutDuration: 10s
```

在springcloud 2020.0.2版本中把bootstrap的相关依赖从spring-cloud-starter-config中移除了，导致报错：No spring.config.import property has been defined
解决方法：
1. 引入依赖spring-cloud-starter-bootstrap
2. 新建一个空的./resources/bootstrap.yml文件

### 代码
启动类
```java
@SpringBootApplication
@EnableDiscoveryClient//代表自己是一个服务提供方
@EnableFeignClients
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}
```

FeignClient 服务api转接口调用
```java
@FeignClient(name = "service-points") // 不使用circuit breaker
//@FeignClient(name = "service-points", fallback = PointsFallback.class) // 使用circuit breaker
public interface PointsClient {
    // 假设service-points的地址是localhost:8000,相当于用post调用localhost:8000/add
    @PostMapping("/add")
    Long add(@RequestParam("userId") int userId, @RequestParam("orderId") Long orderId, @RequestParam("point") int point);

    @GetMapping("/test/breaker")
    String testCircuitBreaker();
}

// circuit break测试代码
// @Component
// class PointsFallback implements PointsClient {
// 	@Override
// 	public Long add(int userId, Long orderId, int point) {
// 		return -2L;
// 	}

// 	@Override
// 	public String testCircuitBreaker() {
// 		// TODO 自动生成的方法存根
// 		return "测试Circuit Breaker熔断返回";
// 	}
// }
```

控制器
```java
@RestController
public class OrderController {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrderController.class);
	
	PointsClient pointsClient;

	public OrderController(IPointsClient pointsClient) {
		this.pointsClient = pointsClient;
	}
	
	@GetMapping("/add")
	public Long add() {
		int userId = 1;
		Long orderId = 2L;
		int point = 100;
        // 调用服务B的api
		Long pointId = pointsClient.add(userId, orderId, point);
		LOGGER.info("pointId: {}", pointId);
        return pointId;
	}
	
    // circuit break测试代码
	// @GetMapping("/test/breaker")
	// public String testCircuitBreaker() {
	// 	String msg = pointsClient.testCircuitBreaker();
	// 	LOGGER.info("Circuit Breaker: {}", msg);
	// 	return msg;
	// }
}
```
# Spring Cloud Circuit Breaker(resilience4j)
断路器，使用示例为将上面注释的代码取消注释


