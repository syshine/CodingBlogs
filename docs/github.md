# GitHub
## 上传到github Pages

[参考地址](https://blog.csdn.net/lancemao/article/details/126497147)
其中.github/workflows/deploy.yml文件修改如下
```yml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm i pnpm -g
      - run: pnpm install --no-frozen-lockfile

      - name: Build
        run: pnpm docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```