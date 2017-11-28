const OAuth = require('oauth')
require('dotenv').config()
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.consumerkey,
  process.env.consumersecret,
  '1.0A',
  null,
  'HMAC-SHA1'
)

var usertimeline = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    process.env.accesstoken, //test user token
    process.env.accesstokensecret, //test user secret
    function (e, data, hasil){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin");
      res.send(data)
  })
}

var hometimeline = (req, res) => {
  oauth.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    process.env.accesstoken, //test user token
    process.env.accesstokensecret, //test user secret
    function (e, data, hasil){
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin");
      res.send(data)
  })
}

var searchtimeline = (req, res) => {
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.id}`,
    process.env.accesstoken, //test user token
    process.env.accesstokensecret, //test user secret
    function (e, data, hasil){
      res.send(data)
  })
}

var posting = (req, res) => {
  oauth.post(
    "https://api.twitter.com/1.1/statuses/update.json",
    process.env.accesstoken, process.env.accesstokensecret,
    {"status":req.body.status},
    function(error, data) {
      if(!error) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin");
        res.send('berhasil')
      }
    }
  )
}


module.exports = {
  usertimeline,
  hometimeline,
  searchtimeline,
  posting
};
