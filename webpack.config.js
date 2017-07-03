// var webpack  = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    contact: './dist/contact',
    about: './dist/about'
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
      },
      {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
      }
    ]
  }
};
