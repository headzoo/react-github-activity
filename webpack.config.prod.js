'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

const config = {
  entry: {
    'index': './src/scss/main.scss'
  },
  output: {
    path:              resolve(__dirname, 'dist'),
    publicPath:        '',
    filename:          '[name].js',
    sourceMapFilename: '[name].map'
  },
  context: resolve(__dirname, './'),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle:   {
        screw_ie8:   true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test:    /\.scss$/,
        exclude: /node_modules/,
        use:     ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:      [
            'css-loader',
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      }
    ]
  }
};

module.exports = config;
