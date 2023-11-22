import{_ as s,o as a,c as n,O as l}from"./chunks/framework.08728be1.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"linux/java.md","filePath":"linux/java.md","lastUpdated":1700194465000}'),o={name:"linux/java.md"},p=l(`<h2 id="linux安装jdk" tabindex="-1">Linux安装JDK <a class="header-anchor" href="#linux安装jdk" aria-label="Permalink to &quot;Linux安装JDK&quot;">​</a></h2><p>下载RPM包然后进入该文件夹安装 <a href="https://blog.csdn.net/king_kgh/article/details/76893339" target="_blank" rel="noreferrer">参考网址</a></p><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p>下载x64 RPM Package: <a href="https://www.oracle.com/java/technologies/downloads/#jdk17-linux" target="_blank" rel="noreferrer">JDK17下载地址</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>进入jdk-17_linux-x64_bin.rpm所在文件夹安装，例如在<code>/mnt/hgfs/installer</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入RPM包所在文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/mnt/hgfs/installer</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">rpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ivh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdk-17_linux-x64_bin.rpm</span></span></code></pre></div><h2 id="linux运行jar" tabindex="-1">Linux运行jar <a class="header-anchor" href="#linux运行jar" aria-label="Permalink to &quot;Linux运行jar&quot;">​</a></h2><p><a href="https://blog.csdn.net/li1325169021/article/details/115362238" target="_blank" rel="noreferrer">参考网址</a></p><ol><li><p>将jar包并上传到linux环境的/usr/local/jar/目录下</p></li><li><p>进入/usr/local/jar/目录</p></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/jar/</span></span></code></pre></div><ol start="3"><li>启动jar包</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动常规环境</span></span>
<span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./springboot-0.0.1-SNAPSHOT.jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动测试环境</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># java -jar ./springboot-0.0.1-SNAPSHOT.jar --spring.profiles.active=test</span></span></code></pre></div><ol start="4"><li>停止jar包 关闭终端即可，或者进行下面的操作<p></p> 查询springboot到进程号,再通过kill -s 9 \${pid} 进行杀死再重新启动</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@CentOS-1 jar</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># ps -ef </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">springboot-0.0.1-SNAPSHOT</span></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">2990078</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2988309</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">:08</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pts/0</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:00:51</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">springboot-0.0.1-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">     </span><span style="color:#F78C6C;">2990522</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2988309</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#C3E88D;">:16</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pts/0</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">00</span><span style="color:#C3E88D;">:00:00</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--color=auto</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">springboot-0.0.1-SNAPSHOT</span></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">root@CentOS-1 jar</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"># kill -s 9 2990078</span></span></code></pre></div>`,15),e=[p];function t(r,c,i,C,y,A){return a(),n("div",null,e)}const h=s(o,[["render",t]]);export{d as __pageData,h as default};