## highlight.js用法
### Vue3用法
```html
<el-button type="primary" @click="hl" >高亮代码</el-button>
<pre>
  <code ref="codeRef" class="language-javascript">
var btn = document.getElementById('btn');
console.dir(btn);
console.log(btn.id); // btn
console.log(btn.type); // button
  </code>
</pre>

<script lang="ts" setup>
import hljs from 'highlight.js'

const hl = () => {
  hljs.highlightElement(codeRef.value)
}
</script>
```

## 错误
### 不换行
用innerText赋值会将回车替换成`<br \>`
解决方法, 源文本用innerHTML赋值, 而且要替换掉'<'和'>'
```js
// text是动态给赋值的内容
const code = document.querySelector("#cd")
code.innerHTML = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
hljs.highlightElement(code)

// Vue3写法
// odeRef.value.innerHTML = html.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')
// hljs.highlightElement(codeRef.value)
```
[不换行解决方法](https://blog.csdn.net/Jioho_chen/article/details/118465375)