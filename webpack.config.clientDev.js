import Webpack, {
    HotModuleReplacementPlugin,
    NoErrorsPlugin
    } from 'webpack';

import baseConfig from './webpack.config.base';
import mergeConfig from './mergeConfig';
import path from 'path';

const clientDevConfig = mergeConfig(baseConfig, {
  entry: [
    'webpack-hot-middleware/client',
    './src'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoErrorsPlugin(),
    new Webpack.DefinePlugin({
      "process.env": {

        // Mainly used to require CSS files with webpack, which can happen only on browser
        // Used as `if (process.env.BROWSER)...`
        BROWSER: JSON.stringify(true),

        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify("development")

      }
    })
  ],
  devtool: 'eval'
});

export default clientDevConfig;