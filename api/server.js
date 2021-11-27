const express = require("express");
const app= express();
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const cors= require('cors');
const path= require('path');
//const config= require('./config/database');
const port= process.env.PORT || 4000;
const lol= require('./schema')
const url="mongodb://localhost:27017/"
// Connect to database
mongoose.connect(url);

// On connection
mongoose.connection.on('connected', () => {	
	console.log('Connected to database ');
});

// On error
mongoose.connection.on('error', (err) => {
	console.log('Database error: ');
});

// Set up middleware
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000',
credentials: true}));



//listen to the port
app.listen(port, () => {
	console.log('Server started on port '+port);
});

app.get('/data', (req, res) => {
	console.log(req.url)
	
  res.send(vals)
})




app.post('/upate', function (req, res) {

	console.log(req.params)

  res.send('postit')
})



app.post('/add', function (req, res) {
	const user = req.body;
  const newUser = new lol(user);
   newUser.save();

  res.json(user);

  res.send(
  )
})

app.get("/getposts", (req, res) => {
	lol.find({}, (err, result) => {
	  if (err) {
	    res.json(err);
	  } else {
	    res.json(result);
	  }
	});
      });










      
const vals={
	"ob1":{
		Heading:"hello",
		date:25,
		urls:"https://www.bing.com/images/search?q=images&id=D5D437EDB627F2E67F415441367EDC6961B4652F&FORM=IQFRBA"
		,content:"this is ob1"
	},
	"ob2":{
		Heading:"hello2",
		date:26,
		image:"https://www.bing.com/images/search?q=images&id=39051DF7778CF330A85379CE6C62D2256D50B890&FORM=IQFRBA"
		,content:"this is ob2"
	},
	"ob3":{
		Heading:"hello3",
		date:23,
		urls:"https://www.bing.com/images/search?q=images&id=FAE51C53AAFA2CF03ED2E32D1DAD6CA8ED967EF2&FORM=IQFRBA"
		,content:"this is ob3"
		}

}



