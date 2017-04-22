// var express = require('express')
//   , app = express()
//
// var db = require('./db')
//
// app.engine('jade', require('jade').__express)
// app.set('view engine', 'jade')
//
// // app.use('/comments', require('./controllers/comments'))
// // app.use('/users', require('./controllers/users'))
//
// // Connect to Mongo on start
// db.connect('mongodb://localhost:27017/diplom-server-db', function(err) {
//   if (err) {
//     console.log('Unable to connect to Mongo.')
//     process.exit(1)
//   }
// })
//
//
// app.listen(3000, function() {
//   console.log('Listening on port 3000...')
// })


var express = require('express')
  , app = express()
  , db = require('./db')
  , bodyParser = require('body-parser')
  , config = require('config')
  , port = process.env.PORT || config.get('app.port')

console.log(config.get('DB.host'));

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

db.connect('mongodb://localhost:27017/diplom-server-db', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  }
})

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
