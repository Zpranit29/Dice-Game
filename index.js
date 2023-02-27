var randomNumber1=Math.floor(Math.random()*6)+1;   //1-6

var randomdiceimage="dice"+randomNumber1+".png";   //dice image from dice1.png-dice6.png

var randomimagesource="images/"+randomdiceimage;   //for src of the umage tag    images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomNumber2+".png";
var randomimagesource2="images/"+randomdiceimage2;


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesource2);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}