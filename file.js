$("h1").click(function(){
    console.log("There was a click!")
})

$("h1").click(function(){
    $(this).text("i was changed")
})

$("li").click(function(){
    console.log("li clicked!")
})

//$("input").eq(0).keypress(function(){
   // $("h3").toggleClass("turnBlue");
//})//
$("input").eq(0).keypress(function(event){
    if(event.which===13){
        $("h3").toggleClass("turnBlue");
    }
})

//on() method
$("h1").on("mouseenter", function(){
    $(this).toggleClass("turnBlue");
})

//animation fadeout
$("input").eq(1).on("click", function(){
    $("h1").slideUp("slow");
})