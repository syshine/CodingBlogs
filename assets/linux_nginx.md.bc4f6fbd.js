import{_ as s,o as a,c as n,O as l}from"./chunks/framework.08728be1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/nginx.md","filePath":"linux/nginx.md","lastUpdated":1700194465000}'),o={name:"linux/nginx.md"},e=l(`<h2 id="nginx-安装" tabindex="-1">Nginx 安装 <a class="header-anchor" href="#nginx-安装" aria-label="Permalink to &quot;Nginx 安装&quot;">​</a></h2><h3 id="安装编译工具及库文件" tabindex="-1">安装编译工具及库文件 <a class="header-anchor" href="#安装编译工具及库文件" aria-label="Permalink to &quot;安装编译工具及库文件&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zlib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zlib-devel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-c++</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">libtool</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssl-devel</span></span></code></pre></div><h3 id="安装-pcre" tabindex="-1">安装 PCRE <a class="header-anchor" href="#安装-pcre" aria-label="Permalink to &quot;安装 PCRE&quot;">​</a></h3><p>PCRE 作用是让 Nginx 支持 Rewrite 功能。</p><ol><li>下载 PCRE 安装包，<a href="http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz" target="_blank" rel="noreferrer">下载地址</a></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># cd /usr/local/src/</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz</span></span></code></pre></div><ol start="2"><li>解压安装包:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># tar zxvf pcre-8.35.tar.gz</span></span></code></pre></div><ol start="3"><li>进入安装包目录</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># cd pcre-8.35</span></span></code></pre></div><ol start="4"><li>编译安装</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon pcre-8.35</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># ./configure</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon pcre-8.35</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># make </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre></div><ol start="5"><li>查看pcre版本</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon pcre-8.35</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># pcre-config --version</span></span></code></pre></div><h3 id="安装-nginx" tabindex="-1">安装 Nginx <a class="header-anchor" href="#安装-nginx" aria-label="Permalink to &quot;安装 Nginx&quot;">​</a></h3><p>1、下载 Nginx，下载地址：<a href="https://nginx.org/en/download.html" target="_blank" rel="noreferrer">https://nginx.org/en/download.html</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># cd /usr/local/src/</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># wget http://nginx.org/download/nginx-1.6.2.tar.gz</span></span></code></pre></div><p>2、解压安装包</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># tar zxvf nginx-1.6.2.tar.gz</span></span></code></pre></div><p>3、进入安装包目录</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon src</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># cd nginx-1.6.2</span></span></code></pre></div><p>4、编译安装</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon nginx-1.6.2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon nginx-1.6.2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># make</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon nginx-1.6.2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># make install</span></span></code></pre></div><p>5、查看nginx版本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@bogon nginx-1.6.2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># /usr/local/webserver/nginx/sbin/nginx -v</span></span></code></pre></div><p>到此，nginx安装完成。</p><p>运行nginx提示未找到命令解决办法: 我们输入的命令都是系统先去/usr/bin目录下去寻找 这个目录类似于我们windows系统中的环境变量 如果在这个目录下找不到命令 就会提示command not found（未找到命令）。 将文件链接到usr/bin路径下,使用命令 ln -s 文件路径 环境变量路径</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/webserver/nginx/sbin/nginx</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/usr/bin</span></span></code></pre></div><h2 id="nginx-命令" tabindex="-1">Nginx 命令 <a class="header-anchor" href="#nginx-命令" aria-label="Permalink to &quot;Nginx 命令&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/usr/local/webserver/nginx/sbin/nginx</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 启动 Nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/local/webserver/nginx/sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 重新载入配置文件</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/local/webserver/nginx/sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reopen</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 重启 Nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/local/webserver/nginx/sbin/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 停止 Nginx</span></span></code></pre></div>`,31),p=[e];function t(c,r,i,C,y,D){return a(),n("div",null,p)}const A=s(o,[["render",t]]);export{d as __pageData,A as default};