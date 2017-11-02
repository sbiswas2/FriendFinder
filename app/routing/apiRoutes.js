//  // Dependencies
var path = require('path');
var friends = require('../data/friends.js');

var friend = [];

module.exports = function(app) {
	// Routing
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