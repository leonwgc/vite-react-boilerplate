import path from 'path';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react-swc';

const devPort = 9004;

const customConfig = {
  publicPath: '/', // 打包生产环境时使用
  theme: '#004bcc', // antd 主题色
  supportLegacyBrowsers: false, //是否支持老的的浏览器，e.g. IE ，设置true生产打包时minify使用 terser, 否则使用更快的esbuild (包体积也稍大)
};

const modifyVars = {
  '@primary-color': customConfig.theme,
  '@link-color': customConfig.theme,
};

export default ({ command }) => {
  /**
   * @type {import('vite').UserConfig}
   */
  const config = {
    css: {
      preprocessorOptions: {
        less: {
          relativeUrls: false,
          javascriptEnabled: true,
          modifyVars,
        },
      },
    },
    // Define global variable replacements
    define: {
      __client__: true,
      __dev__: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
      },
    },
    logLevel: 'info',
  };

  if (command === 'serve') {
    config.server = {
      port: devPort,
    };
  } else {
    config.base = customConfig.publicPath;
    if (customConfig.supportLegacyBrowsers) {
      config.plugins.push(legacy());
    }

    config.build = {
      outDir: `dist`,
      assetsDir: '',
      emptyOutDir: true,
      assetsInlineLimit: 4096,
      manifest: true,
      minify: customConfig.supportLegacyBrowsers ? 'terser' : 'esbuild',
    };
  }

  return config;
};
