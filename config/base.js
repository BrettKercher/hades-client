const path = require('path');
const webpack = require('webpack');

module.exports = function() {
    return {
        entry: {
            app: [path.resolve(__dirname, '../src/index.js')]
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/dist/',
            filename: 'bundle.js',
            sourceMapFilename: '[name].map'
        },
        module: {
            rules: [
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.(png|jpg)$/, use: 'url-loader?limit=8192' }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    };
};