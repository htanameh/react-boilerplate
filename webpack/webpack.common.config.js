/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const Fiber = require('fibers');
// const DartSass = require('sass');

// the path(s) that should be cleaned
// let pathsToClean = ['./dist', './build'];

// the clean options to use
// let cleanOptions = {
//     verbose: true,
//     dry: false,
// };

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: isDevelopment,
              },
            },
          },
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
        // query: {
        //     name: '[name].[ext]'
        // },
      },
      // {
      //     test: /\.ts(x?)$/,
      //     exclude: /node_modules/,
      //     use: [
      //         {
      //             loader: "ts-loader"
      //         }
      //     ]
      // },
      // // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // {
      //     enforce: "pre",
      //     test: /\.js$/,
      //     loader: "source-map-loader"
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/react'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            [
              '@babel/plugin-transform-runtime',
              {
                regenerator: true,
              },
            ],
            '@babel/plugin-syntax-dynamic-import',
          ],
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|otf|eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader?name=[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: 4,
        sourceMap: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    // new HtmlWebpackPlugin({
    //     // Also generate a test.html
    //     filename: path.resolve(__dirname, '../dist/404.html'),
    //     template: path.resolve(__dirname, '../src/404.html'),
    // }),
    // new FaviconsWebpackPlugin({
    //     logo: path.resolve(__dirname, '../src/img/upshotly-favicon.png'),
    //     title: 'Upshotly',
    //     inject: true,
    //     background: '#ffffff',
    // }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new CompressionPlugin({
      test: /\.js$|\.html$/,
      filename: '[path].gz[query]',
      algorithm: 'gzip',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
};
