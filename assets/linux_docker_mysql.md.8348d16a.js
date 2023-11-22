import{_ as s,o as a,c as l,O as n}from"./chunks/framework.08728be1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/docker/mysql.md","filePath":"linux/docker/mysql.md","lastUpdated":1700194465000}'),o={name:"linux/docker/mysql.md"},p=n(`<h3 id="docker-安装mysql-和导入数据库" tabindex="-1">Docker 安装mysql 和导入数据库 <a class="header-anchor" href="#docker-安装mysql-和导入数据库" aria-label="Permalink to &quot;Docker 安装mysql 和导入数据库&quot;">​</a></h3><h4 id="安装mysql" tabindex="-1">安装mysql <a class="header-anchor" href="#安装mysql" aria-label="Permalink to &quot;安装mysql&quot;">​</a></h4><ol><li>查看可用的 MySQL 版本 <a href="https://hub.docker.com/_/mysql?tab=tags" target="_blank" rel="noreferrer">MySQL 镜像库地址</a></li></ol><p>此外，我们还可以用命令来查看可用版本：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span></code></pre></div><ol start="2"><li>拉取 MySQL 镜像 这里我们拉取官方的最新版本的镜像：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:latest</span></span></code></pre></div><ol start="3"><li>查看本地镜像 使用以下命令来查看是否已安装了 mysql：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">images</span></span></code></pre></div><ol start="4"><li>运行容器 安装完成后，我们可以使用以下命令来运行 mysql 容器：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-itd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql-test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">:3306</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql</span></span></code></pre></div><p>参数说明：</p><ul><li>-p 3306:3306 ：映射容器服务的 3306 端口到宿主机的 3306 端口，外部主机可以直接通过 宿主机ip:3306 访问到 MySQL 的服务。</li><li>MYSQL_ROOT_PASSWORD=123456：设置 MySQL 服务 root 用户的密码。</li></ul><ol start="5"><li>安装成功 通过命令查看是否安装成功：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span></code></pre></div><ol start="6"><li>进入容器</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql-test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span></code></pre></div><ol start="7"><li>登录mysql</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span></code></pre></div><h4 id="导入数据库" tabindex="-1">导入数据库 <a class="header-anchor" href="#导入数据库" aria-label="Permalink to &quot;导入数据库&quot;">​</a></h4><p><a href="https://blog.csdn.net/lhjllff12345/article/details/131541339?spm=1001.2101.3001.6650.2&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-131541339-blog-86478766.235%5Ev38%5Epc_relevant_sort_base1&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-131541339-blog-86478766.235%5Ev38%5Epc_relevant_sort_base1&amp;utm_relevant_index=3" target="_blank" rel="noreferrer">参考网页</a></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将文件传入docker容器</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># docker cp 本地路径  容器名称:容器路径   注意，容器里面的路径要事先建好</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果要把容器文件复制出来，也是docker cp  只要把本地路径放到后面去即可 下面的mysql-test是容器名称</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/hgfs/Share/javatest.sql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql-test:/root/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 然后进入docker容器内</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql-test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/bash</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用mysql导入数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 登录mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-uroot</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 创建数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">database</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">javatest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 连接数据库</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">javatest</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## 导入数据</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/root/javatest.sql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># # 或者系统行命令导入数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ## 创建数据库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mysqladmin -uroot -p create javatest</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ## 导入数据库</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mysql -uroot -p javatest&lt; /root/javatest.sql</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># # 登录mysql</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mysql -uroot -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询</span></span>
<span class="line"><span style="color:#FFCB6B;">mysql&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">select</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">javatest.test</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">bash</span></span></code></pre></div>`,22),e=[p];function t(c,r,y,i,C,D){return a(),l("div",null,e)}const m=s(o,[["render",t]]);export{d as __pageData,m as default};