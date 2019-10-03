// var for userScore and counter
var userScore = 0;
var counter = 100; // it's 300 seconds, I'm going to display it as minutes and seconds

// set a timer for each question
setInterval("timer()", 1000)

function timer () {
  counter--;
  var minutes = Math.floor(counter / 60);
  var seconds = counter % 60;

  $("#timerDisplay").text("Time remaining: " + counter);
}

// an object that has all my questions

$("#startGameBtn").click(function(){
    $("#startGameDiv").empty(); // Get rid of the start button when you click it
    $(".firstSetOfQuestions").toggle( // toggle the first set of questions
        "#fourQuestionButtons");
});

// the second set of questions
$(".btn-secondary").click(function(){
  $(".firstSetOfQuestions").empty(); // empty it again?
  $(".secondSetOfQuestions").toggle( // toggle the next set of questions
      "#fourMoreQuestionButtons");
});

// last set of questions
$(".thirdButton").click(function(){
  $(".secondSetOfQuestions").empty(); // empty it again
  $(".lastSetOfQuestions").toggle( // toggle the last set of questions
      "#fourLastQuestionButtons");
      userScore++; // increment user score
      console.log(userScore);
});

// Get rid of the buttons after you click, make way for results screen
$(".lastButton").click(function(){
  $(".lastSetOfQuestions").empty();
  $(".resultsDisplay").toggle(
    "#results");
});

//move on to the results
