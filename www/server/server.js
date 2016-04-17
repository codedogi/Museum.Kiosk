"use strict";

var express = require('express'),
    path = require('path'),
    routes = require('../app/index/routes/index.server.routes.js'),
    bodyParser = require('body-parser'),
    swig = require('swig');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static('www/museum-app/app'));
app.use('/', routes);

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

module.exports = app;
app.set('env', 'develop');