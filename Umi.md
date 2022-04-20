蚂蚁团队研发

# 初始化

+ 环境要求：node 10.13+
+ 全局安装umi：npm i -g umi
+ 全局安装umi脚手架：`npm i -g @umijs/create-umi-app`
+ 使用create-umi-app新建项目：`mkdir myapp & cd myapp` => `create-umi-app` 或`npx @umijs/create-umi-app`
+ 启动项目：`yarn`/`npm i` => `yarn start` / `umi dev`
+ 新建页面：`umi g page pageName --typescript --less`

# 目录结构

```shell
.
├── package.json	包含插件和插件集
├── .umirc.ts		配置文件，包含 umi 内置功能和插件的配置。或者是config/config.js文件二选一
├── .env			环境变量，如 PORT=8888 COMPRESS=none
├── dist
├── mock			目录下所有 js 和 ts 文件会被解析为 mock 文件
├── public
└── src
    ├── .umi		临时文件目录，比如入口文件、路由等，都会被临时生成到这里
    ├── layouts/index.tsx	约定式路由时的全局布局文件
    ├── pages
        ├── index.less
        └── index.tsx
    └── app.ts		运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等
    └── global.css	全局样式
    └── global.ts	在入口文件被自动引入，可以考虑在此加入polyfill
```



# 配置文件

+ 如果项目的配置不复杂，推荐在 .umirc.ts 中写配置； 如果项目的配置比较复杂，可以将配置写在 config/config.ts 中
+ src/app.tsx 为运行时配置

# 路由

## 配置式路由

+ 配置文件中的routes进行配置

```js
export default {
  routes: [
    { exact: true, path: '/', component: 'index' },
    {
        path: '/user', component: 'user',
        wrappers: [ //路由级别的权限校验
           '@/wrappers/auth',
        ],
        routes: [……]
    },
  ],
}
```

+ umi提供的路由相关的组件：
  + Redirect 
  + Link 只用于单页应用的内部跳转，如果是外部地址跳转请使用 a 标签
  + 

## 约定式路由

+ 约定 src/pages/404.tsx 为 404 页面，需返回 React 组件。
