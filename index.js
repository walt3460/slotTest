
var diceArray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

function slotRun(){

  var randomNumber1 = Math.floor(Math.random()*6); //random 1-6
  var randomNumber2 = Math.floor(Math.random()*6); // random 1-6
  var randomNumber3 = Math.floor(Math.random()*6); // random 1-6

  var randomDiceImage = diceArray[randomNumber1-1];
  var randomDiceImage2 = diceArray[randomNumber2-1];
  var randomDiceImage3 = diceArray[randomNumber3-1];



document.querySelector("#dice1").setAttribute("src", "images/"+diceArray[randomNumber1]);
document.querySelector("#dice2").setAttribute("src", "images/"+diceArray[randomNumber2]);
document.querySelector("#dice3").setAttribute("src", "images/"+diceArray[randomNumber3]);
document.querySelector(".replay").innerHTML = "Play Again"

if (randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3){
  document.querySelector(".win").innerHTML = "You Win! "  + randomNumber1*3   + " coins";
}
else{
  document.querySelector(".win").innerHTML = "Please play again!";
}

}
