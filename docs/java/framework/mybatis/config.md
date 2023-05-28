# SpringMVC配置文件
## 文件路径
`.\src\main\resources\SqlMapConfig.xml`

## 文件内容
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
  <!--<properties resource="db.properties"></properties>-->
  <!-- properties不但可以配置属性文件，还可以配置一些属性名和属性值 -->

  <typeAliases>
    <!-- type:类型的路径 alias：别名 <typeAlias type="cn.itcast.mybatis.po.User" alias="user"/> -->

    <!-- 批量别名配置 指定包名，mybatis自动扫描po类，自动定义别名，别名就是类名（首字母大写小写都可以） -->
    <package name="cn.itcast.mybatis.po" />

  </typeAliases>

  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC" />
      <dataSource type="POOLED">

        <property name="driver" value="com.mysql.jdbc.Driver" />
        <!-- allowMultiQueries=true参数，允许批量操作 -->
        <property name="url" value="jdbc:mysql://localhost:3306/your_db—_name?allowMultiQueries=true&amp;useSSL=false" />
        <!-- <property name="url" value="jdbc:mysql://服务器地址:端口号/数据库名称?serverTimezone=GMT%2B8" /> -->
        <property name="username" value="root" />
        <property name="password" value="your_password" />
      </dataSource>
    </environment>
  </environments>

  <mappers>
    <!-- xml文件格式 -->
    <mapper resource="yourproject/dao/WangEditorSQL.xml" />
    <!-- Mapper注解格式 -->
    <mapper class="yourproject.dao.UserMapperDao"/>
  </mappers>

</configuration>
```

# SpringBoot配置
## 文件路径
`.\src\main\resources\application.yml`
## 文件内容
[详见内容](../spring-boot/mybatis)