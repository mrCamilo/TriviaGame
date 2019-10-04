// var for userScore and counter
var userScore = 0;
var counter = 100; // it's 300 seconds, I'm going to display it as minutes and seconds

// set a timer for each question
setInterval("timer()", 1000)

function timer () {
  counter--;
  $("#timerDisplay").text("Time remaining: " + counter);
}

// an object that has all my questions

$("#startGameBtn").click(function(){
  userScore++;
    $("#startGameDiv").empty(); // Get rid of the start button when you click it
    $(".firstSetOfQuestions").toggle( // toggle the first set of questions
        "#fourQuestionButtons");      
});

// the second set of questions
$(".btn-secondary").click(function(){
  $(".firstSetOfQuestions").empty(); // empty it again?
  counter = 100;
  userScore+=1;
  timer(); // reset the timer
  
  $(".secondSetOfQuestions").toggle( // toggle the next set of questions
      "#fourMoreQuestionButtons");      
});

// last set of questions
$(".thirdButton").click(function(){
  $(".secondSetOfQuestions").empty(); // empty it again
  userScore+=1; // increment user score
  counter = 100;
  timer(); // reset the timer
  $(".lastSetOfQuestions").toggle( // toggle the last set of questions
      "#fourLastQuestionButtons");
});

// Get rid of the buttons after you click, make way for results screen
$(".lastButton").click(function(){
  $(".lastSetOfQuestions").empty();
  counter = 100;
  timer();
  if (counter === 0) {
    $(".resultsDisplay").toggle(".resultsDisplay");
  }
  $(".resultsDisplay").toggle(".resultsDisplay");
  $(".resultsDisplay").html("You got " + userScore + " correct out of <b>T H R E E !</b> Wow!!!!! Incredible!! Ok bye!!!");
});


