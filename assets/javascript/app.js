$(document).ready(function(){

var time = 15;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var questionCounter = 1;
var questionTimer;

var options = {
    q1: {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Peanut butter", "Salmon", "Honey", "Apple pie"],
        correctAnswer: 2
        }
        
};

//From start page, user clicks button to begin game
$("#start-game").on("click", function(){
    showQuestion();
    showAnswers();
});

// Display question
function showQuestion() {
    $("#start-game").hide();
    $("#interval-div").append("Time Remaining: <span id='time-remaining'></span>");
    $("#time-remaining").text(time);
    $("#question").text(options.q1.question);
    questionTimer = setInterval(function(){
        time--;
        $("#time-remaining").text(time);
    }, 1000);
}

// Display multiple choice answers
function showAnswers(){
    for (var i = 0; i < options.q1.answers.length; i ++){
        $("#answers").append("<p class='answer-option'>" + options.q1.answers[i] + "</p>");
    }
};

//User selects one answer
$("#answers").on("click", "p.answer-option", function(){
    //User is told if they answered correctly or not
    if ($(this).text() !== options.q1.answers[options.q1.correctAnswer]) {
        $("#correct-answer").text("You selected an incorrect answer. ");
        numberCorrect += 1;
    }
    else {
        $("#correct-answer").text("You selected the correct answer!! ");
        numberIncorrect += 1;
    }
    showCorrectAnswer();
})

//If time = 0, run showCorrectAnswer.

//Correct answer is shown.
function showCorrectAnswer(){
    $("#answers").empty();
    $("#correct-answer").append("<p>The correct answer is: " + options.q1.answers[options.q1.correctAnswer] + ".</p>");
    // Clear the timer
    clearInterval(questionTimer);

    //# correct or incorrect answers increases
}
 
//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection

    //Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page

});


