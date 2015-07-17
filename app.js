var express=require('express');
var app=require('http');
var exp=express();
var socket = require('socket.io')(app);
app.Server(exp);
var router=require('./router.js'); 
exp.use('/user',router);
exports.exp=exp;
exports.socket=socket;
