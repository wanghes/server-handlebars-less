var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('helo world');
});

router.get('/infos',function(req,res){
	var lists = [
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"},
		{user:'name1',age:"12",content:"this is a test"}
	];
	res.json(lists);
});
module.exports = router;
