var path = require('path');
var express = require('express');
var healthcheck = require('./healthcheck');
var app = express();
var PORT = 8000;
app.use(express.static(__dirname + '/dist'));
app.get('/_healthcheck', healthcheck);
console.log('Listening on port: ' + PORT);
app.listen(PORT);
