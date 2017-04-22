var express = require('express')
  , router = express.Router()

router.use('/add', require('./addproject'))

router.get('/', function(req, res) {
  res.render('index')
})

router.get('*', function(req, res) {
  res.status(404);
  res.render('404')
})


module.exports = router
