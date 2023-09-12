const dice =document.getElementById('dice-btn');

function rollDice(){
// Dice 1
var randomDice =Math.floor((Math.random()*6)+1);
var diceLocation = "img/"+"dice-"+randomDice+".jpg";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceLocation);

// Dice 2
var randomDice2 =Math.floor((Math.random()*6)+1);
var diceLocation2 = "img/"+"dice-"+randomDice2+".jpg";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", diceLocation2);

if (randomDice > randomDice2){
    document.querySelector('h1').innerHTML=" Player 1 Wins!";
}
else if (randomDice < randomDice2){
    document.querySelector("h1").innerHTML="Player 2 Wins! ";
}
else if (randomDice === randomDice2){
    document.querySelector("h1").innerHTML="It's a tie!";
}
else{
    document.querySelector("h1").innerHTML="Try Again";
}

dice.innerHTML = "Play Again!";

}