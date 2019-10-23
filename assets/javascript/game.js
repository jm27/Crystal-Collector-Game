// Create variables to use in game
var computerScore;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var win = 0;
var loss = 0;
var min = 9;
var max = 122;
// Score should start at 0    
var  score = 0;

// Create random number and save it and console log
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);    
}
   computerScore = randomNumber(min, max);

// Assign random number to html and console log
$("#randomNumber").text(computerScore);

console.log(computerScore);


// Assign random number to each crystal and console log
crystalOne = Math.floor(Math.random() * 12) + 1;
console.log(crystalOne);
crystalTwo = Math.floor(Math.random() * 12) + 1;
console.log(crystalTwo);
crystalThree = Math.floor(Math.random() * 12) + 1;
console.log(crystalThree);
crystalFour = Math.floor(Math.random() * 12) + 1;
console.log(crystalFour);

// Assign each crystal value to images and add when clicked console log
//var fun = function(){
//$("#score").text(score);
//}

//console.log(fun());

$("#imageOne").on("click", function () {
    console.log("you clicked me!");
    score = crystalOne + score;
    console.log(score);
    $("#score").text(score);
    compare();
})
$("#imageTwo").on("click", function () {
    console.log("you clicked me!");
    score = crystalTwo + score;
    console.log(score);
    $("#score").text(score);
    compare();
})
$("#imageThree").on("click", function () {
    console.log("you clicked me!");
    score = crystalThree + score;
    console.log(score);
    $("#score").text(score);
    compare();
})
$("#imageFour").on("click", function () {
    console.log("you clicked me!");
    score = crystalFour + score;
    console.log(score);
    $("#score").text(score);
    compare();
})
$("#wins").text("wins:" + win);
$("#loss").text("losses:" + loss);

// Compare our score to random number if statements
function compare(){
if(score === computerScore){
    win++;
    $("#wins").text("wins:" + win);
    $("#result").text("You WON!!!!");
    console.log("you won");
    reset();
}
else if(score > computerScore){
    loss++;
    $("#loss").text("losses:" + loss);
    $("#result").text("Come On, Try Again!");
    reset();
}
}
//Re-start game function

function reset(){
    crystalOne = Math.floor(Math.random() * 12) + 1;
console.log(crystalOne);
crystalTwo = Math.floor(Math.random() * 12) + 1;
console.log(crystalTwo);
crystalThree = Math.floor(Math.random() * 12) + 1;
console.log(crystalThree);
crystalFour = Math.floor(Math.random() * 12) + 1;
console.log(crystalFour);
computerScore = randomNumber(min, max);
score = 0;
$("#score").text(score);
$("#randomNumber").text(computerScore);
}
