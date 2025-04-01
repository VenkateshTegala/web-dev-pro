for(var count = 1; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log("F B");
    } else if (count % 3 == 0) {
        console.log("F");
    } else if(count % 5 == 0) {
        console.log("B");
    } else {
        console.log(count);
    }
}