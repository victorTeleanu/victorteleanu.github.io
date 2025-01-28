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

    //4. Animation with Hover efect on toolkit
    $(document).ready(function () {
        const logoColors = {
            "bxl-html5": "#E34F26",
            "bxl-css3": "#1572B6",
            "bxl-javascript": "#F7DF1E",
            "bxl-jquery": "#0769AD",
            "bxl-angular": "#DD0031",
            "bxl-react": "#61DAFB",
            "bxl-php": "#777BB4",
            "fa-symfony": "#000000",
            "bxl-java": "#007396",
            "bxl-python": "#3776AB",
            "fa-database": "#FFCA28",
            "bxl-mongodb": "#47A248",
            "bxl-git": "#F05033",
            "bxl-docker": "#2496ED",
            "bxl-visual-studio": "#5C2D91",
            "bxl-aws": "#FF9900"
        };

        $(".toolkit-container i").hover(
            function () {
                const iconClass = $(this).attr("class").split(" ").pop();
                const color = logoColors[iconClass];
                if (color) {
                    $(this).css({
                        "color": color,
                        "transform": "scale(1.2)",
                        "transition": "all 0.2s ease"
                    });
                }
            },
            function () {
                $(this).css({
                    "color": "",
                    "transform": "scale(1)",
                    "transition": "all 0.2s ease"
                });
            }
        );
    });

    //5. Copy to clipboard
    $(document).ready(function () {
        $(".Btn").on("click", function () {
            const textToCopy = $(".text").text();

            navigator.clipboard.writeText(textToCopy).then(() => {
                const confirmationMessage = $("<span class='confirmation'>Copied to clipboard!</span>");
                $(this).before(confirmationMessage);

                confirmationMessage.fadeIn(200).delay(1500).fadeOut(200, function () {
                    $(this).remove();
                });
            })
        });
    });

    //6. Hamburger menu
    $(document).ready(function() {
        $('#hamburger-icon').click(function() {
            var $menu = $('.navbar ul');
    
            $menu.toggle();
    
            if ($(window).width() <= 768) {
                $menu.css({
                    position: 'absolute',
                    top: $(this).offset().top + $(this).outerHeight() + 5,
                    left: $(this).offset().left - 20,
                    width: $(this).outerWidth(),
                    zIndex: 9999
                });
            }
        });
    
        if ($(window).width() <= 768) {
            $('.navbar ul').hide();
        }
    
        $(window).resize(function() {
            if ($(window).width() > 768) {
                $('.navbar ul').show();
            } else {
                $('.navbar ul').hide();
            }
        });
    });
         
});