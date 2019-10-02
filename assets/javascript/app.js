// set a timer for each question
$(document).ready(function(){
   $("button").click(function(){
      $("#startGameBtn").toggle();
    });
  });

// var for userScore
var userScore = 0;

// an object that has all my questions

// Get rid of the start button when you click it
$("#startGameBtn").click(function(){
    $("#startGameDiv").empty();
  });

// four buttons for each answer
$("#startGameBtn").click(function(){
    $(".firstSetOfQuestions").toggle(
        ".fourQuestionButtons");
});

// Get rid of the buttons after you click and move on t
