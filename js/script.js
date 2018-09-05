$(document).ready(function(){
    $(".banner-carousel").owlCarousel({
        items:1,
    });
    $("latestImage").hover(function(){
        $(".readMore").addClass(".readMore2");
    });
    $(window).load(function() {
        $(".english").addClass(".en");
    });
});