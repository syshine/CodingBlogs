import{_ as a,o as s,c as t,O as e}from"./chunks/framework.08728be1.js";const h=JSON.parse('{"title":"MySQL设置","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/settings.md","filePath":"database/mysql/settings.md","lastUpdated":1687920425000}'),l={name:"database/mysql/settings.md"},n=e(`<h1 id="mysql设置" tabindex="-1">MySQL设置 <a class="header-anchor" href="#mysql设置" aria-label="Permalink to &quot;MySQL设置&quot;">​</a></h1><h2 id="数据库存放位置" tabindex="-1">数据库存放位置 <a class="header-anchor" href="#数据库存放位置" aria-label="Permalink to &quot;数据库存放位置&quot;">​</a></h2><ol><li>先停止MySQL服务，然后在my.ini文件里修改(mysql8.0在C:\\ProgramData\\MySQL\\MySQL Server 8.0)</li></ol><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Path to the database root 修改数据存放位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># datadir=C:/ProgramData/MySQL/MySQL Server 8.0\\Data</span></span>
<span class="line"><span style="color:#F07178;">datadir</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">D:\\mysql\\Data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 上传文件夹</span></span>
<span class="line"><span style="color:#F07178;">secure-file-priv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:\\mysql\\Uploads</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><ol start="2"><li>把MySQL Server 8.0里的Data和Uploads文件夹拷贝到D:\\mysql文件夹里，稳妥起见不要用剪切，如果以后出现什么问题，还可以改回来。</li><li>启动MySQL服务</li></ol>`,5),o=[n];function i(r,p,c,d,y,_){return s(),t("div",null,o)}const D=a(l,[["render",i]]);export{h as __pageData,D as default};
