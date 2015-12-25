var path = require('path');
var express = require('express');
var app = express();
var PORT = 8000;
app.use(express.static(__dirname + '/dist'));

console.log('Listening on port: ' + PORT);
app.listen(PORT);
