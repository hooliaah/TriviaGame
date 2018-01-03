$(document).ready(function(){

var time = 30;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;
var sortedOptions = [];

var options = {
    question1: {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Honey", "Peanut butter", "Salmon", "Apple pie"],
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
    $("#question").text(options.question1.question);
}

//Countdown to show how many seconds remain
function questionTimer(){
    setInterval(function(){
        time--;
        $("#time-remaining").text(time);
    }, 1000);
};

//Multiple choice options displayed
function showAnswers(){
    var correctAnswer = options.question1.answers[0];
    var multipleOptions = options.question1.answers;
   
    //Sort option into random order then push options into a new array
   var createSortedList = multipleOptions.sort(function() {
        return 0.5 - Math.random();
    });
    sortedOptions.push(createSortedList);
    console.log(sortedOptions);

    //display options in random order
    for (var i = 0; i < multipleOptions.length; i++){
        $("#answers").append("<p class='answer-option' value='multipleOptions[i]'>" + multipleOptions[i] + "</p>");
    }
    console.log(options.question1.answers); // look at console log. Why is it in the sorted order?
    console.log(correctAnswer);
}

//User selects one option
$("#answers").on("click", "p.answer-option", function(){
    var selectedOption = $("p.answer-option").val();
    console.log(selectedOption); //how set value in p.answer-option?
    showCorrectAnswer();
})

//If time = 0, run showCorrectAnswer.

//Correct answer is shown.
function showCorrectAnswer(){
    $("#answers").empty();
    $("#correct-answer").text("The correct answer is " + options.question1.answers[0]); // why does this show the first answer in sorted array instead of original list?
    clearInterval(questionTimer); //how clear the timer?
    //User is told if they answered correctly or not
    //# correct or incorrect answers increases
}
 

//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection

    //Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page

});


