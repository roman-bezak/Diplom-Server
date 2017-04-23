var express = require('express')
  , router = express.Router()

router.get('/', function(req, res) {
  res.render('add/add')
})

router.post("/", function (req, res) {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router
