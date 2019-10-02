// set a timer for each question
//$(document).ready(function(){
  //  $("button").click(function(){
    //  $("#startGameBtn").toggle();
    //});
 // });

// var for userScore
var userScore = 0;

// an object that has all my questions

// When you click the #startGameButton, ask the first question
//$(document).ready(function () {
  //  $("#startGameBtn").click(function(){
    //    $(".centralContainer").html(
      //      "<p>Question 1 blah blah blah blah blah blah ??</p>");
    //}
    //);
//});

// Get rid of the start button when you click it
$("#startGameBtn").click(function(){
    $("#startGameDiv").empty();
  });


$(document).ready(function () {
    $("#startGameBtn").click(function(){
        $(".btn-group-vertical").toggle(
            ".fourQuestionButtons");
    }
    );
});


// Create 4 buttons for multiple choice answers (bootstrap)
