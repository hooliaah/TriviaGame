$(document).ready(function(){

var time = 5;
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
        },
    q2: {
        question: "Fill in the blank: Babe, a little ______ goes a long way.", 
        answers: ["Elbow grease", "Pig", "Dog", "Love"],
        correctAnswer: 1
        },   
    q3: {
        question: "Who were best friends in Charlotte’s Web?", 
        answers: ["Charlotte and Milton", "Charlotte and Bradley", "Charlotte and Stuart", "Charlotte and Wilbur"],
        correctAnswer: 3
        }, 
    q4: {
        question: "Who created the comic strip, Garfield?", 
        answers: ["Jim Davis", "Jon Arbuckle", "Betty White", "Joseph Conrad"],
        correctAnswer: 0
        }, 
    q5: {
        question: "What color is Clifford the big dog?", 
        answers: ["Blue", "Orange", "Red", "Golden"],
        correctAnswer: 2
        }, 
    q6: {
        question: "What type of animal is Baloo from The Jungle Book?", 
        answers: ["Bear", "Tiger", "Panther", "Elephant"],
        correctAnswer: 0
        }, 
    q7: {
        question: "Who is Simba’s uncle in The Lion King?", 
        answers: ["Mufasa", "Scar", "Rafiki", "Timon"],
        correctAnswer: 1
        }, 
    q8: {
        question: "Moby Dick lived in this habitat: ", 
        answers: ["Land", "Air", "Outer space", "Sea"],
        correctAnswer: 3
        },
};

// From start page, user clicks button to begin game
$("#start-game").on("click", function(){
    showQuestion();
    showAnswers();
});

// Display question
function showQuestion() {
    time = 5;
    $("#start-game").hide();
    $("#correct-answer").text("");
    $("#interval-div").html("Time Remaining: <span id='time-remaining'></span>");
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

// User selects one answer
 $("#answers").on("click", "p.answer-option", function(){
    //User is told if they answered correctly or not
    if ($(this).text() === options.q1.answers[options.q1.correctAnswer]) {
        $("#correct-answer").text("You selected the correct answer! ");
        numberCorrect += 1;
    }
    else {
        $("#correct-answer").text("You selected an incorrect answer. ");
        numberIncorrect += 1;
    }
    showCorrectAnswer();
})

// If time = 0, run showCorrectAnswer.
// if (time === 0){
//     answerSelected();
//     showCorrectAnswer();
//     numberUnanswered += 1;
// }

//Correct answer is shown.
function showCorrectAnswer(){
    $("#answers").empty();
    $("#correct-answer").append("<p>The correct answer is: " + options.q1.answers[options.q1.correctAnswer] + ".</p>");
    // Clear the timer
    clearInterval(questionTimer);
    setTimeout(showQuestion, 2000);
    setTimeout(showAnswers, 2000);
}
 
//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection

    //Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page

});


