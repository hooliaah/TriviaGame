//From start page, user clicks button to begin game
//First question is displayed:
    //Countdown at top to show how many seconds remain
    //Multiple choice options available
//Options are highlighted as user hover overs the option
//User selects one option
//Correct answer is shown. 
    //User is told if they answered correctly or not
    //# correct or incorrect answers increases
//After certain amount of time, next question is displayed. 
    //again, countdown is shown and multiple options are shown until user makes a selection
//Once the last question is answered, shows # correct, # incorrect, and # unanswered. 
    //Button to start over without refreshing the page
$(document).ready(function(){

var options = {
    question1: {
        question: "What is Winnie the Pooh’s favorite snack?", 
        answers: ["Honey", "Peanut butter", "Salmon", "Apple pie"],
        }
        
};

$("#start-game").on("click", function(){
    console.log(options.question1.question);
    showQuestion();
    showAnswers();
});

function showQuestion() {
    $("#start-game").hide();
    $("#question").text(options.question1.question);
}

function showAnswers(){
    var correctAnswer = options.question1.answers[0];
    console.log(correctAnswer);

    var multipleOptions = options.question1.answers;
    console.log(multipleOptions);

    multipleOptions.sort(function() {
        return 0.5 - Math.random();
      });

    for (var i = 0; i < multipleOptions.length; i++){
        $("#answers").append("<p>" + multipleOptions[i] + "</p>");
    }

}

});


