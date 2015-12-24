var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Custom template',
    template: 'index.html', // Load a custom template
    inject: 'body' // Inject all scripts into the body
  })],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    },{
      test: /\.html?$/,
      loader: 'file'
    }]
  }
};

module.exports = config;
