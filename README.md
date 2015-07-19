[![Build Status](https://img.shields.io/travis/madhums/node-express-mongoose.svg?style=flat)](https://travis-ci.org/madhums/node-express-mongoose)
[![Gittip](https://img.shields.io/gratipay/madhums.svg?style=flat)](https://www.gratipay.com/madhums/)
[![Dependencies](https://img.shields.io/david/madhums/node-express-mongoose.svg?style=flat)](https://david-dm.org/madhums/node-express-mongoose)


## Node Express Mongoose

A boilerplate application for building web apps using express, mongoose and passport.

Read the [wiki](https://github.com/madhums/node-express-mongoose/wiki) to understand how the application is structured.

## Installation and Usage

    $ git clone https://github.com/madhums/node-express-mongoose.git
    $ cd node-express-mongoose
    $ npm install
    $ npm start

Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`).

Checkout the [apps that are built using this approach](https://github.com/madhums/node-express-mongoose/wiki/Apps-built-using-this-approach)

## License

MIT



curl -d '{"good_food":["pizza"]}' -H 'content-type:application/json' "http://localhost:3000/user"
curl -d '{"good_food":["pizza"]}' -H 'content-type:application/json' "http://dailyquoteapi.herokuapp.com/users"


this is a simple test.
curl -d '{"name":"jamie"}' -H 'content-type:application/json' "http://dailyquoteapi.herokuapp.com/user"



example:

{
  "received": "2015-03-18T17:21:42.571286",
  "user_id": 1337,
  "name": "Test User",
  "app_id": "YOUR_APP_ID",
  "_push": {
    "ios_tokens": [
      "111", "222", "333", "444"
    ]
  },
  "message": "I come from planet Ion"
}
