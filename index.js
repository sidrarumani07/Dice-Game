var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;

console.log(randomNumber1);
console.log(randomNumber2);

var leftDiceImage = document.querySelectorAll("img")[0]; 
var rightDiceImage = document.querySelectorAll("img")[1]; 

var imagePath1 = "images/dice" + randomNumber1 + ".png";
var imagePath2 = "images/dice" + randomNumber2 + ".png";

leftDiceImage.setAttribute("src", imagePath1);
rightDiceImage.setAttribute("src", imagePath2);

var heading = document.querySelector("h1");

// Determine the winner and update heading text
if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw!";
}