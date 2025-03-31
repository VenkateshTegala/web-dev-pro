function calculateBMI(height, weight) {
    return weight/Math.pow(height, 2);
}

var myheight = prompt("Enter your height:");
var myweight = prompt("Enter your weight:");
console.log("Your BMI is :" + calculateBMI(myheight, myweight));

