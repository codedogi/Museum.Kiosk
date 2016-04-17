"use strict";

var express = require('express'),
    router = express.Router(),
    indexCtrl = require('../controllers/index.server.controller.js');

/* GET Home Page */
router.get('/', function (request, response) {
    var menus = indexCtrl.getMenus();
    response.render('index.html', {Menus: menus });
});

module.exports = router;
