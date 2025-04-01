var n = Math.random();
console.log(n);

//dice with 1 to 6
var number = Math.random();
number *= 6;
number += 1;
number = Math.floor(number);
console.log(number);

//Love calculator
var first_name = prompt("Enter first name :");
var sec_name = prompt("Enter second name :");
var love_score = Math.random() * 100;
love_score = Math.floor(love_score) + 1;
alert("Your love score is : " + love_score + "%");