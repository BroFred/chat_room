exports.chat=function(io){
io.on('connection',function(socket){
	console.log("connected!");
	socket.on('disconnect',function(){
		console.log("See you next time");
	}); 
	socket.on('location',function(message){
		console.log(Math.pow(message[0],2)+Math.pow(message[1],2),message);

	})
});
}