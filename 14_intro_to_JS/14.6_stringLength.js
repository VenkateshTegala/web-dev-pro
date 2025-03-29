var name = "venky";
console.log(name.length);

//caluclating remaining no of characters
var tweet = prompt("Compose your tweet");
var tweet_count = tweet.length;
alert("You have written " + tweet_count + " characters and you have remaining "+ (140 - tweet_count) + " characters")
