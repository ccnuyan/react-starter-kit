const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const rules = require('./webpack/commonRules.js');

const config = {
  entry: {
    app: ['./src/index.js'],
  },
  target: 'web',
  output: {
    filename: 'index.js',
    publicPath: '//localhost:8080/assets/',
  },
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, './build'),
      filename: 'assets.json',
      prettyPrint: true,
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new webpack.SourceMapDevToolPlugin(),
  ],
  module: {
    rules,
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build/public/assets'), // match the output path
    publicPath: '//localhost:8080/assets/', // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  },
};

module.exports = config;
