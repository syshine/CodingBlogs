import{_ as a,o as s,c as n,O as e}from"./chunks/framework.08728be1.js";const _=JSON.parse('{"title":"Mybatis","description":"","frontmatter":{},"headers":[],"relativePath":"java/framework/spring-boot/mybatis.md","filePath":"java/framework/spring-boot/mybatis.md","lastUpdated":1687920425000}'),l={name:"java/framework/spring-boot/mybatis.md"},o=e(`<h1 id="mybatis" tabindex="-1">Mybatis <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;Mybatis&quot;">​</a></h1><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p><code>.\\src\\main\\resources\\application.yml</code>里的MyBatis 配置</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">mybatis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># 指定 mapper.xml 的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mapper-locations</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">classpath:mybatis/mapper/*.xml</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">#扫描实体类的位置,在此处指明扫描实体类的包，在 mapper.xml 中就可以不写实体类的全路径名</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type-aliases-package</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yourproject.entity</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 如果仅仅是用通过mapper的话，驼峰命名是默认开启的，但如果要与xml方式相结合的话，这里就要手动配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">map-underscore-to-camel-case</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span></code></pre></div>`,4),t=[o];function p(r,c,i,y,m,d){return s(),n("div",null,t)}const F=a(l,[["render",p]]);export{_ as __pageData,F as default};
