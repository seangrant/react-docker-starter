var path = require('path');
var express = require('express');
var app = express();
var PORT = 8000;
app.use(express.static(__dirname + '/dist'));
app.get('/', function (req, res) {
  res.send('Hello world\n' + __dirname);
});
console.log('Listening on port: ' + PORT);
app.listen(PORT);
