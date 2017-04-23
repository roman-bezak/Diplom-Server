var express = require('express')
  , router = express.Router()
  , Add = require('../models/add')

router.get('/', function(req, res) {
  res.render('add/add')
})

router.post("/", function (req, res) {
    Add.addNewProjectToDb(req.body)
    res.redirect('/')
})

module.exports = router
