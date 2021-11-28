var mongoose = require('mongoose')

var schema =mongoose.Schema;
var mode = new schema ({
	username:String,
	email:String,
	pass:String,

});

var modelr2 =mongoose.model("userlist", mode );
module.exports = modelr2;