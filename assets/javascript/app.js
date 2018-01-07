$(document).ready(function(){

var time = 30;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var questionCounter = 0;

var options = {
    q1: {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Peanut butter", "Salmon", "Honey", "Apple pie"],
        correctAnswer: "Honey"
        }
        
};

//From start page, user clicks button to begin game
$("#start-game").on("click", function(){
    showQuestion();
    showAnswers();
    questionTimer();
});

//First question displayed
function showQuestion() {
    $("#start-game").hide();
    $("#interval-div").append("Time Remaining: <span id='time-remaining'></span>");
    $("#time-remaining").text(time);
    $("#question").text(options.q1.question);
}

//Countdown to show how many seconds remain
function questionTimer(){
    setInterval(function(){
        time--;
        $("#time-remaining").text(time);
    }, 1000);
};

//Multiple choice answers displayed
function showAnswers(){
    for (var i = 0; i < options.q1.answers.length; i ++){
        if (options.q1.answers.length[1] != options.q1.correctAnswer){
            $("#answers").append("<p class='answer-option' value='false'>" + options.q1.answers[i] + "</p>");
        }
        else{
            $("#answers").append("<p class='answer-option' value='true'>" + options.q1.answers[i] + "</p>");
        }
    }
};

//User selects one answer
$("#answers").on("click", "p.answer-option", function(){
    var selectedOption = $("p.answer-option").val();
    console.log(selectedOption); //how set value in p.answer-option?
    showCorrectAnswer();
})

//If time = 0, run showCorrectAnswer.

//Correct answer is shown.
function showCorrectAnswer(){
    $("#answers").empty();
    $("#correct-answer").text("The correct answer is " + options.q1.correctAnswer);
    clearInterval(questionTimer); //how clear the timer?
    //User is told if they answered correctly or not
    //# correct or incorrect answers increases
}
 
//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection

    //Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page

});


