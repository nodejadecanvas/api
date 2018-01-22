var express = require('express');
var router = express.Router();

/* GET canvas1 page. */
router.get('/', function(req, res, next) {
  res.render('canvas1');
});

module.exports = router;
