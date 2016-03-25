var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', (req, res, next) =>{
  res.render('index');
});

module.exports = router;