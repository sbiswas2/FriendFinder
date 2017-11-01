//  // Dependencies
// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var PORT = process.env.PORT || 3000;
var path = require('path');
var friends = require('../data/friends.js');
// console.log(friends);
// // Arrays for answers
var friend = [];

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

module.exports = function(app) {
	// Routing
	// link not working properly and not routing to firends.js
	app.get("/api/friends", function(req, res){
		res.sendFile(path.join(__dirname, '../data/friends.js'))
	});

	// Routing
	app.get("/public/survey", function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'))
	});

	app.post("/api", function (req, res){
		var profile = req.body;
		friend.push(profile);
		console.log(friend);
		res.end();
	});
}

// // App listening
// app.listen(PORT, function(){
// 	console.log("App is listening on PORT " + PORT);
// });