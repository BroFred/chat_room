var request=require('supertest');
var app=require('./app.js').exp;
describe('test post',function(){
	it('fun',function(done){
		var temp={"a":1};
		request(app)
		.post('/user')
		.send({a:1})
		.expect('{"a":1}',done);
	});
});
