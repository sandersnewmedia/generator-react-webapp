var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');

//postcss plugins
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = {
  entry:  {
    bundle: 'index.jsx'
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
        test: /\.(png|woff|woff2|eot|ttf|svg|otf|jpg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.[contenthash:8].css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    }),
    new ManifestPlugin()
  ]
};
