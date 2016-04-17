"use strict";

var express = require('express'),
    path = require('path'),
    routes = require('./app/index/routes/index.server.routes.js'),
    bodyParser = require('body-parser'),
    swig = require('swig');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(express.static('app'));
app.use('/', routes);

// content folders
app.use('/css', express.static(path.join(__dirname, './app/css')));
app.use('/third-party', express.static(path.join(__dirname, './app/third-party')));
app.use('/video', express.static(path.join(__dirname, './app/video')));
app.use('/app.js', express.static(path.join(__dirname, './app/app.js')));

// error handlers

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.error(req.path);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'develop') {
    app.use(function (err, req, res) {
        console.error(req.path);
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
    console.error(req.path);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('env', 'develop');

module.exports = app;
