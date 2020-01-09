/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const merge = require('webpack-merge');

const bundlePath = path.resolve(__dirname, '../dist/');

module.exports = merge(require('./webpack.common.config'), {
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false,
  },
  output: {
    filename: 'upshotly.[name].js',
    path: bundlePath,
    publicPath: '/',
  },
  devServer: {
    contentBase: bundlePath,
    port: 3000,
    publicPath: '/',
    hot: true,
    open: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
