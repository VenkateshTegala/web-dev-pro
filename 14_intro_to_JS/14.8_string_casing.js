var name = prompt("Enter your name :")
name = name.toUpperCase();
console.log(name);
name = name.toLowerCase();
console.log(name);

//Only capitalising the first letter
var new_name = prompt("Enter your name :");
var first = new_name.slice(0, 1);
var second = new_name.slice(1).toLowerCase()
first = first.toUpperCase();
console.log("Lower : " + first + second);
