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
      test: /\.js?$/,
      loader: 'babel',
      exclude: [
          path.resolve(__dirname, "node_modules"),
      ],
      // Options to configure babel with
      query: {
        plugins: ['transform-runtime', 'transform-decorators-legacy'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    },{
      test: /\.html?$/,
      loader: 'file'
    }]
  },
  resolve: {
    alias: {
      'config': path.join(__dirname, 'src/config.js'),
      'theme.less': path.join(__dirname, 'src/theme/theme.less'),
      'store': path.join(__dirname, 'src/store')
    },
    modulesDirectories: ['node_modules', 'wip_modules', 'components']
  }
};

module.exports = config;
