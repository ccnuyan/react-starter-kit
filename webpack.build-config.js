const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const rules = require('./webpack/commonRules.js');

const config = {
  entry: {
    app: ['./src/index.js'],
  },
  target: 'web',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, './build/assets/'),
    publicPath: '/assets/',
  },
  plugins: [
    new AssetsPlugin({
      path: path.resolve(__dirname, './build'),
      filename: 'assets.json',
      prettyPrint: true,
    }),
    new ExtractTextPlugin({
      filename: 'style.[hash].css',
    }),
    new UglifyJSPlugin({
      beautify: true,
    }),
  ],
  module: {
    rules,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

module.exports = config;
