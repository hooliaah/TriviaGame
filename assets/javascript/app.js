//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection
//Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page
$(document).ready(function(){

var time = 30;
var numberCorrect = 0;
var numberIncorrect = 0;
var numberUnanswered = 0;

var options = {
    question1: {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Honey", "Peanut butter", "Salmon", "Apple pie"],
        }
        
};

//From start page, user clicks button to begin game
$("#start-game").on("click", function(){
    console.log(options.question1.question);
    $("time-remaining").text(time); //why doesn't this show 30?!?
    showQuestion();
    showAnswers();
    questionTimer();
});

//First question displayed
function showQuestion() {
    $("#start-game").hide();
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
    console.log(correctAnswer);

    var multipleOptions = options.question1.answers;
    console.log(multipleOptions);

    multipleOptions.sort(function() {
        return 0.5 - Math.random();
      });

    for (var i = 0; i < multipleOptions.length; i++){
        $("#answers").append("<p class='answer-option'>" + multipleOptions[i] + "</p>");
    }

}

//User selects one option
//Correct answer is shown. 
    //User is told if they answered correctly or not
    //# correct or incorrect answers increases

});


