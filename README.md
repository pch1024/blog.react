# Vue 2.5 和 webpack 4.8 快速开发框架

> 主要用于快速搭建开发环境，学习和实践新知识

- 包括公共插件库 vue, vue-router, vuex, axios, scss, fast-click, better-scroll, mock
- 包括私有插件库 fullbody, ahutool

## 构建指令

```js
// 结合浏览器开发调试
"dev": "   cross-env NODE_ENV=dev    webpack-dev-server --progress --hide-modules --open --hot",
// 构建产品级压缩优化代码
"build": " cross-env NODE_ENV=build  webpack            --progress --hide-modules",
// 构建产品级测试调试代码
"debug": " cross-env NODE_ENV=debug  webpack            --progress --hide-modules",
// 直接发布
"deploy": "cross-env NODE_ENV=deploy webpack            --progress --hide-modules"
```
