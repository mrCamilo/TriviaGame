// an object that has all my questions
var num1 = "ohhhh ohhh ohh ohh oh hhh";

// When you click the #startGameButton, ask the first question
$(document).ready(function () {
    $("#startGameBtn").click(function(){
        $(".centralContainer").html(num1 + "<p>Question 1 blah blah blah blah blah blah ??</p> <h3>oh yeah yeah</h3>");
    }
    );
});

// Create 4 buttons for multiple choice answers