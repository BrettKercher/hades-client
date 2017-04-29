/**
 * Created by Brett on 4/29/2017.
 */

var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./config/webpack.dev.config');
var path = require('path');
var app = express();

const isDevelopment = app.get('env') !== 'production';
const port = process.env.PORT || 9000;
const distDir = path.join(__dirname, 'dist');
const compiler = webpack(config);

if(!isDevelopment) {
    app.use(express.static(distDir));
}
else {
    //use webpack to serve files instead of express.static
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {colors: true}
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(function(req, res) {
    res.sendFile(path.resolve(distDir + '/index.html'));
});

var server = app.listen(port, function () {
    var address = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://' + address + ':' + port);
});