const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // create index.html file based off template in src
const CleanWebpackPlugin = require('clean-webpack-plugin'); // deletes old dist folder for clean build

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '',
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {} ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
};