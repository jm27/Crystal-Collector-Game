// Create variables to use in game
var randomNumber;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
// score should start at 0    
score = 0;

// Create random number and save it and console log
randomNumber = function (min = 9, max = 122) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumber());

// assign random number to each crystal and console log
crystalOne = Math.floor(Math.random() * 12) + 1;
console.log(crystalOne);
crystalTwo = Math.floor(Math.random() * 12) + 1;
console.log(crystalTwo);
crystalThree = Math.floor(Math.random() * 12) + 1;
console.log(crystalThree);
crystalFour = Math.floor(Math.random() * 12) + 1;
console.log(crystalFour);

