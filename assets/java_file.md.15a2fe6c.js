import{_ as s,o as a,c as l,O as n}from"./chunks/framework.08728be1.js";const C=JSON.parse('{"title":"文件和文件夹","description":"","frontmatter":{},"headers":[],"relativePath":"java/file.md","filePath":"java/file.md","lastUpdated":1712763671000}'),o={name:"java/file.md"},e=n(`<h1 id="文件和文件夹" tabindex="-1">文件和文件夹 <a class="header-anchor" href="#文件和文件夹" aria-label="Permalink to &quot;文件和文件夹&quot;">​</a></h1><h2 id="文件" tabindex="-1">文件 <a class="header-anchor" href="#文件" aria-label="Permalink to &quot;文件&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 新建文件</span></span>
<span class="line"><span style="color:#C792EA;">File</span><span style="color:#A6ACCD;"> newFile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pathname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 文件是否存在</span></span>
<span class="line"><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exists</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 删除文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="multipartfile保存" tabindex="-1">MultipartFile保存 <a class="header-anchor" href="#multipartfile保存" aria-label="Permalink to &quot;MultipartFile保存&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">MultipartFile</span><span style="color:#A6ACCD;"> multipartfile</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 这里仅声明，实际应该有值</span></span>
<span class="line"><span style="color:#C792EA;">File</span><span style="color:#A6ACCD;"> newFile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pathname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">multipartfile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transferTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">newFile</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h2 id="文件夹" tabindex="-1">文件夹 <a class="header-anchor" href="#文件夹" aria-label="Permalink to &quot;文件夹&quot;">​</a></h2><h3 id="新建文件夹" tabindex="-1">新建文件夹 <a class="header-anchor" href="#新建文件夹" aria-label="Permalink to &quot;新建文件夹&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">File</span><span style="color:#A6ACCD;"> folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pathname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mkdir</span><span style="color:#89DDFF;">();</span></span></code></pre></div><h3 id="判断文件夹是否存在" tabindex="-1">判断文件夹是否存在 <a class="header-anchor" href="#判断文件夹是否存在" aria-label="Permalink to &quot;判断文件夹是否存在&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">File</span><span style="color:#A6ACCD;"> folder </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">File</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pathname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">folder</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exists</span><span style="color:#89DDFF;">())</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文件夹存在</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,10),p=[e];function t(c,r,i,F,D,y){return a(),l("div",null,p)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
