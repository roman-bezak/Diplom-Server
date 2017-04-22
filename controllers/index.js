var express = require('express')
  , router = express.Router()

router.use('/add', require('./add'))

router.get('/', function(req, res) {
  res.render('index')
})

router.get('*', function(req, res) {
    res.status(404).render('404');
})


module.exports = router
