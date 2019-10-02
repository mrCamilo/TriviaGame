// display question and 4 buttons (each a multiple choice answer)
function askAQuestion(){
    document.getElementById("firstQuestion").innerHTML = "What is the only episode where Larry the Lobster is referred to as Big Larry?" + console.log("hey it me"); 
}

// when you click the start button, it empties the div for questions to appear!
$(document).ready(function () {
    $("#startGameBtn").on("click", function () {
        $(".centralContainer").empty();
    });
});

