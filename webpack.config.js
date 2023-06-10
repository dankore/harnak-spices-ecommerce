/* global config:true */

const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy files', function () {
      fse.copySync('./app/assets/css/main.css', './dist/assets/css/main.css');
    });
  }
}

config = {
  entry: './app/main.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'app'),
    filename: 'bundled.js',
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.sharpMinify,
        options: {
          resize: {
            width: 800,
            height: 1000,
            fit: 'cover',
            position: 'center',
          },
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            [
              'svgo',
              {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            ],
          ],
        },
      },
      include: /images\/products/, // This will only include images in the 'images/products' directory
    }),
    new CopyPlugin({
      patterns: [{ from: 'app/assets/images', to: 'assets/images' }],
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/index-template.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  mode: 'development',
  module: {
    rules: [
      // JS LOADER
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: '12' } }]],
          },
        },
      },
      // CSS LOADER
      { test: /\.css$/, use: 'css-loader' },
      // IMAGE LOADER
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};

if (currentTask == 'webpackDev' || currentTask == 'dev') {
  config.plugins.push(new ReactRefreshWebpackPlugin());
  config.devtool = 'source-map';
  config.devServer = {
    port: 3000,
    static: path.join(__dirname, 'app'),
    hot: true,
    historyApiFallback: { index: 'index.html' },
  };
}

if (currentTask == 'webpackBuild') {
  config.plugins.push(new CleanWebpackPlugin(), new RunAfterCompile());
  config.mode = 'production';
  config.output = {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  };
}

module.exports = config;
