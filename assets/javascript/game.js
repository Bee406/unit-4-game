//create targetNumber variable
var targetNumber = 0;

//create crystalNumber variable 
var crystalNumber = [Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1)];

var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

var crystalImage;
//maybe make this a function we can call later
for (var i = 0; i < crystalNumber.length; i++) {
    crystalImage = $("<img>");
    crystalImage.addClass("crystal-image");
    crystalImage.attr("src", images[i]);
    crystalImage.attr("data-crystalvalue", crystalNumber[i]);
    $("#crystals").append(crystalImage);
};

var totalScore = 0;

var wins = 0;

var losses = 0;


function resetGame() {

    //resetting user's score
    totalScore = 0
    $("#total-score").html(totalScore);

    //reset target number
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#target-number").html(targetNumber);

    crystalNumber = [Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1), Math.floor(Math.random() * (12 - 1) + 1)];
    console.log(crystalNumber);
    for (var i = 0; i < crystalNumber.length; i++) {    
        crystalImage.attr("data-crystalvalue", crystalNumber[i]);

    }

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
        // $("#wins-losses").text("You won!");
        resetGame();
    }

    else if (totalScore >= targetNumber) {
        losses++;
        $("#losses").html(losses);
        // $("#wins-losses").html("You lost!");
        resetGame();
    }

});


