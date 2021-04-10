#  基于vite2的react脚手架

### 开发编译
* yarn start 启动开发
* yarn build 启动编译

### 代码质量和风格
husky+lint-staged+ eslint+prettier 代码commit 自动eslint检查控制代码质量， prettier自动格式化统一代码风格 , 可以自行扩展加上commit-msg 代码提交说明检查等。

### HRM
@vitejs/plugin-react-refresh 实现react HRM 

### 代码库（样式）按需加载
 样式按需加载 (组件不存在这个问题)，默认配置了antd 和zarm组件库,对于其他组件库， 参考vite-plugin-style-import 文档
```js
 plugins: [
      styleImport({
        libs: [
          {
            libraryName: 'antd',
            esModule: true,
            resolveStyle: (name) => {
              return `antd/es/${name}/style/index`;
            },
          },
          {
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`;
            },
          },
        ],
      }),
    ],
```

开发效果图

![vite-react.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e95544da2f2543b3a1b805acdfdb4c31~tplv-k3u1fbpfcp-watermark.image)