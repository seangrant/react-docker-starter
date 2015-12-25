var express = require('express');
var app = express();
var PORT = 8000;
app.use(express.static('dist'));

console.log('Listening on port: ' + PORT);
app.listen(PORT);
