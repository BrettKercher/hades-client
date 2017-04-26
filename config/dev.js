const webpackMerge = require('webpack-merge');
const base = require('./base.js');
const webpack = require('webpack');

module.exports = function(env) {
    return webpackMerge(base(), {
        devtool: 'cheap-module-source-map ',
        devServer: {
            port: 8080,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal'
        },
        plugins: [
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(true)
            })
        ]
    })
};