// For 1st dice setting a random image
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
document.querySelector(".img1").setAttribute("src",randomImageSource);

// For 2nd Dice
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelector(".img2").setAttribute("src",randomImageSource2);

// For declaring the winner
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";   //.innerhtml can be used as well instead of .textcontent.
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}
