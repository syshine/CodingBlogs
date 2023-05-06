## 命名规则
已经不支持README.md,换成index.md

## 配置
### 侧边栏
```json
sidebar: {
  /// ------------------------------ java ------------------------------
  '/java/': [
    {
      text: 'Java',
      collapsed: false,
      items: [
        { text: '介绍', link: '/java/' },
        { text: '多线程', link: '/java/multhread' },
        { text: 'Lambda表达式', link: '/java/lambda' },
      ]
    },
    {
      text: '框架',
      collapsed: false,
      items: [
        { text: 'Spring Boot', link: '/java/framework/spring-boot' },
        { text: 'Spring MVC', link: '/java/framework/spring-mvc' },
        { text: 'MyBatis', link: '/java/framework/MyBatis' },
      ]
    }
  ],
}
```