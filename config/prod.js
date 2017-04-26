const webpackMerge = require('webpack-merge');
const base = require('./base.js');
const webpack = require('webpack');

module.exports = function(env) {
    return webpackMerge(base(), {
        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(false)
            })
        ]
    })
}
