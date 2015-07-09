/**
 * Created by shawnsandy on 7/7/15.
 */

var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    filename: 'html-component.js',
    minChunks: 2
});

module.exports = {
    entry: {
        main: './public/components.jsx',
    },
    output: {
        path: './component/',
        filename: '[name].js',
        publicPath: './src/libs/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader"},
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [commonsPlugin]
}