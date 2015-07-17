var express=require('express');
var exp=express();
var socket = require('socket.io')(app);
var app=require('http').Server(exp);
var router=require('./router.js'); 
exp.use('/user',router);
exports.exp=exp;
exports.socket=socket;
exports.app=app;
