/**
 * Created by shawnsandy on 3/19/15.
 */

var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('libs.js');

module.exports = {
    entry: {
        elements: './src/react-components/src/elements.jsx',
        htmlElements: './src/react-components/src/html-elements.jsx',
        samples: './src/react-components/src/samples.jsx',
        icons: './src/react-components/src/icons.jsx'
    },
    output: {
        path: './src/react-components/app/',
        filename: '[name].js',
        publicPath: './src/react-components/src/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
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
