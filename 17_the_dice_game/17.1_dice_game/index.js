randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1); 
var randomDiceeImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceeImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2); 
var randomDiceeImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceeImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    var heading = document.querySelector("h1");
    heading.textContent = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    var heading = document.querySelector("h1");
    heading.textContent= "Player 2 wins";
} else {
    var heading = document.querySelector("h1");
    heading.textContent = "Match draw";
}




