var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
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
      loader: 'babel',
      exclude: [
          path.resolve(__dirname, "node_modules"),
      ],
      // Options to configure babel with
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    },{
      test: /\.html?$/,
      loader: 'file'
    }]
  }
};

module.exports = config;
