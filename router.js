var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
router.get('/',function(req,res){
	res.render('welcome',{title:'welcome'});
});
router.post('/',bodyParser.json(),function(req,res){
	var body=req.body;
	res.json(body);
});
module.exports= router;
