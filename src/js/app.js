'use strict';

var path = require('path'),
    express = require('express'),
    app = express(),
    env = process.env.NODE_ENV || 'development',
    config = require('./config.js')[env];

app.use('/assets', express.static(path.join(__dirname, '../../assets')))

    .use(function(req, res, next) {
        res.sendfile(path.join(__dirname, '../index.html'));
    })

    .listen(config.port, function() {
        console.log('Express server listening on port ' + config.port);
    });
