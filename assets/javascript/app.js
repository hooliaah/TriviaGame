$(document).ready(function(){

var time;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var questionCounter = 0;
var questionTimer;
var options = [
    {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Peanut butter", "Salmon", "Honey", "Apple pie"],
        correctAnswer: 2
    },
    {
        question: "Fill in the blank: Babe, a little ______ goes a long way.", 
        answers: ["Bit", "Pig", "Dog", "Love"],
        correctAnswer: 1
    },   
    {
        question: "Who were best friends in Charlotte’s Web?", 
        answers: ["Charlotte and Milton", "Charlotte and Bradley", "Charlotte and Stuart", "Charlotte and Wilbur"],
        correctAnswer: 3
    }, 
    {
        question: "Who created the comic strip, Garfield?", 
        answers: ["Jim Davis", "Jon Arbuckle", "Betty White", "Joseph Conrad"],
        correctAnswer: 0
    }, 
    {
        question: "What color is Clifford the big dog?", 
        answers: ["Blue", "Orange", "Red", "Golden"],
        correctAnswer: 2
    }, 
    {
        question: "What type of animal is Baloo from The Jungle Book?", 
        answers: ["Bear", "Tiger", "Panther", "Elephant"],
        correctAnswer: 0
    }, 
    {
        question: "Who is Simba’s uncle in The Lion King?", 
        answers: ["Mufasa", "Scar", "Rafiki", "Timon"],
        correctAnswer: 1
    }, 
    {
        question: "Moby Dick lived in this habitat: ", 
        answers: ["Land", "Air", "Outer space", "Sea"],
        correctAnswer: 3
    }
    ];

// From start page, user clicks button to begin game
$("#start-game").on("click", function(){
    showQuestion();
    showAnswers();
});

// Display question
function showQuestion() {
    time = 15;
    $("#start-game").hide();
    $("#correct-answer").text("");
    $("#interval-div").html("Time Remaining: <span id='time-remaining'></span>");
    $("#time-remaining").text(time);
    $("#question").text(options[questionCounter].question);
    questionTimer = setInterval(function(){
        if (--time === 0){
            numberUnanswered += 1;
            showCorrectAnswer();
        }
        $("#time-remaining").text(time);
    }, 1000);

}

// Display multiple choice answers
function showAnswers(){
    for (var i = 0; i < options[questionCounter].answers.length; i ++){
        $("#answers").append("<p class='answer-option'>" + options[questionCounter].answers[i] + "</p>");
    }
};

// User selects one answer
 $("#answers").on("click", "p.answer-option", function(){
    //User is told if they answered correctly or not
    if ($(this).text() === options[questionCounter].answers[options[questionCounter].correctAnswer]) {
        $("#correct-answer").text("You selected the correct answer! ");
        numberCorrect += 1;
    }
    else {
        $("#correct-answer").text("You selected an incorrect answer. ");
        numberIncorrect += 1;
    }
    showCorrectAnswer();
});

//Correct answer is shown.
function showCorrectAnswer(){
    $("#answers").empty();
    $("#correct-answer").append("<p>The correct answer is: " + options[questionCounter].answers[options[questionCounter].correctAnswer] + ".</p>");
    // Clear the timer
    clearInterval(questionTimer);
    // Display next question automatically without user input
    if (questionCounter < options.length - 1){
        setTimeout(showQuestion, 2000);
        setTimeout(showAnswers, 2000);
        questionCounter += 1;
    }
    else {
        setTimeout(endGame, 2000);
    };
}
 
// Once the last question is answered, shows # correct, # incorrect, and # unanswered then reset is called. 
function endGame(){
    $("#interval-div").empty();
    $("#question").empty();
    $("#answers").empty();   
    $("#correct-answer").empty();  
    $("#correct-answer").append("<p>You made it to the end of trivia. Let's see how you did...</p>");
    $("#correct-answer").append("<p>Correct answers: " + numberCorrect + "</p>");
    $("#correct-answer").append("<p>Incorrect answers: " + numberIncorrect + "</p>");
    $("#correct-answer").append("<p>Unanswered: " + numberUnanswered + "</p>");
    reset();
}

function reset(){
    // Button to start over without refreshing the page
    $("#start-game").show();
    // Reset variables
    numberCorrect = 0;
    numberIncorrect = 0;
    numberUnanswered = 0;
    questionCounter = 0;
};

});

// =================================================================

  // Add year to footer
  $("#year").text(new Date().getFullYear());