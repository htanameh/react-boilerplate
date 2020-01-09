import * as Dotenv from 'dotenv-webpack';
import * as webpack from 'webpack';

const prodConfig: webpack.Configuration = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
};

export default prodConfig;
