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
    $("#services-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 2500 }, 0);
    });
    $("#contact-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 3300 }, 0);
    });
    
    //2. Button footer go back

    $("#footer-go-back").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 0);
    });

    //3. Modals projects
    let scrollPosition = 0;

    //3.1 Project 1 (Tracker project)
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

    //3.2 Project 2 (Weather project)
    $(".btn-project2").on("click", function (event) {
        event.preventDefault();
        $("#projectsModal2").show(); 
        scrollPosition = $(window).scrollTop();
        $("html, body").css({
            position: "fixed",
            top: `-${scrollPosition}px`,
            width: "100%",
        });
        $("#projectsModal2").css("backdrop-filter", "blur(10px)");
    });

    //3.3 Go Back to body
    $("body").on("click", function (event) {
    
        if ($(event.target).is("#projectsModal") || $(event.target).is("#projectsModal2")) {
            $("#projectsModal").hide();
            $("#projectsModal2").hide();
            $("html, body").css({
                position: "",
                top: '',
                width: "",
            });

            $(window).scrollTop(scrollPosition);
        }
    });
});