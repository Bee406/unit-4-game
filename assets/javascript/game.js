//create targetNumber variable
var targetNumber = 0;

//create crystalNumber variable 
var crystalNumber = [Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2)];

var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

for (var i = 0; i < crystalNumber.length; i++) {
    var crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", images[i]);
    crystalImage.attr("data-crystalvalue", crystalNumber[i]);
    $("#crystals").append(crystalImage);
};

var totalScore = 0;

var wins = 0;

var losses = 0;

function resetGame() {
    //reset target number
    targetNumber = Math.floor(Math.random() * (100 - 30) + 30);
    $("#target-number").html(targetNumber);

    //resetting user's score
    totalScore=0
    $("#total-score").html(totalScore);

    // reset crystal values
    crystalNumber = [Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2), Math.floor(Math.random() * (15 - 2) + 2)];
    for (var i = 0; i < crystalNumber.length; i++) {
        crystalImage.attr("data-crystalvalue", crystalNumber[i]);
    };
};

resetGame();

$(".crystal-image").on("click", function () {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore = totalScore + crystalValue;
    $("#total-score").html(totalScore);

    if (totalScore === targetNumber) {
        wins++;
        $("#wins").html(wins);
        $("#wins-losses").html("You won!");
        resetGame();
    }

    else if (totalScore >= targetNumber) {
        losses++;
        $("#losses").html(losses);
        $("#wins-losses").html("You lost!");
        resetGame();
    }

});





//update the player's score with number from crystal

//if total score equals random number, the player wins the game

//if the total score is greater than random number, the player loses the game

//the game restarts when the player wins or loses