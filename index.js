// left img
var randomNumber1="images/dice"+(Math.floor((Math.random()*6))+1) +".png";
document.querySelector(".img1").setAttribute("src",randomNumber1);

// right img
var randomNumber2="images/dice"+(Math.floor((Math.random()*6))+1) +".png";
document.querySelector(".img2").setAttribute("src",randomNumber2);


if(randomNumber1>randomNumber2)
{
  document.querySelector(".result").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector(".result").innerHTML="🚩Player 2 wins!";
}
else{
  document.querySelector(".result").innerHTML="Draw!";
}
