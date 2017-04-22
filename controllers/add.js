var express = require('express')
  , router = express.Router()
  , d = require('../db')

router.get('/', function(req, res) {
  res.render('add/add')
})

router.post("/", function (req, res) {
    console.log(req.body)
    function Tree(name) {
      this.name = name;
    }

    var theTree = new Tree("Красное дерево");
    d.get().collection('new').insert(theTree);
    res.redirect('/')
})

module.exports = router
