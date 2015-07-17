exports.chat=function(io){
io.on('connection',function(socket){
	console.log("connected!");
	socket.on('disconnect',function(){
		console.log("See you next time");
	})
});
}