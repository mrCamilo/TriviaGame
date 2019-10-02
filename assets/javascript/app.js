// var for userScore and counter
var userScore = 0;
var counter = 300; // it's 300 seconds, I'm going to display it as minutes and seconds

// set a timer for each question
setInterval("timer()", 1000)

function timer () {
  counter--;

  $("#counter").text(counter);
}

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
