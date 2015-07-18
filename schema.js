var mongo=require('mongoose');
if(!mongo.connection.readyState){
	mongo.connect('mongodb://localhost/test');
	var user_schema= new mongo.Schema({Username:{ type: String, unique: true }, password:String});
	var user = mongo.connection.model("user",user_schema);
	exports.user=user;
}
else{
	exports.user=mongo.connection['models']['user'];
}




