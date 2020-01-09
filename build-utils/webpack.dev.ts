import * as webpack from 'webpack';
import * as Dotenv from 'dotenv-webpack';
// import * as path from 'path';

// const bundlePath = path.resolve(__dirname, '../dist/');

const devConfig: webpack.Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development',
    }),
  ],
};

export default devConfig;
