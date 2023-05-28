# SpringMVC配置文件

## ApplicationContext.xml
Java程序配置文件
文件路径：
`.\src\main\java\ApplicationContext.xml`
文件内容：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:context="http://www.springframework.org/schema/context"
  xmlns:tx="http://www.springframework.org/schema/tx"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xmlns:mvc="http://www.springframework.org/schema/mvc"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context.xsd
  http://www.springframework.org/schema/tx
  http://www.springframework.org/schema/tx/spring-tx.xsd
  http://www.springframework.org/schema/aop
  http://www.springframework.org/schema/aop/spring-aop.xsd
  http://www.springframework.org/schema/mvc
  http://www.springframework.org/schema/mvc/spring-mvc.xsd">
 
  <!-- more bean definitions for services go here -->
  <!-- 配置自动扫描的包 -->
  <!-- 我们希望 Spring 只不扫描带有 @Controller 注解标注的类，而扫描其他注解标注的类 -->
  <context:component-scan base-package="cn.yourpoject">
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
  </context:component-scan>

  <!-- handlerMapping -->
  <!-- RequestMappingHandlerMapping @RequestMapping -->
  <mvc:annotation-driven />

  <!-- 开启注解扫描 -->
  <aop:aspectj-autoproxy proxy-target-class="true"/>
</beans>
```

## spring-servlet.xml
Spring MVC 配置文件
文件路径：
`.\src\main\webapp\WEB-INF\spring-servlet.xml`
其中文件名`spring`-servlet中的spring对应
`.\src\main\webapp\WEB-INF\web.xml`这个文件中的`<servlet-name>`内容
```xml
<web-app>
  <servlet>
    <!-- 属性随意，只要上下一致即可(对应WEB-INF里的[servlet-name]-servlet.xml) -->
    <servlet-name>spring</servlet-name>
  </servlet>

  <servlet-mapping>
		<servlet-name>spring</servlet-name> <!-- 与上方一致 -->
		<url-pattern>/</url-pattern> <!-- 拦截所有请求 -->
	</servlet-mapping>
</web-app>
```

文件内容：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
  xmlns:tx="http://www.springframework.org/schema/tx"
  xmlns:mvc="http://www.springframework.org/schema/mvc"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xsi:schemaLocation="http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context.xsd
  http://www.springframework.org/schema/tx
  http://www.springframework.org/schema/tx/spring-tx.xsd
  http://www.springframework.org/schema/mvc
  http://www.springframework.org/schema/mvc/spring-mvc.xsd
  http://www.springframework.org/schema/aop
  http://www.springframework.org/schema/aop/spring-aop.xsd">

  <!-- 配置扫描的包（此配置会自动扫描cn.yourpoject下的所有包中的含有注解的类（如@Controller, @Service等）） -->
  <!-- <context:component-scan base-package="cn.yourpoject.*" /> -->
  <!-- SpringMVC 主要就是来管理网站的跳转逻辑，所以在配置扫描的包时，使用 use-default-filters 属性，并设置为 false，即不使用默认的 Filter 进行扫描 -->
  <context:component-scan base-package="cn.yourpoject.controller" use-default-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
  </context:component-scan>
  <context:component-scan base-package="cn.yourpoject.service"/>

  <!-- 注册HandlerMapper、HandlerAdapter两个映射类 ，负责将请求映射到类和方法中-->
  <mvc:annotation-driven />
  <mvc:resources location="/resources/" mapping="/resources/**" />

  <!-- 访问静态资源 ，因为配置的spring是拦截所有请求，需如下配置来让静态资源通过（如js, css文件等） -->
  <mvc:default-servlet-handler />
  
  <!-- 拦截器 -->
  <mvc:interceptors>
    <mvc:interceptor>
      <!-- 那些请求需要拦截 -->
      <mvc:mapping path="/**"/>

      <!-- 放过哪些请求 -->
      <mvc:exclude-mapping path="/user/login"/>
      <mvc:exclude-mapping path="/user/logout"/>
      <mvc:exclude-mapping path="/demo/**"/>
      
      <!-- 解决SpringMVC拦截器拦截静态资源文件问题 -->
      <!-- <mvc:exclude-mapping path="/upload/**"/> -->
      <mvc:exclude-mapping path="/**/*.js"/>
      <mvc:exclude-mapping path="/**/*.css"/>
      <mvc:exclude-mapping path="/**/*.html"/>
      <!-- <mvc:exclude-mapping path="/**/*.mp4"/> -->
      
      <!-- 接口调用的登录验证 -->
      <bean class="cn.yourpoject.interceptor.CheckLoginInterceptor"/>
    </mvc:interceptor>
  </mvc:interceptors>

  <!-- 开启注解扫描 -->
  <aop:aspectj-autoproxy proxy-target-class="true"/>

  <!-- 视图解析器 ：是将Controller类返回的视图名加上配置的前后缀进行展示-->
  <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INF/view/"></property>
    <property name="suffix" value=".jsp"></property>
  </bean>

</beans>
```