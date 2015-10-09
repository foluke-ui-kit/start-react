/**
 * Created by shawnsandy on 3/19/15.
 */

var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js');

module.exports = {
    entry: {
        sample: './public/components.js',
        // Since react is installed as a node module, node_modules/react,
        // we can point to it directly, just like require('react');
        vendors: ['react','react-dom']
            },
    output: {
        path: './app/',
        filename: '[name].js',
        publicPath: './src/libs/'
    },
    module: {
        loaders: [
            { test: /(\.jsx|\.js)$/, exclude: [node_modules_dir], loader: "babel"},
            { test: /\.less$/, loader: 'style-loader!css-loader!less'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /(\.jsx|\.js)$/, loader: "eslint-loader", exclude: /node_modules/ }
        ]
    },
    watch: true,
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [commonsPlugin]
}
