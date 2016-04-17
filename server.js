"use strict";

console.log('Starting application.');

var server = require('./www/index'),
    port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Express server listening on port: ' + port);
});



