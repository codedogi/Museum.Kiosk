"use strict";

console.log('Starting application.');

var server = require('./server/server'),
    open = require('open'),
    port = process.env.PORT || 8080;

server.listen(port, function () {
    console.log('Express server listening on port: ' + port);
});

open('http://localhost:' + port);


