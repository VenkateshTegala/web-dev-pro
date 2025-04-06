
$("h1").css("color", "green");

console.log($("button").css("color"));

$("h1").addClass("big-title");
$("h1").removeClass("big-title");

$("h1").text("Bye");

$("img").attr("src");

$("a").attr("href", "https://www.yahoo.com");

//Event listeners in jQuery
$("h1").click(function() {
    $("h1").css("color", "pink");
})

$("button").click(function() {
    $("h1").css("color", "blue");
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

$("button").on("click", function() {
    $("h1").addClass("big-title");
    $("h1").slideUp().slideDown().animate({opacity : 0.2});
});