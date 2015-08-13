
/**
 * Module dependencies
 */

var fs = require('fs');
//var express = require('express');
var mongoose = require('mongoose');
//var passport = require('passport');
console.log('hello cruel world');
//var config = require('./config/config.js');
var config = require('./config/config.js');
console.log(config);

//var app = express();
//var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
// fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
//   if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
// });

var usermongoose = require(__dirname + '/app/models/User');

var User = usermongoose.model('User');

User.find(
  function(err, kittens) {
    //if err return console.error(err);

  console.log('find all back');
});

//app.listen(port);
console.log('Express app started on port ');
