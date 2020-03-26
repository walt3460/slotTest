var randomNumber1 = Math.ceil(Math.random()*100); //random 1-6
var randomNumber2 = Math.ceil(Math.random()*100); // random 1-6
var randomNumber3 = Math.ceil(Math.random()*100); // random 1-6

var randomDiceImage
var randomDiceImage2
var randomDiceImage3


if (randomNumber1 <= 40){
  randomDiceImage = "dice1.png";
  randomNumber1 = 1;
}
else if (randomNumber1 <= 60){
  randomDiceImage = "dice2.png";
  randomNumber1 = 2;
}
else if (randomNumber1 <=75){
  randomDiceImage = "dice3.png";
  randomNumber1 = 3;
}
else if (randomNumber1 <= 83){
  randomDiceImage = "dice4.png";
  randomNumber1 = 4;
}
else if (randomNumber1<=94){
  randomDiceImage = "dice5.png";
  randomNumber1 = 5;
}
else{
  randomDiceImage = "dice6.png";
  randomNumber1 = 6;
}


if (randomNumber2 <= 40){
  randomDiceImage2 = "dice1.png";
  randomNumber2 = 1;
}
else if (randomNumber2 <= 60){
  randomDiceImage2 = "dice2.png";
  randomNumber2 = 2;
}
else if (randomNumber2 <=75){
  randomDiceImage2 = "dice3.png";
  randomNumber2 = 3;
}
else if (randomNumber2 <= 83){
  randomDiceImage2 = "dice4.png";
  randomNumber2 = 4;
}
else if (randomNumber2<=94){
  randomDiceImage2 = "dice5.png";
  randomNumber2 = 5;
}
else{
  randomDiceImage2 = "dice6.png";
  randomNumber2 = 6;
}


if (randomNumber3 <= 40){
  randomDiceImage3 = "dice1.png";
  randomNumber3 = 1;
}
else if (randomNumber3 <= 60){
  randomDiceImage3 = "dice2.png";
  randomNumber3 = 2;
}
else if (randomNumber3 <=75){
  randomDiceImage3 = "dice3.png";
  randomNumber3 = 3;
}
else if (randomNumber3 <= 83){
  randomDiceImage3 = "dice4.png";
  randomNumber3 = 4;
}
else if (randomNumber3<=94){
  randomDiceImage3 = "dice5.png";
  randomNumber3 = 5;
}
else{
  randomDiceImage3 = "dice6.png";
  randomNumber3 = 6;
}

function slotRun(){

document.getElementsByTagName("img")[0].setAttribute("src", "images/"+randomDiceImage);
document.getElementsByTagName("img")[1].setAttribute("src", "images/"+randomDiceImage2);
document.getElementsByTagName("img")[2].setAttribute("src", "images/"+randomDiceImage3);
document.querySelector(".replay").innerHTML = "Play Again"


if (randomNumber1 == randomNumber2 && randomNumber2 == randomNumber3){
  document.querySelector("p.win").innerHTML = "You Win! "  + randomNumber1*3   + " coins";
}
else{
  document.querySelector("p.win").innerHTML = "Please play again!";
}
}
