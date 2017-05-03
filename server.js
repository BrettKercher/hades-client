/**
 * Created by Brett on 4/29/2017.
 */
'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack.dev.config');
const path = require('path');
const app = express();

const isDevelopment = app.get('env') !== 'production';
const port = process.env.PORT || 7000;
const distDir = path.join(__dirname, 'dist');
const compiler = webpack(config);

if(!isDevelopment) {
    app.use(express.static(distDir));

    app.get('*', function response(req, res) {
        res.sendFile(path.join(distDir, 'index.html'));
    });
}
else {
    //use webpack to serve files instead of express.static
    let middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true,
        stats: {colors: true}
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.use('*', function (req, res, next) {
        const filename = path.join(compiler.outputPath,'index.html');
        compiler.outputFileSystem.readFile(filename, function(err, result) {
            if (err) {
                return next(err);
            }
            res.set('content-type','text/html');
            res.send(result);
            res.end();
        });
    });
}

// app.use(function(req, res) {
//     res.sendFile(path.resolve(distDir + '/index.html'));
// });

let server = app.listen(port, function () {
    let address = server.address().address;
    let port = server.address().port;
    console.log('Listening at http://' + address + ':' + port);
});