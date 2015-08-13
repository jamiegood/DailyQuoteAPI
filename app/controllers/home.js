
/*!
 * Module dependencies.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quote = mongoose.model('Quote');
var request = require('request');
var config = require('../../config/config');
var pkg = require('../../package.json');

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

exports.pusher = function(req, res) {

  User.find({"reminder": 'true'}, function(error, result) {

    if (error) console.error(error);

    console.log("AM AM FOUND USER", result);
    result.forEach(function(elem) {
      var eg = elem;
          elem.hot = 'BGGGGGGG';
          console.log(elem);

          Quote.getRandom('balh', function(err, quote) {
            if (err) console.error(err);

            var bodyeg = {
              "tokens":["DEVICE_TOKEN"],
              "notification":
                {"alert":"I come from planet Ion."}
              };

            var options = {
              'method': 'POST',
              'uri': config.pushURL,
              'auth': {
                'user': config.ionicSecretKey
              },
              'headers': {
                'X-Ionic-Application-Id': config.ionicAppID,
                'content-type': 'application/json'
              },
              'json': true,
              'body':bodyeg
            };

            //console.log(options);

            function callbackXX(error, response, body) {
              if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                console.log('I AM SUCCESS--->>>>>');
                console.log(body);
                //console.log(info.stargazers_count + " Stars");
                //console.log(info.forks_count + " Forks");
              } else {
                console.error(error);
                console.log(body);
                console.log(response.statusCode);
              }
            }
            //
             request(options, callbackXX);
            //console.log(eg);
            //return quote;


            //return result;
            //return result;
            //result[i].quote = quote;
          })
    })


    res.json(result);
  })
};


exports.quotes = function(req, res) {

  Quote.find({}, function(error, result) {

    if (error) console.error(error);

    res.json(result);
  })
};

exports.randomquote = function(req, res) {

  console.log('In randomquote');
  Quote.getRandom('jamie', function(err, result) {
    if (err) console.error(err);
    //return result;
    return result;
  })
};
