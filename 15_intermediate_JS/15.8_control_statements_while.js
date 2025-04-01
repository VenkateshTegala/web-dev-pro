var count = 1;
while(count <= 20) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log("Fizz BUzz");
    } else if (count % 3 == 0) {
        console.log("Fizz");
    } else if(count % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
    count++;
}