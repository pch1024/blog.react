# 个人博客前端 React 版

> 个人用 webpack 搭建 react 快速开发脚手架

## 构建指令

```js
> npm run dev // 调试开发
> npm run build // 产品打包
```

## 遇到的问题

1. 在使用 Ant-Disign 时，组件模块和样式做到了按需加载，但是 icons 没有做到，经过查阅 [Git Issue](https://github.com/ant-design/ant-design/issues/12011) 发现并没有一个比较完备的解决方案，等待 Ant-Disign 官方回应中。

2. react css CSS Modules 功能

```js
{
    test: /\.css$/,
    loader: "style-loader!css-loader?modules"
}
//上面代码中，关键的一行是style-loader!css-loader?modules，它在css-loader后面加了一个查询参数modules，表示打开 CSS Modules 功能。
```
