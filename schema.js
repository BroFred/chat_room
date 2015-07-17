var mongo=require('mongoose');
var user_schema= new mongo.Schema({Username:{ type: String, unique: true }, password:String});
var user = mongo.model("user",user_schema);
exports.user=user;
