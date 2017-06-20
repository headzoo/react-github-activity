'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

const config = {
  entry: [
    './src/index.js',
    './src/scss/main.scss'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'react-github-stream',
    libraryTarget: 'umd'
  },
  context: resolve(__dirname, './'),
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css',
      disable: false,
      allChunks: true
    })
  ],
  externals: [
    {
      'react': {
        root: 'react',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'react-dom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      },
      'prop-types': {
        root: 'prop-types',
        commonjs2: 'prop-types',
        commonjs: 'prop-types',
        amd: 'prop-types'
      }
    }
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
            { loader: 'sass-loader' }
          ]
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
