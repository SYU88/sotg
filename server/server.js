var express = require('express');

var app = express(),
  server, 
  PORT = 8000;

require('./config/middleware.js')(app, express);

module.exports = function(port) {
  var server = app.listen(port || PORT); 
  return server;
};
