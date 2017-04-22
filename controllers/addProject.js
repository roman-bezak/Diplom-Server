var express = require('express')
  , router = express.Router()

router.get('/add', function(req, res) {
  res.render('index')
})

module.exports = router
