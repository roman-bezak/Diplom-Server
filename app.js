var express = require('express')
  , app = express()
  , db = require('./db')
  , bodyParser = require('body-parser')
  , config = require('config')
  , port = process.env.PORT || config.get('app.port')


app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./controllers'))

db.connect(config.get('DB.host'), function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  }
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
  console.log(new Date().toString());
})
