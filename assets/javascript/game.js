$(document).ready(function() {
//function that creates the start button and initial screen

function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//function that generates the html
$("body").on("click", ".start-button", function(event){
	event.preventDefault(); 
	generateHTML();


}); // Closes start-button click

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		Winner();
	}
	else {
		clearInterval(theClock);
		Loser();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

//function for getting a correct answer

function Winner() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

//function for getting an answer srong

function Loser() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}


function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}



function wait() {
	if (questionCounter < 2) {
	questionCounter++;
	generateHTML();
	counter = 30;
	}
	else {
		finalScreen();
	}
}



function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Who does Peter Dinklage Play in Game of Thrones", "Danaerys is also known as?", "Jon Snow's Dire Wolf is named?", "Jon Snow's Dire Wolf is named?"];
var answerArray = [["Tyrion Lannister", "Jon Snow", "Elmo", "Barney Stinson"], ["Fizzy Bubbly", "The Breaker of Chains", "Elmo", "Bilbo Baggins"], ["Grey Wolf", "Shaggy dog", "Ghost", "Fred"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/tyrion.jpg'>", "<img class='center-block img-right' src='assets/images/danaerys.jpg'>", "<img class='center-block img-right' src='assets/images/ghost.jpg'>"];
var correctAnswers = ["A. Tyrion Lannister", "B. The Breaker of Chains", "C. Ghost", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
