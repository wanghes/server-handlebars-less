var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('admin', { title: '后台' });
});
module.exports = router;