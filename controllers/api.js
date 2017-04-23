var express = require('express')
  , router = express.Router()
  , API = require('../models/api')


router.get('/info', function(req, res) {
    API.info(res)
})

module.exports = router
