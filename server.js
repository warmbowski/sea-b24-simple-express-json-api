'use strict';
var express = require('express');
//var bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser());
var port = process.env.PORT;

app.get('/', function(req, res){
  var html = 'Hello World';
  
  res.send(html);
});

app.get('/localtime', function(req, res) {
  var localtime = Date.now();
  var ldate = localtime.getFullYear().toString() + '-' +
    localtime.getMonth().toString() + '-' +
    localtime.getDate().toString();
  var ltime = localtime.getHours().toString() + ':' +
    localtime.getMinutes().toString() + ':' +
    localtime.getSeconds().toString();
  
    
  //res.sendStatus(200);
  res.send(ldate + " " + ltime);
});

app.listen(port);

console.log('Server running on port: ' + port);