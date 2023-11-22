import{_ as s,o as n,c as a,O as l}from"./chunks/framework.08728be1.js";const F=JSON.parse('{"title":"全局环境变量","description":"","frontmatter":{},"headers":[],"relativePath":"electron/env.md","filePath":"electron/env.md","lastUpdated":1700194465000}'),e={name:"electron/env.md"},p=l(`<h1 id="全局环境变量" tabindex="-1">全局环境变量 <a class="header-anchor" href="#全局环境变量" aria-label="Permalink to &quot;全局环境变量&quot;">​</a></h1><p>electron-vite 会像 V​​ite 一样从项目根目录加载环境变量，并使用不同的前缀来限制可用范围。</p><p>默认情况下，以 MAIN_VITE_ 为前缀的变量暴露给主进程，PRELOAD_VITE_ 用于预加载脚本，RENDERER_VITE_ 则用于渲染器。</p><div class="language-env"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// .env</span></span>
<span class="line"><span style="color:#A6ACCD;">SOME_KEY=123                # 无效变量</span></span>
<span class="line"><span style="color:#A6ACCD;">MAIN_VITE_SOME_KEY=123      # 主进程可用</span></span>
<span class="line"><span style="color:#A6ACCD;">PRELOAD_VITE_SOME_KEY=123   # 预加载脚本可用</span></span>
<span class="line"><span style="color:#A6ACCD;">RENDERER_VITE_SOME_KEY=123  # 渲染器可用</span></span></code></pre></div><p>如果你想自定义 env 变量的前缀，可以使用 envPrefix 选项。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// electron.vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">main</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">envPrefix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">M_VITE_</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>如果你是 TypeScript 用户，请确保在 env.d.ts 中添加 i<wbr>mport.meta.env 的类型定义，以获取用户自定义环境变量的类型检查和智能感知。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/// </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#F07178;font-style:italic;">reference</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#C792EA;font-style:italic;">types</span><span style="color:#89DDFF;font-style:italic;">=</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#C3E88D;font-style:italic;">vite/client</span><span style="color:#89DDFF;font-style:italic;">&quot;</span><span style="color:#89DDFF;font-style:italic;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMetaEnv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">MAIN_VITE_SOME_KEY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// more env variables...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMeta</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ImportMetaEnv</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>注意： 主进程只能使用MAIN_VITE_开头的变量 renderer进程只能使用RENDERER_VITE_开头的变量 哪个进程使用变量就把env.d.ts放在哪个文件夹下，如主进程使用就是<code>/src/main/env.d.ts</code>，renderer进程使用就是<code>/src/renderer/env.d.ts</code>，如果两个进程都使用，就需要分别在各自的文件夹下设置</p>`,9),o=[p];function t(c,r,i,y,D,C){return n(),a("div",null,o)}const _=s(e,[["render",t]]);export{F as __pageData,_ as default};
