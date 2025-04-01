

//Love calculator
var first_name = prompt("Enter first name :");
var sec_name = prompt("Enter second name :");
var love_score = Math.random() * 100;
love_score = Math.floor(love_score) + 1;
alert("Your love score is : " + love_score + "%");

//combining comparators like && ||
if (love_score == 100) {
    alert("You love each other very much");
} else if(love_score < 100 && love_score > 90) {
    alert("Good love");
} else if(love_score < 90 && love_score > 60) {
    alert("Good ");
} else {
    alert("Better");
}

