// // Dependencies
var path = require('path');
var friends = require('../data/friends.js');

var answers = [];

module.exports = function(app) {

	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'))
	});

	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'))
	});

	app.post("/public/survey", function (req, res){
		var friend = req.body;
		answers.push(friend);
		var theirFriend = comparison();
		res.json({ result: theirFriend });
		console.log(theirFriend);
	});
}

function comparison() {
	newAnswer = answers[0];
	var newAnswerArray = [];
	var matchDifference = 1000;
	var matchName = '';

	// could not figure out how to loop through an object for the key values
	// for(var j = 1; j <= 10; j++) {
	// 	newAnswerArray.push(parseInt(newAnswer.q+j));
	// };
	newAnswerArray.push(parseInt(newAnswer.q1));
	newAnswerArray.push(parseInt(newAnswer.q2));
	newAnswerArray.push(parseInt(newAnswer.q3));
	newAnswerArray.push(parseInt(newAnswer.q4));
	newAnswerArray.push(parseInt(newAnswer.q5));
	newAnswerArray.push(parseInt(newAnswer.q6));
	newAnswerArray.push(parseInt(newAnswer.q7));
	newAnswerArray.push(parseInt(newAnswer.q8));
	newAnswerArray.push(parseInt(newAnswer.q9));
	newAnswerArray.push(parseInt(newAnswer.q10));

	console.log(newAnswerArray);
	console.log("-----------------------------");
	
	for (var i = 0; i < friends.length; i++) {
		console.log(friends[i].name + ' ' + friends[i].scores);
		totalDifference = 0;
		for (var k = 0; k < 10; k++) {
			totalDifference += Math.abs(newAnswerArray[k] - friends[i].scores[k]);
			console.log(totalDifference);
		}
		if (totalDifference <= matchDifference) {
				matchDifference = totalDifference;
				matchName = friends[i].name;
			}
	}
	return matchName;
};

