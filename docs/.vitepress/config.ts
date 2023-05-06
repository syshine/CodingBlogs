import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Coding Notes",
  description: "Coding Memo",
  base: '/CodingBlogs/', // 如果想用 https://*.github.io/CodingBlogs/ 访问，那么这句话必填
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '语言',
        items: [
          { text: 'Java', link: '/java/' },
          { text: 'C#', link: '/cshape/' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'CSS', link: '/html/css/' },
          { text: 'Type Script', link: '/html/ts/' },
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
    ],

    sidebar: {
      // 注意,侧边栏是自上而下扫描(类似switch-case),所以子菜单写在前面(如/vue/vue3/写在/vue/上面)
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
      /// ------------------------------ 数据库 ------------------------------
      '/database/mysql/':[
        {
          text: 'MySql数据库',
          collapsed: false,
          items: [
            { text: '介绍', link: '/database/mysql/' },
            { text: '指令', link: '/database/mysql/command' },
            { text: '存储过程', link: '/database/mysql/procedure' },
          ]
        }
      ],
      '/database/sqlserver/':[
        {
          text: 'SqlServer数据库',
          collapsed: true,
          items: [
            { text: '介绍', link: '/database/sqlserver/' },
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
      /// ------------------------------ HTML ------------------------------
      '/html/css/':[
        {
          text: 'CSS样式表',
          collapsed: false,
          items: [
            { text: '介绍', link: '/html/css/' },
            { text: '居中', link: '/html/css/center' },
          ]
        }
      ],
      '/html/ts/':[
        {
          text: 'Type Script',
          collapsed: false,
          items: [
            { text: '介绍', link: '/html/ts/' },
            { text: '错误', link: '/html/ts/error' },
          ]
        }
      ],
      '/html/':[
        {
          text: 'Html',
          collapsed: false,
          items: [
            { text: '介绍', link: '/html/' },
            { text: 'CSS', link: '/html/css/' },
            { text: 'Type Script', link: '/html/ts/' },
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
            { text: '环境', link: '/vue/vue3/env' },
            { text: '路由', link: '/vue/vue3/router' },
            { text: '国际化', link: '/vue/vue3/i18n' },
            { text: '错误', link: '/vue/vue3/error' },
            { text: '国际化', link: '/vue/vue3/i18n' },
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
            { text: '介绍', link: '/vue/vue/' },
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
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
