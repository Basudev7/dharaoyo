
$(".ScrllTop").click(function(){
    
         $("html,body").animate({
            "scrollTop":0
        })
    })

//$(".wrap-1 .navbar .collapse .navbar-nav a").click(function(){
////    e.preventDefault();
//    $(".wrap-1 .navbar .collapse .navbar-nav a").removeClass("active")
//    $(this).addClass("active")
//})

$(".int").click(function(e){
    e.preventDefault();
    var x=$(this).attr("href");
$("html,body").animate({
    "scrollTop":$(x).offset().top-92
})
})


$(".wrap-2 button,.wrap-4 button").click(function(){
   window.location.href="contact.html"
})

