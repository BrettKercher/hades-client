/**
 * Created by Brett on 4/29/2017.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, '../src/index.js')
    ],
    output: {
        path: '/dist/',
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(png|jpg)$/, use: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ],
    devtool: 'cheap-module-source-map '
};
