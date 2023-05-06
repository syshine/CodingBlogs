# 错误解决
## import.meta.env
### 问题描述
1.仅当 '--module' 选项为 'es2020'、'es2022'、'esnext'、 'system'、'node12' 或 'nodenext' 时，才允许 'import.meta' 元属性。ts(1343)

2.类型“ImportMeta”上不存在属性“env”
### 解决办法
问题2解决办法是 "types": ["vite/client"]
```json
# tsconfig.json
{
  "compilerOptions": {
    "module": "es2020",
    "moduleResolution": "node",
    "target": "es2020",
    "esModuleInterop": true,
    "types": ["vite/client"]
  }
}
```
[问题1参考](https://github.com/kulshekhar/ts-jest/issues/3888)
[问题2参考](https://blog.csdn.net/chengxuyuanjava123/article/details/123874161)