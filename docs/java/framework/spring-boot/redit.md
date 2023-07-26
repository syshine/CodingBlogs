# Redis
[下载地址](https://github.com/tporadowski/redis/releases)

## SpringBoot - Redis示例
### Maven依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
		
<!--连接池-->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
</dependency>

<!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.76</version>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
```

### 配置文件
```yml
spring:
  data:
    redis:
      host: localhost
      port: 6379
      password: your_password # 没有密码则留空
      database: 0
      lettuce:
        pool:
          max-idle: 16
          max-active: 32
          min-idle: 8
  devtools:
    restart:
      enabled: true
```

### 代码
```java
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;

import jakarta.annotation.Resource;

@RestController
@RequestMapping("redis")
public class RedisController {
    // 这里用@Autowired运行会报错, 注入时指定了K、V类型
    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @GetMapping("/save")
    public String save(String key, String value){
        redisTemplate.opsForValue().set(key, value);
        return "保存成功！";
    }

    @GetMapping("/get/{key}")
    public String get(@PathVariable(name = "key") String key){
    	Object val = redisTemplate.opsForValue().get(key);
    	return JSONObject.toJSONString(val);
    }
}
```

## Redis设置
### 关于密码
通过命令行`CONFIG set requirepass your_password`设置了密码，这种设置方式是临时的，当服务器重启后，密码会失效。

设置永久密码:
redis文件夹配置文件redis.windows.conf中有一行是这样的
`# requirepass foobared`  
去掉注释，并且把foobared改为自己的密码，注意要把requirepass前面的空格也去掉
如：`requirepass mypwd`

windows下正确的启动方式：
`redis-server.exe redis.windows.conf`

在指定了配置文件后，再启动就可以读取到设置的密码了。