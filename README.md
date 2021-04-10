#  基于vite2的react脚手架

[vite-react-boilerplate](https://github.com/leonwgc/vite-react-boilerplate)

### 开发编译
* yarn start 启动开发
* yarn build 启动编译

### 代码质量和风格
husky/lint-staged/eslint+prettier 暂存区代码提交自动检查修复 , 可以自行扩展git hooks , e.g. commit-msg 代码提交检查等。

### HMR
@vitejs/plugin-react-refresh 实现react HMR 

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

### 自定义
1. publicPath 
2. 打包目标浏览器
3. mififier 压缩terser/esbuild 自动切换
4. 主题色配置 （antd）

```js
const customConfig = {
  publicPath: '/', // 打包生产环境时使用
  theme: '#004bcc', // antd 主题色
  supportLegacyBrowsers: false, //是否支持老的的浏览器，e.g. IE ，设置true生产打包时minify使用 terser, 否则使用更快的esbuild (包体积也稍大)
};

const modifyVars = {
  '@primary-color': customConfig.theme,
  '@link-color': customConfig.theme,
};
```

开发效果图

![vite-react.png](https://camo.githubusercontent.com/a02ea217c8156b6df7b6d279b9ba4fcc7884cbb405a7d0fae445914a869b9c22/68747470733a2f2f70362d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f65393535343464613266323534336233613162383035616364666462346333317e74706c762d6b3375316662706663702d77617465726d61726b2e696d616765)