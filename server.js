"use strict";
var express = require('express');

var app = express();
var port = process.env.PORT ? process.env.PORT : 3000;

app.get('/', function(req, res){
  var html = '<h2>Hello World</h2>' +
  '<a href="/localtime">Local Time</a> | ' +
  '<a href="/myname/George">Name API</a>';
  res.status(200);
  res.send(html);
});

//app.get code mainly built with research on http://expressjs.com/4x/api.html
app.get('/myname/:name', function(req, res) {
  var message = { msg : "Hello " + req.param('name') + "!" };
  res.status(200);
  res.json(message);  //http://stackoverflow.com/a/10667299
});

app.get('/localtime', function(req, res) {
  var localtime = new Date();  //date object and it's methods researched on MDN
  res.status(200);
  res.send(localtime.toLocaleString());
});

app.listen(port);
console.log('Server running on port: ' + port);