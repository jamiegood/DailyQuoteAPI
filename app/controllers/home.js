
/*!
 * Module dependencies.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'Node Express Mongoose Boilerplate'
  });
};


exports.user = function (req, res) {
  // res.render('home/index', {
  //   title: 'Node Express Mongoose Boilerplate'
  // });

  // save to USer models
  var user = new User(req.body);

  user.save(function(err) {
      console.log(err);

        res.json(req.body);
  });

  console.log(req.body);

};
