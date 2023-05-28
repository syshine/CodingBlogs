# 连接字符串
`jdbc:mysql://服务器地址:端口号/数据库名称?useSSL=false`
## SqlMapXml例子
```xml {7}
<environments default="development">
  <environment id="development">
    <transactionManager type="JDBC" />
    <dataSource type="POOLED">
      <property name="driver" value="com.mysql.jdbc.Driver" />
      <!-- allowMultiQueries=true参数，允许批量操作 -->
      <property name="url" value="jdbc:mysql://localhost:3306/test?allowMultiQueries=true&amp;useSSL=false" />
      <!-- <property name="url" value="jdbc:mysql://服务器地址:端口号/数据库名称?serverTimezone=GMT%2B8" /> -->
      <property name="username" value="root" />
      <property name="password" value="your_password" />
    </dataSource>
  </environment>
</environments>
```