var express = require('express');
var router = express.Router();
var wens = [
		{id:1,title:"assasaas","content":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"},
		{id:2,title:"bbbbbbbbbbbb","content":"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"}
	]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/infos',function(req,res){
	res.render('infos',{
		wens:wens
	})
});

router.get('/infos/:id',function(req,res){
	var id = req.params.id;
	var doc=null;
	wens.forEach(function(value){
		if(id==value.id){
			doc = value;
		}
	});
	res.render('detail_info',{
		title:'详情',
		doc:doc
	})
});

router.get('/setInfo',function(req,res){
	res.render('setInfo',{
		title:"添加用户信息"
	});
});

module.exports = router;
