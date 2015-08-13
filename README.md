
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

# Push instructions

Using the REST API
Ionic.io has an API endpoint which you can use to send push notifications from your backend server (or with a curl for testing).

You can send a push notification by making a POST to https://push.ionic.io/api/v1/push with the following headers.

Content-Type: application/json
X-Ionic-Application-Id: YOUR_APP_ID
The POST data should be a JSON object of the following format as well ("ios", and "android" sections of
"notification" are optional customizations):

{
  "tokens":[
    "b284a6f7545368d2d3f753263e3e2f2b7795be5263ed7c95017f628730edeaad",
    "d609f7cba82fdd0a568d5ada649cddc5ebb65f08e7fc72599d8d47390bfc0f20"
  ],
  "notification":{
    "alert":"Hello World!",
    "ios":{
      "badge":1,
      "sound":"ping.aiff",
      "expiry": 1423238641,
      "priority": 10,
      "contentAvailable": true,
      "payload":{
        "key1":"value",
        "key2":"value"
      }
    },
    "android":{
      "collapseKey":"foo",
      "delayWhileIdle":true,
      "timeToLive":300,
      "payload":{
        "key1":"value",
        "key2":"value"
      }
    }
  }
}
Finally, your POST should authenticate using Basic Access Authentication with no password and your Private API key for a username. Below is an example of this using Python and urllib2:

post_data = YOUR_POST_JSON_OBJECT
app_id = YOUR_APP_ID
private_key = YOUR_PRIVATE_API_KEY
url = "https://push.ionic.io/api/v1/push"
req = urllib2.Request(url, data=post_data)
req.add_header("Content-Type", "application/json")
req.add_header("X-Ionic-Application-Id", app_id)
b64 = base64.encodestring('%s:' % private_key).replace('\n', '')
req.add_header("Authorization", "Basic %s" % b64)
resp = urllib2.urlopen(req)
