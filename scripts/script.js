$(document).ready(function() {
    // 1. Scrolls
    $("#start").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
    });
    $("#about-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 750 }, 0);
    });
    
    $("#projects-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 1700 }, 0);
    });
    /*
    $("#services-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 750 }, 0);
    });
    $("#contact-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
    });
    */
    
    let scrollPosition = 0;

    $(".btn-project1").on("click", function (event) {
        event.preventDefault();
        $("#projectsModal").show(); 
        scrollPosition = $(window).scrollTop();
        $("html, body").css({
            position: "fixed",
            top: `-${scrollPosition}px`,
            width: "100%",
        });
        $("#projectsModal").css("backdrop-filter", "blur(10px)");
    });

   
    $("body").on("click", function (event) {
    
        if ($(event.target).is("#projectsModal")) {
            $("#projectsModal").hide();
            $("html, body").css({
                position: "",
                top: '',
                width: "",
            });

            $(window).scrollTop(scrollPosition);
        }
    });
});