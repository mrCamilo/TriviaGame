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

// display the timer
//document.getElementById("timerDisplay").innerHTML = "Remaining Time: " + minutes + ":" + seconds;

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
