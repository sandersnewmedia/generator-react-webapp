var path = require('path');
var webpack = require('webpack');
var dotenv = require('dotenv');
dotenv.load();
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//postcss plugins
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://127.0.0.1:8081/',
      'webpack/hot/only-dev-server',
      'index.jsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://127.0.0.1:8081/assets/',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src/app', 'scss', 'src'],
    extensions:         ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test:    /\.scss?$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /assets/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k]);
        return o;
      }, {})
    })
  ],
  node: {
    Buffer: true,
    net: 'empty',
    dns: 'empty'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8081,
    proxy: {
      '*': 'http://127.0.0.1:' + process.env.PORT
    },
    host: '127.0.0.1'
  }
};
