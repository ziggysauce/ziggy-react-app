const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // create index.html file based off template in src
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // create separate css file for prod
const CleanWebpackPlugin = require('clean-webpack-plugin'); // deletes old dist folder for clean build

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.scss$/,
        use: process.env.NODE_ENV = 'development' ? 
        ['style-loader', 'css-loader', 'sass-loader'] :
        ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  plugins: process.env.NODE_ENV = 'development' ? 
  [
    new CleanWebpackPlugin('dist', {} ),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ] :
  [
    new ExtractTextPlugin(
      {filename: 'style.[hash].css', disable: false, allChunks: true}
    ),
  ],
  devServer: {
    hot: true,
  },
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map'
};