var express=require('express');
var router=express.Router();
var bodyParser=require('body-parser');
router.get('/',function(req,res){
	res.sendStatus(200);
});
router.post('/',bodyParser.json(),function(req,res){
	console.log(req.query);
	var body=req.body;
	res.json(body);
});


module.exports= router;
