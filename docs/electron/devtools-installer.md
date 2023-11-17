[github地址](https://github.com/MarshallOfSound/electron-devtools-installer)

以下未验证成功！

### 安装
```bash
pnpm install electron-devtools-installer --save-dev
```

### 用法
```ts
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
// Or if you can not use ES6 imports
/**
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
*/
const { app } = require('electron');

app.whenReady().then(() => {
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
});
```
### 我可以使用哪些扩展？
从技术上讲，您可以使用所需的任何扩展名。只需找到 ChromeStore ID ，然后调用 。我们 在包内提供一些扩展 ID，以便您可以轻松地导入它们进行安装，而无需 你们必须自己找到他们。installExtension('YOUR_ID_HERE')
```ts
import installExtension, {
  EMBER_INSPECTOR, REACT_DEVELOPER_TOOLS,
  BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
  ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
  VUEJS3_DEVTOOLS, REDUX_DEVTOOLS,
  CYCLEJS_DEVTOOL, MOBX_DEVTOOLS,
  APOLLO_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';
```