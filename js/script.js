window.onload = function () { 
    $("#loading").fadeOut(2500);
    $("#loading").remove;
    $("#loading-back").fadeOut(2400);
    $("#loading-back").remove;
}
$(".banner-carousel").owlCarousel({
    items:1,
});
$("#scroll-down").click(function() {
    // var x = $("#investments").offset().top;
    // console.log(x);
    $("html, body").animate({
        scrollTop: $("#investments").offset().top
    }, 1000);
});

