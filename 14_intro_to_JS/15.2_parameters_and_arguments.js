function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk();
  
  function cost(bottles) {
    var cost = bottles * 20;
    console.log("The cost is :" + cost);
  }
  
  cost(12);
  
  function calculateBottles(money) {
    var total = money/30;
    console.log("The no of bottles : " + Math.floor(total));
  }
  
  var myMoney = prompt("Enter your money :")
  calculateBottles(myMoney);