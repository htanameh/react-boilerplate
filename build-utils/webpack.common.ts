import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DartSass from 'sass';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const bundlePath = path.resolve(__dirname, '../dist/');
// const entryPath = path.resolve(__dirname, '../src/index.tsx');

const commonConfig: webpack.Configuration = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true,
              },
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        query: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: ['@babel/plugin-syntax-dynamic-import'],
        },
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: DartSass,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.ts(x?)$/i,
        parallel: 4,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    symlinks: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Upshotly',
      template: './src/index.html',
    }),
  ],
  output: {
    path: bundlePath,
    publicPath: '/',
    filename: 'upshotly.[name].js',
  },
};

export default commonConfig;
