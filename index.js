var randomNumber1=Math.ceil(Math.random()*6);//selecting numbers form 1 to 6
var randomNumber2=Math.ceil(Math.random()*6);
var randomImageSrc1="images/dice"+randomNumber1+".png";//selecting images of dice accoding to random number that we have got
var randomImageSrc2="images/dice"+randomNumber2+".png";

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImageSrc1); //chnginh dice
image2.setAttribute("src",randomImageSrc2);

//comparision and showing output
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else{
  document.querySelector("h1").innerHTML="player 2 wins🚩";
}
