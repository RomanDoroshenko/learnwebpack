module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
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
