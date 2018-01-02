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

var questions = {
    question1: ["What is Winnie the Pooh’s favorite snack?", "Honey", "Peanut butter", "Salmon", "Apple pie"]
};

$("#start-game").on("click", function(){
    console.log("i was clicked!");
    $("start-game").empty();
});



});
