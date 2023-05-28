# Mybatis
## 配置
`.\src\main\resources\application.yml`里的MyBatis 配置
```yml
mybatis:
  # 指定 mapper.xml 的位置
  mapper-locations: classpath:mybatis/mapper/*.xml
  #扫描实体类的位置,在此处指明扫描实体类的包，在 mapper.xml 中就可以不写实体类的全路径名
  type-aliases-package: yourproject.entity
  configuration:
    # 如果仅仅是用通过mapper的话，驼峰命名是默认开启的，但如果要与xml方式相结合的话，这里就要手动配置
    map-underscore-to-camel-case: true
```