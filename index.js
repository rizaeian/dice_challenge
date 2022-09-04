
var randomeNumber1 = Math.floor(Math.random()*6)+1;
var randomeNumber2 = Math.floor(Math.random()*6)+1;

var randomdiceImage = "dice"+ randomeNumber1 +".png";
var randomdiceImage2 = "dice"+ randomeNumber2 +".png";

var randomimageSource = "images/" + randomdiceImage;
var randomimageSource2 = "images/" + randomdiceImage2;

document.querySelectorAll("img")[0].setAttribute("src", randomimageSource);
document.querySelectorAll("img")[1].setAttribute("src", randomimageSource2);


if(randomeNumber1>randomeNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomeNumber1 === randomeNumber2){
  document.querySelector("h1").innerHTML = "Draws";
}else{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
