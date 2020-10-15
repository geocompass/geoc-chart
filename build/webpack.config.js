const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname,'../src/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname,'../lib'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*']
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/instances/mapbox/static'),
          to: path.resolve(__dirname, '../lib/static')
        }
      ]
    })
  ]
}
