var randomNUmber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNUmber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNUmber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNUmber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNUmber1 > randomNUmber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🥳";
}
else if (randomNUmber1 === randomNUmber2) {
    document.querySelector("h1").innerHTML = "Its draw 🤗";
}
else if  (randomNUmber2 > randomNUmber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🥳";
}
