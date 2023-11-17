# 居中
## flex布局
### 方法一
```html
<div class="container">你好</div>
```

```css
.container {
  width: 12.5rem;
  height: 6.25rem;
  border: 1px solid pink;

  /* 设置为flex布局 */
  display: flex;
  /* 主轴（水平方向）居中 */
  justify-content: center;
  /* 交叉轴（垂直方向）居中 */
  align-items: center;
}
```
### 方法二
```html
<html>
  <head>
    <meta charset="utf-8"> 
    <style> 
    .flex-container {
      display: -webkit-flex;
      display: flex;
      width: 400px;
      height: 250px;
      background-color: lightgrey;
    }

    .flex-item {
      background-color: cornflowerblue;
      width: 75px;
      height: 75px;
      margin: auto;
    }
    </style>
  </head>
  <body>
    <div class="flex-container">
      <div class="flex-item">Perfect centering!</div>
    </div>
  </body>
</html>
```

### 相邻的图标和文本居中对齐
```html
<template>
  <div class="container">
    <el-icon><Search /></el-icon>
    <el-text>abc</el-text>
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.container {
  align-items: center;
  display: flex;
}
</style>
```