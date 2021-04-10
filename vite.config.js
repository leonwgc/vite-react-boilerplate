import reactRefresh from '@vitejs/plugin-react-refresh';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

const modifyVars = {
  '@primary-color': '#004bcc',
  '@link-color': '#004bcc',
};

export default ({ command, mode }) => {
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
    define: {
      __client__: true,
      __dev__: true,
    },
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
    outDir: 'dist',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    logLevel: 'info',
  };

  if (command === 'serve') {
    config.plugins.unshift(reactRefresh());
    config.server = {
      port: 9004,
    };
  } else {
  }

  return config;
};
