 // Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');
var friends = require('../data/friends.js');
// var answers = require('./htmlRoutes.js');
console.log(friends);
// Arrays for answers
var friend = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.get("/api", function(req, res){
	res.sendFile(path.join(__dirname, '../data/friends.js'))
});
// Routing
app.get("/public/survey", function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'))
});

// Need to store the friend from /public/survery into friend array
app.post("/api", function (req, res){
	var profile = req.body;
	friend.push(profile);
	console.log(friend);
	res.end();
});
// Match that with the friends from app/data/friends.js
// Display information in Module

// App listening
app.listen(PORT, function(){
	console.log("App is listening on PORT " + PORT);
});