var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

//postcss plugins
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = {
  entry:  {
    bundle: 'app.jsx'
  },
  output: {
    path:     path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name].[chunkhash:8].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/app', 'scss', 'src'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test:    /\.scss?$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /assets/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer({browsers: ['last 2 version']}), cssnano];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[contenthash:8].css'),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new ManifestPlugin()
  ],
  node: {
    Buffer: true,
    net: 'empty',
    dns: 'empty'
  },
};
