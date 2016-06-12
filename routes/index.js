var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('default', { title: 'Express', message: 'Welcome to my website' });
});

module.exports = router;
