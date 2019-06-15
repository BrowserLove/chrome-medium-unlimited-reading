const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isProdEnv = process.env.NODE_ENV === 'production';
const isDevEnv = !isProdEnv;

module.exports = {
  entry: {
    'background': './src/background.js',
    'content': './src/content.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ]
  },
  optimization: {
    minimize: isProdEnv
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: isDevEnv,
      uglifyOptions: {
        mangle: false,
      },
    }),
    new CopyPlugin([
      { from: 'public', to: '.' },
    ]),
  ]
};
