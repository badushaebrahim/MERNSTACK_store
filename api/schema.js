var mongoose = require('mongoose')

var schema =mongoose.Schema;
var mode = new schema ({
	head:String,
	url:String,
	content:String,
	date:Date,
	likes:Number
});

var modelr =mongoose.model("post", mode );
module.exports = modelr;