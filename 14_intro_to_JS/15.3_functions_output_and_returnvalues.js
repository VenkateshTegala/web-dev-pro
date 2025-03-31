function noOfBottles(money) {
    console.log("No of bottles :" + Math.floor(money/10));
    var mychange = change(money);
    console.log("Change :" + mychange);
}
function change(money) {
    return money % 10;
}

var myMoney = prompt("Enter money :");
noOfBottles(myMoney);