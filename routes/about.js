var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('default', {title: 'About', message: 'a short biograpghy'});
});

module.exports = router;
