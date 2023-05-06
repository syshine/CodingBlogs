# HTML 模式
## 概述
直接在html文件(或jsp等文件)使用, 可集成到java项目中

## [html中引入vue组件](http://www.imooc.com/article/326143)

 html页面引入vue组件需要在页面引入http-vue-loader.js
### 1.创建my-component.vue
```vue
<template>
  <div class="hello">Hello {{who}}</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      who: 'world'
    }
  }
}
</script>

<style>
.hello {
  background-color: #ffe;
}
</style>
```

### 2.创建index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <!-- 先引入 Vue -->
  <script src="https://unpkg.com/vue@3.2.20/dist/vue.global.js"></script>
  <!-- 引入 http-vue-loader -->
  <script src="https://unpkg.com/http-vue-loader"></script>
</head>

<body>
  <div id="app">
    <my-component></my-component>
  </div>
</body>

  <!-- 引入组件库 -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script>
    // 使用httpVueLoader
    Vue.use(httpVueLoader);
    new Vue({
        el: '#app',
        data: function () {
            return { visible: false }
        },
        components: {
            // 将组建加入组建库
            'my-component': 'url:./component/my-component.vue'
        }
    })
  </script>

</html>
```

## [UNPKG](https://unpkg.com/)
一个快速的全球内容分发网络，可以在npm上提供所有内容。使用它来快速和轻松地加载任何文件从任如URL如下

<div align="center" style="background: #e3e3e3;padding:10px 0px">package@:version/:文件的格式和格式</div>

### 例子

使用固定版本:
- unpkg.com/react@16.7.0/umd/react.production.min.js
- unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js

您也可以使用[semver范围](https://docs.npmjs.com/misc/semver)或[标记](https://docs.npmjs.com/cli/dist-tag)来代替固定的版本号，或者完全省略版本/标记来使用<span style="background: #e3e3e3">最新</span>的标记。

- unpkg.com/react@^16/umd/react.production.min.js
- unpkg.com/react/umd/react.production.min.js

如果您省略了文件路径(即使用一个“空”URL)，<span style="background: #e3e3e3">unpkg</span>将提供<span style="background: #e3e3e3">package.json</span>中由unpkg字段指定的文件，或者回到<span style="background: #e3e3e3">主分支</span>。

- unpkg.com/jquery
- unpkg.com/three

在URL末尾追加一个<span style="background: #e3e3e3;padding:0 3px"> /</span> 以查看包中所有文件的清单。

- unpkg.com/react/
- unpkg.com/react-router/

### 查询参数
<span style="background: #e3e3e3">?meta</span>
&nbsp;&nbsp;&nbsp;&nbsp;以JSON的形式返回包中任何文件的元数据(例如<span style="background: #e3e3e3">/any/file?meta</span>)

<span style="background: #e3e3e3">?module</span>
&nbsp;&nbsp;&nbsp;&nbsp;将JavaScript模块中展开所有的["bare" import specifiers](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier)为unpkg URLs。这个功能是非常实验性的。

### 缓存行为

CDN根据文件的永久URL缓存文件，其中包括npm包版本。这是因为npm不允许包作老用相同版本号的不同包覆盖已经发布的包。
浏览器被指示(通过<span style="background: #e3e3e3">Cache-Control</span>标头)无限期地缓存资源(1年)。

未指定包版本号的URL重定向到指定包版本号的URL。当没有指定版本时，这是<span style="background: #e3e3e3">最新</span>版本;当给[semver版本](https://github.com/npm/node-semver)时，这是<span style="background: #e3e3e3">maxsatisfating</span>版本。重定向在CDN中缓存10分钟，在浏览器中缓存1分钟

如果您希望用户在剪切新版本时能够使用最新版本，最好的策略是将版本号直接放在安装说明中的URL中。这也将加载更快，因为我们将不必解决最新版本和重定向他们。

### 工作流程

对于npm包作者来说，unpkg减轻了将代码发布到cdn以及npm注册中心的负担。所有您需要做的就是在您的npm包中包含您的[UMD](https://github.com/umdjs/umd)构建(而不是您的repo，这是不同的!)

您可以使用以下设置轻松完成此操作:

- 将<span style="background: #e3e3e3">umd</span>(或<span style="background: #e3e3e3">dist</span>)目录添加到您的<span style="background: #e3e3e3">.gitignore</span>文件
- 在<span style="background: #e3e3e3">package.json</span>文件中将umd目录添加到包中的[files array](https://docs.npmjs.com/files/package.json#files)
- 发布时使用构建脚本在<span style="background: #e3e3e3">umd</span>目录中生成UMD构建

就这样吧!现在，当您<span style="background: #e3e3e3">npm publish</span>时，您也可以在unpkg上获得一个版本

### 关于

unpkg是一个由[Michael Jackson](https://twitter.com/mjackson)构建和维护的[开源项目](https://github.com/mjackson/unpkg)，它不与npm公司有任何联系或支持。请不要向npm寻求unpkg的帮助。如果您有任何问题或疑虑，请联系[@unpkg](https://twitter.com/unpkg)

unpkgCDN由[Cloudflare](https://www.cloudflare.com/)提供支持，cloudflare是世界上最大、最快的云网络平台之一。


源服务器运行在Fly.io提供的自动伸缩基础设施上。应用服务器在全球17个城市运行，并根据活动请求来来回回。