/**
 * Created by shawnsandy on 3/19/15.
 */

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;
const path = require('path');
const nodeModulesDirectory = path.resolve(__dirname, 'node_modules');

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js');
const uglifyPlugin = new UglifyJsPlugin({minimize: true });

const basePlugins = [commonsPlugin];
const exts = '.js';
const outputPath = './app/';

if (env === 'build') {
  basePlugins = [commonsPlugin, uglifyPlugin];
  exts = '.min.js';
  outputPath = './dist/';
}

module.exports = {
  entry: {
    app: './public/app.js',
    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react', 'react-dom'],
  },
  output: {
    path: outputPath,
    filename: '[name]' + exts,
    publicPath: './src/libs/',
  },
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      exclude: [nodeModulesDirectory],
      loader: 'babel',
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    }, {
      test: /(\.jsx|\.js)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    }],
  },
  watch: true,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
  plugins: basePlugins,
};
