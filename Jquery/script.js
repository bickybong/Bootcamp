$("h1").addClass("bigTitle margin50");
console.log($("h1").css("font"))
$("button").css("color", "blue");
$("button").html("<em>CLICK ME BABY</em>")
$("h1").text("bye");
$("a").attr("href", "https://bing.com")

$("button").click(function(){
    $("h1").slideUp().fadeIn().animate({margin: "20px", fontSize:"5rem"});
})

$("input").keypress(function(e){
    $("h1").text(e.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue")
})
$("h1").before("<button>before</button>")
$("h1").prepend("<button>prepend</button>")
$("h1").append("<button>append</button>")
$("h1").after("<button>after</button>")

