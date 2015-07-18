	var express=require('express');
	var router=express.Router();
	var bodyParser=require('body-parser');
	var user=require('./schema.js').user;
	router.get('/',function(req,res){
		user.find({},function(erro,data){
			if(erro) throw erro
			//res.sendStatus(200);
			res.render('welcome',{title:'welcome'});
			});
	//	res.render('welcome',{title:'welcome'});
	});
	router.post('/',bodyParser.json(),function(req,res){
		var body=req.body;
		res.json(body);
	});
module.exports= router;
