const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'hahahahhahaha',
        template: 'src/assets/index.html'
      })],
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["css-loader"],
          },
        ],
      },
};