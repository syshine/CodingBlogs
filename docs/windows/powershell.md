
### 编码
PowerShell用`>`数据重定向文件编码为UTF16
在PowerShell中，输入以下命令以将PowerShell的编码改为UTF-8 without BOM。
```bash
$PSDefaultParameterValues['*:Encoding'] = 'utf8'
# 实测结果是带BOM的UTF-8
```
