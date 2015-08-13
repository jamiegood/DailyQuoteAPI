
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
//var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var QuoteSchema = new Schema({
  text: { type: String, default: '' },
  quote_id: { type: String, default: '' },
  author: { type: String, default: '' }
  // email: { type: String, default: '' },
  // hashed_password: { type: String, default: '' },
  // salt: { type: String, default: '' }
});


// "received": "2015-03-18T17:21:42.571286",
// "user_id": 1337,
// "name": "Test User",
// "app_id": "YOUR_APP_ID",
// "_push": {
//   "ios_tokens": [
//     "111", "222", "333", "444"
//   ]
// },
// "message": "I come from planet Ion"
/**
 * User plugin
 */

//UserSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

QuoteSchema.method({

});

/**
 * Statics
 */

 // assign a function to the "statics" object of our animalSchema
 // animalSchema.statics.findByName = function (name, cb) {
 //   return this.find({ name: new RegExp(name, 'i') }, cb);
 // }
 //
 // var Animal = mongoose.model('Animal', animalSchema);
 // Animal.findByName('fido', function (err, animals) {
 //   console.log(animals);
 // });

QuoteSchema.static({
  getRandom: function(name, cb) {

    name.quote = this.findOne( cb);

    this.count(function(err, count) {
      if(err) console.error(err);

      var rand = Math.floor(Math.random() * count);
      this.findOne().skip(rand).exec(cb);
    })
    return name;
    //return this.findOne( cb);
    //console.log('calling static function', name, cb );
  }

});

// QuoteSchema.statics.random = function(callback) {
//   this.count(function(err, count) {
//     if (err) {
//       return callback(err);
//     }
//     var rand = Math.floor(Math.random() * count);
//     this.findOne().skip(rand).exec(callback);
//   }.bind(this));
// };
/**
 * Register
 */

mongoose.model('Quote', QuoteSchema);
