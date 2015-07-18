
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
//var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var UserSchema = new Schema({
  received: { type: String, default: '' },
  user_id: { type: String, default: '' },
  name: { type: String, default: '' },
  app_id: { type: String, default: '' },
  _push: [],
  message: { type: String, default: '' },
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

UserSchema.method({

});

/**
 * Statics
 */

UserSchema.static({

});

/**
 * Register
 */

mongoose.model('User', UserSchema);
