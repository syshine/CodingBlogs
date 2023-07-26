# Spring Cloud Netflix Eureka Client
## 简介
负责将这个服务的信息注册到Eureka Server中

## 示例
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
```
### 配置文件
application.yml内容
```yml
server:
  port: 6071 # 服务提供方
 
# 指定当前eureka客户端的注册地址,
eureka:
  client:
    service-url:
      defaultZone: http://${eureka.instance.hostname}:8761/eureka
#      defaultZone: http://${eureka.instance.ip-address}:8761/eureka
  instance:
    hostname: localhost
#    prefer-ip-address: true #将自己的ip地址注册到Eureka服务中
#    ip-address: 127.0.0.1   #ip地址
#    instance-id: ${spring.cloud.client.ip-address}:${server.port} # ip:port
 
#当前服务名称
spring:
#   profiles:
#     active: prod
  application:
    name: service-points
```

### 代码
启动类
```java
@SpringBootApplication
@EnableDiscoveryClient//代表自己是一个服务提供方
public class ServicePointsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicePointsApplication.class, args);
	}


	@Bean
	PointsRepository repository() {
		PointsRepository repository = new PointsRepository();
		repository.add(new Points(1L, 1, 1L, 11));
		repository.add(new Points(2L, 1, 2L, 12));
		repository.add(new Points(3L, 2, 3L, 13));
		repository.add(new Points(4L, 1, 4L, 14));
		repository.add(new Points(5L, 1, 5L, 15));
		return repository;
	}
}
```

实体类，省略get,set
```java
public class Points {
	private Long id;
	private int userId;
	private Long orderId;
	private int point;
	
	public Points() {
		
	}
	
	public Points(Long id, int userId, Long orderId2, int point) {
		super();
		this.id = id;
		this.userId = userId;
		this.orderId = orderId2;
		this.point = point;
	}
}
```

存储库
```java
public class PointsRepository {
	private List<Points> pointses = new ArrayList<>();
	
	public Points add(Points points) {
		points.setId((long) (pointses.size()+1));
		pointses.add(points);
		return points;
	}
	
	public Points findById(Long id) {
		return pointses.stream()
            .filter(a -> a.getId().equals(id))
            .findFirst()
            .orElseThrow();
	}
	
	public List<Points> findByUser(int userId) {
		return pointses.stream()
            .filter(a -> a.getUserId() == userId)
            .toList();
	}
	
	public List<Points> findAll() {
		return pointses;
	}
}
```

控制器
```java
@RestController
public class PointsController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PointsController.class);
	
	@Autowired
	PointsRepository repository;


	@PostMapping("/add")
	public Long add(@RequestParam("userId") int userId, @RequestParam("orderId") Long orderId, @RequestParam("point") int point) {
		LOGGER.info("userId: {}, orderId: {}, point: {}", userId, orderId, point);
		Points points = new Points(null, userId, orderId, point);
		return repository.add(points).getId();
	}
	
	@GetMapping("/{id}")
	public Points findById(@PathVariable("id") Long id) {
		LOGGER.info("Points find: id={}", id);
		return repository.findById(id);
	}
	
	@GetMapping("/user/{id}")
	public List<Points> findByUser(@PathVariable("id") int userId) {
		LOGGER.info("Points find: id={}", userId);
		return repository.findByUser(userId);
	}
	
	@GetMapping("/")
	public List<Points> findAll() {
		LOGGER.info("Points find");
		return repository.findAll();
	}

}
```


