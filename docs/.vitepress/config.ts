import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码记事本",
  description: "记录代码经验和错误处理",
  lang:'zh-cn',
  lastUpdated: true,
  base: '/CodingBlogs/', // 如果想用 https://*.github.io/CodingBlogs/ 访问，那么这句话必填。如果发布到本地则注释掉
  ignoreDeadLinks: true, // 忽略死链接, 如果不设置，则文件中有如http://localhost:15672/index 的链接会编译错误
  vite: {
    server: {
      port: 7000, // 运行端口号
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '语言',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'C#', link: '/cshape/' },
          { text: 'Electron', link: '/electron/' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'HTML', link: '/frontend/html/' },
          { text: 'CSS', link: '/frontend/css/' },
          { text: 'JavaScript', link: '/frontend/js/' },
          { text: 'TypeScript', link: '/frontend/ts/' },
          { text: 'jQuery', link: '/frontend/jquery/' },
        ]
      },
      {
        text: '数据库',
        items: [
          { text: 'MySql', link: '/database/mysql/' },
          { text: 'SqlServer', link: '/database/sqlserver/' },
        ]
      },
      { text: 'NodeJs', link: '/nodejs/' },
      { 
        text: '操作系统',
        items: [
          { text: 'Windows', link: '/windows/' },
          { text: 'Linux', link: '/linux/' },
        ]
      },
      { text: '书签', link: '/bookmarks/tools' },
      {
        text: 'VitePress',
        items: [
          { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
          { text: 'VitePress', link: 'https://vitepress.dev/' },
          { text: 'VitePress中文网', link: 'https://vitejs.cn/vitepress/' },
        ]
      },
    ],

    sidebar: {
      // 注意,侧边栏是自上而下扫描(类似switch-case),所以子菜单写在前面(如/vue/vue3/写在/vue/上面)
      /// ------------------------------ java ------------------------------
      '/java/framework/': [
        {
          text: 'MyBatis',
          collapsed: false,
          items: [
            { text: '介绍', link: '/java/framework/mybatis/' },
            { text: '配置文件', link: '/java/framework/mybatis/config' },
            { text: 'association', link: '/java/framework/mybatis/association' },
            { text: 'collection', link: '/java/framework/mybatis/collection' },
          ]
        },
        {
          text: 'Spring Boot',
          collapsed: false,
          items: [
            { text: '介绍', link: '/java/framework/spring-boot/' },
            { text: 'Mybatis', link: '/java/framework/spring-boot/mybatis' },
            { text: 'Thymeleaf', link: '/java/framework/spring-boot/thymeleaf' },
            { text: 'RabbitMQ', link: '/java/framework/spring-boot/rabbitmq' }
          ]
        },
        {
          text: 'Spring MVC',
          collapsed: false,
          items: [
            { text: '介绍', link: '/java/framework/spring-mvc/' },
            { text: '配置文件', link: '/java/framework/spring-mvc/config' },
            { text: '注解', link: '/java/framework/spring-mvc/annotation' },
          ]
        },
        {
          text: 'Spring Cloud',
          collapsed: false,
          items: [
            { text: '介绍', link: '/java/framework/spring-cloud/' },
            { text: 'Eureka Server', link: '/java/framework/spring-cloud/eureka-server' },
            { text: 'Eureka Client', link: '/java/framework/spring-cloud/eureka-client' },
            { text: 'Gateway', link: '/java/framework/spring-cloud/gateway' },
            { text: 'Config', link: '/java/framework/spring-cloud/config' },
            { text: 'OpenFeign', link: '/java/framework/spring-cloud/openfeign' },
          ]
        }
      ],
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
            { text: 'Spring Boot', link: '/java/framework/spring-boot/' },
            { text: 'Spring MVC', link: '/java/framework/spring-mvc/' },
            { text: 'Spring Cloud', link: '/java/framework/spring-cloud/' },
            { text: 'MyBatis', link: '/java/framework/MyBatis/' },
          ]
        },
        {
          text: '组件',
          collapsed: false,
          items: [
            { text: 'RabbitMQ', link: '/java/conponents/rabbitmq' },
          ]
        }
      ],
      /// ------------------------------ C# ------------------------------
      '/cshape/': [
        {
          text: 'C#',
          collapsed: false,
          items: [
            { text: '介绍', link: '/cshape/' },
          ]
        }
      ],
      /// ------------------------------ Electron ------------------------------
      '/electron/': [
        {
          text: 'Electron',
          collapsed: false,
          items: [
            { text: '介绍', link: '/electron/' },
            { text: '错误', link: '/electron/error' },
            { text: '环境变量', link: '/electron/env' },
            { text: 'TypeScript', link: '/electron/ts' },
            { text: '安装devTools工具', link: '/electron/devtools-installer' },
          ]
        }
      ],
      /// ------------------------------ 数据库 ------------------------------
      '/database/mysql/':[
        {
          text: 'MySql数据库',
          collapsed: false,
          items: [
            { text: '介绍', link: '/database/mysql/' },
            { text: '设置', link: '/database/mysql/settings' },
            { text: '连接字符串', link: '/database/mysql/connect-string' },
            { text: '分页', link: '/database/mysql/pagination' },
            { text: '指令', link: '/database/mysql/command' },
            { text: '存储过程', link: '/database/mysql/procedure' },
            { text: '错误处理', link: '/database/mysql/error' },
            { text: '备份与还原', link: '/database/mysql/backup' },
          ]
        }
      ],
      '/database/sqlserver/':[
        {
          text: 'SqlServer数据库',
          collapsed: true,
          items: [
            { text: '介绍', link: '/database/sqlserver/' },
            { text: '连接字符串', link: '/database/sqlserver/connect-string' },
            { text: '分页', link: '/database/sqlserver/pagination' },
            { text: '指令', link: '/database/sqlserver/command' },
            { text: '存储过程', link: '/database/sqlserver/procedure' },
          ]
        }
      ],
      '/database/':[
        {
          text: '数据库',
          collapsed: true,
          items: [
            { text: '介绍', link: '/database/' },
            { text: 'mysql', link: '/database/mysql/' },
            { text: 'sqlserver', link: '/database/sqlserver/' },
          ]
        }
      ],
      /// ------------------------------ frontend ------------------------------
      '/frontend/html/':[
        {
          text: 'HTML',
          collapsed: false,
          items: [
            { text: '介绍', link: '/frontend/html/' },
          ]
        }
      ],
      '/frontend/css/':[
        {
          text: 'CSS样式表',
          collapsed: false,
          items: [
            { text: '介绍', link: '/frontend/css/' },
            { text: '居中', link: '/frontend/css/center' },
          ]
        }
      ],
      '/frontend/js/':[
        {
          text: 'JavaScript',
          collapsed: false,
          items: [
            { text: '介绍', link: '/frontend/js/' },
            { text: '数组', link: '/frontend/js/array' },
          ]
        }
      ],
      '/frontend/ts/':[
        {
          text: 'TypeScript',
          collapsed: false,
          items: [
            { text: '介绍', link: '/frontend/ts/' },
            { text: '错误', link: '/frontend/ts/error' },
          ]
        }
      ],
      '/frontend/jquery/':[
        {
          text: 'jQuery',
          collapsed: false,
          items: [
            { text: '介绍', link: '/frontend/jquery/' },
            { text: 'HTML', link: '/frontend/jquery/html/' },
            { text: 'AJAX', link: '/frontend/jquery/ajax/' },
            { text: '事件', link: '/frontend/jquery/event/' },
          ]
        }
      ],
      '/frontend/':[
        {
          text: '前端',
          collapsed: false,
          items: [
            { text: 'HTML', link: '/frontend/html/' },
            { text: 'CSS', link: '/frontend/css/' },
            { text: 'JavaScript', link: '/frontend/js/' },
            { text: 'TypeScript', link: '/frontend/ts/' },
            { text: 'jQuery', link: '/frontend/jquery/' },
          ]
        }
      ],
      /// ------------------------------ Vue ------------------------------
      '/vue/vue3/':[
        {
          text: 'Vue3',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/vue3/' },
            { text: '语法', link: '/vue/vue3/grammar' },
            { text: '变量', link: '/vue/vue3/var' },
            { text: '生命周期', link: '/vue/vue3/lifecycle' },
            { text: '环境', link: '/vue/vue3/env' },
            { text: '路由', link: '/vue/vue3/router' },
            { text: '国际化', link: '/vue/vue3/i18n' },
            { text: '错误', link: '/vue/vue3/error' },
          ]
        },
        {
          text: 'Vite',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/vue3/vite' },
          ]
        }
      ],
      '/vue/vue2/':[
        {
          text: 'Vue2',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/vue2/' },
          ]
        }
      ],
      '/vue/press/':[
        {
          text: 'Vite Press',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/press/vitepress/' },
            { text: '跟vuepress的区别', link: '/vue/press/vitepress/differ-from-vuepress' },
          ]
        },
        {
          text: 'Vue Press',
          collapsed: false,
          items: [
            { text: 'Vue Press', link: '/vue/press/vuepress/' },
          ]
        }
      ],
      '/vue/':[
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/' },
            { text: 'html模式', link: '/vue/html-mode' },
            { text: '开源项目', link: '/vue/open-source' },
            { text: 'Vue2升级Vue3', link: '/vue/vue2-to-vue3.html' },
            { text: 'Vue2', link: '/vue/vue2/' },
            { text: 'Vue3', link: '/vue/vue3/' },
          ]
        },
        {
          text: 'Element Plus',
          collapsed: false,
          items: [
            { text: '介绍', link: '/vue/element-plus/' },
            { text: '黑夜模式', link: '/vue/element-plus/dark-mode' },
          ]
        },
        {
          text: 'Press',
          collapsed: true,
          items: [
            { text: 'Vue Press', link: '/vue/press/vuepress/' },
            { text: 'Vite Press', link: '/vue/press/vitepress/' },
          ]
        }
      ],
      '/nodejs/':[
        {
          text: 'NodeJs',
          collapsed: false,
          items: [
            { text: '介绍', link: '/nodejs/' },
            { text: 'npm', link: '/nodejs/npm' },
            { text: 'yarn', link: '/nodejs/yarn' },
            { text: 'pnpm', link: '/nodejs/pnpm' },
            { text: 'mysql', link: '/nodejs/mysql' },
          ]
        }
      ],
      /// ------------------------------ ide ------------------------------
      '/ide/vscode':[
        {
          text: 'VS Code',
          collapsed: false,
          items: [
            { text: '介绍', link: '/ide/vscode/' },
            { text: '设置', link: '/ide/vscode/settings' },
            { text: '代码片段', link: '/ide/vscode/snippets' },
          ]
        }
      ],
      '/ide/':[
        {
          text: 'IDE',
          collapsed: false,
          items: [
            { text: 'VS Code', link: '/ide/vscode/' },
          ]
        }
      ],

      /// ------------------------------ 操作系统 ------------------------------
      '/windows/':[
        {
          text: 'Windows',
          collapsed: false,
          items: [
            { text: '介绍', link: '/windows/' },
            { text: 'Power Shell', link: '/windows/powershell' },
          ]
        }
      ],
      '/linux/':[
        {
          text: 'Linux',
          collapsed: false,
          items: [
            { text: '介绍', link: '/linux/' },
            { text: 'Java', link: '/linux/java' },
            { text: 'MySql', link: '/linux/mysql' },
            { text: 'Nginx', link: '/linux/nginx' },
            { text: 'NodeJs', link: '/linux/nodejs' },
          ]
        },
        {
          text: 'Docker',
          collapsed: false,
          items: [
            { text: '介绍', link: '/linux/docker/' },
            { text: '安装', link: '/linux/docker/install' },
            { text: 'SpringBoot', link: '/linux/docker/springboot' },
            { text: 'MySql', link: '/linux/docker/mysql' },
          ]
        }
      ],
      '/os/':[
        {
          text: '操作系统',
          collapsed: false,
          items: [
            { text: 'Windows', link: '/windows/' },
            { text: 'Linux', link: '/linux/' },
          ]
        }
      ],

      '/bookmarks/':[
        {
          text: '常规',
          collapsed: false,
          items: [
            { text: '工具', link: '/bookmarks/tools' },
            { text: '素材', link: '/bookmarks/material' },
            { text: '教程', link: '/bookmarks/study' },
          ]
        },
        {
          text: '前端',
          collapsed: false,
          items: [
            { text: '通用', link: '/bookmarks/frontend/' },
            { text: 'Vue', link: '/bookmarks/frontend/vue' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/syshine/CodingBlogs/edit/main/docs/:path'
    },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'MP9BE7VZ75', //8J64VVRP8K
    //     apiKey: '90347545ead9d2e74631bb5b9f93b76a', //a18e2f4cc5665f6602c5631fd868adfd
    //     indexName: 'vitepress'
    //   }
    // },

    // 编译时会有错误, Could not load /@localSearchIndex: section.titles.at is not a function
    // search: {
    //   provider: 'local'
    // },

  },
})
