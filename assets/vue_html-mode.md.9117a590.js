import{_ as s,o as a,c as n,O as l}from"./chunks/framework.08728be1.js";const h=JSON.parse('{"title":"HTML 模式","description":"","frontmatter":{},"headers":[],"relativePath":"vue/html-mode.md","filePath":"vue/html-mode.md","lastUpdated":1700194465000}'),p={name:"vue/html-mode.md"},o=l(`<h1 id="html-模式" tabindex="-1">HTML 模式 <a class="header-anchor" href="#html-模式" aria-label="Permalink to &quot;HTML 模式&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>直接在html文件(或jsp等文件)使用, 可集成到java项目中</p><h2 id="html中引入vue组件" tabindex="-1"><a href="http://www.imooc.com/article/326143" target="_blank" rel="noreferrer">html中引入vue组件</a> <a class="header-anchor" href="#html中引入vue组件" aria-label="Permalink to &quot;[html中引入vue组件](http://www.imooc.com/article/326143)&quot;">​</a></h2><p>html页面引入vue组件需要在页面引入http-vue-loader.js</p><h3 id="_1-创建my-component-vue" tabindex="-1">1.创建my-component.vue <a class="header-anchor" href="#_1-创建my-component-vue" aria-label="Permalink to &quot;1.创建my-component.vue&quot;">​</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello {{who}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      who</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffe</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="_2-创建index-html" tabindex="-1">2.创建index.html <a class="header-anchor" href="#_2-创建index-html" aria-label="Permalink to &quot;2.创建index.html&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 引入样式 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/element-ui/lib/theme-chalk/index.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 先引入 Vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue@3.2.20/dist/vue.global.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 引入 http-vue-loader --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/http-vue-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">&lt;!-- 引入组件库 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/element-ui/lib/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用httpVueLoader</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(httpVueLoader)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> visible</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 将组建加入组建库</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">my-component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url:./component/my-component.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="unpkg" tabindex="-1"><a href="https://unpkg.com/" target="_blank" rel="noreferrer">UNPKG</a> <a class="header-anchor" href="#unpkg" aria-label="Permalink to &quot;[UNPKG](https://unpkg.com/)&quot;">​</a></h2><p>一个快速的全球内容分发网络，可以在npm上提供所有内容。使用它来快速和轻松地加载任何文件从任如URL如下</p><div align="center" style="background:#e3e3e3;padding:10px 0px;">package@:version/:文件的格式和格式</div><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><p>使用固定版本:</p><ul><li>unpkg.com/react@16.7.0/umd/react.production.min.js</li><li>unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js</li></ul><p>您也可以使用<a href="https://docs.npmjs.com/misc/semver" target="_blank" rel="noreferrer">semver范围</a>或<a href="https://docs.npmjs.com/cli/dist-tag" target="_blank" rel="noreferrer">标记</a>来代替固定的版本号，或者完全省略版本/标记来使用<span style="background:#e3e3e3;">最新</span>的标记。</p><ul><li>unpkg.com/react@^16/umd/react.production.min.js</li><li>unpkg.com/react/umd/react.production.min.js</li></ul><p>如果您省略了文件路径(即使用一个“空”URL)，<span style="background:#e3e3e3;">unpkg</span>将提供<span style="background:#e3e3e3;">package.json</span>中由unpkg字段指定的文件，或者回到<span style="background:#e3e3e3;">主分支</span>。</p><ul><li>unpkg.com/jquery</li><li>unpkg.com/three</li></ul><p>在URL末尾追加一个<span style="background:#e3e3e3;padding:0 3px;"> /</span> 以查看包中所有文件的清单。</p><ul><li>unpkg.com/react/</li><li>unpkg.com/react-router/</li></ul><h3 id="查询参数" tabindex="-1">查询参数 <a class="header-anchor" href="#查询参数" aria-label="Permalink to &quot;查询参数&quot;">​</a></h3><p><span style="background:#e3e3e3;">?meta</span>     以JSON的形式返回包中任何文件的元数据(例如<span style="background:#e3e3e3;">/any/file?meta</span>)</p><p><span style="background:#e3e3e3;">?module</span>     将JavaScript模块中展开所有的<a href="https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier" target="_blank" rel="noreferrer">&quot;bare&quot; import specifiers</a>为unpkg URLs。这个功能是非常实验性的。</p><h3 id="缓存行为" tabindex="-1">缓存行为 <a class="header-anchor" href="#缓存行为" aria-label="Permalink to &quot;缓存行为&quot;">​</a></h3><p>CDN根据文件的永久URL缓存文件，其中包括npm包版本。这是因为npm不允许包作老用相同版本号的不同包覆盖已经发布的包。 浏览器被指示(通过<span style="background:#e3e3e3;">Cache-Control</span>标头)无限期地缓存资源(1年)。</p><p>未指定包版本号的URL重定向到指定包版本号的URL。当没有指定版本时，这是<span style="background:#e3e3e3;">最新</span>版本;当给<a href="https://github.com/npm/node-semver" target="_blank" rel="noreferrer">semver版本</a>时，这是<span style="background:#e3e3e3;">maxsatisfating</span>版本。重定向在CDN中缓存10分钟，在浏览器中缓存1分钟</p><p>如果您希望用户在剪切新版本时能够使用最新版本，最好的策略是将版本号直接放在安装说明中的URL中。这也将加载更快，因为我们将不必解决最新版本和重定向他们。</p><h3 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h3><p>对于npm包作者来说，unpkg减轻了将代码发布到cdn以及npm注册中心的负担。所有您需要做的就是在您的npm包中包含您的<a href="https://github.com/umdjs/umd" target="_blank" rel="noreferrer">UMD</a>构建(而不是您的repo，这是不同的!)</p><p>您可以使用以下设置轻松完成此操作:</p><ul><li>将<span style="background:#e3e3e3;">umd</span>(或<span style="background:#e3e3e3;">dist</span>)目录添加到您的<span style="background:#e3e3e3;">.gitignore</span>文件</li><li>在<span style="background:#e3e3e3;">package.json</span>文件中将umd目录添加到包中的<a href="https://docs.npmjs.com/files/package.json#files" target="_blank" rel="noreferrer">files array</a></li><li>发布时使用构建脚本在<span style="background:#e3e3e3;">umd</span>目录中生成UMD构建</li></ul><p>就这样吧!现在，当您<span style="background:#e3e3e3;">npm publish</span>时，您也可以在unpkg上获得一个版本</p><h3 id="关于" tabindex="-1">关于 <a class="header-anchor" href="#关于" aria-label="Permalink to &quot;关于&quot;">​</a></h3><p>unpkg是一个由<a href="https://twitter.com/mjackson" target="_blank" rel="noreferrer">Michael Jackson</a>构建和维护的<a href="https://github.com/mjackson/unpkg" target="_blank" rel="noreferrer">开源项目</a>，它不与npm公司有任何联系或支持。请不要向npm寻求unpkg的帮助。如果您有任何问题或疑虑，请联系<a href="https://twitter.com/unpkg" target="_blank" rel="noreferrer">@unpkg</a></p><p>unpkgCDN由<a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer">Cloudflare</a>提供支持，cloudflare是世界上最大、最快的云网络平台之一。</p><p>源服务器运行在Fly.io提供的自动伸缩基础设施上。应用服务器在全球17个城市运行，并根据活动请求来来回回。</p>`,37),e=[o];function t(r,c,D,F,y,i){return a(),n("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};