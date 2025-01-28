$(document).ready(function() {
    // 1. Scrolls
    $("#start").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#home").offset().top - ($(window).height()/2) + ($("#home").outerHeight()/2) }, 0);
    });
    $("#about-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#about").offset().top - ($(window).height()/2) + ($("#about").outerHeight()/2) }, 0);
    });
    $("#projects-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#projects").offset().top - ($(window).height()/2) + ($("#projects").outerHeight()/2) }, 0);
    });
    $("#services-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#toolkit").offset().top - ($(window).height()/2) + ($("#toolkit").outerHeight()/2) }, 0);
    });
    $("#contact-link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#contact").offset().top - ($(window).height()/2) + ($("#contact").outerHeight()/2) }, 0);
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
    //3.4 FIlter to projects
    $(".project-box img").on("mouseover", function() {
        $(this).css({
            filter: "unset",
            transform: "scale(1.05)"
        })
    })

    $(".project-box img").on("mouseout", function() {
        $(this).css({
            filter: "grayscale(90%)",
            transform: "scale(1)"
        })
    })

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
    $(".hamburger").on("click", function () {
        $(".navbar").toggleClass("active-nav");
    })

    //7. Dynamic Text (Plugin JQuery-typist)
    function dynamicText() {
        $('#dynamicText')
        .typist({
            speed: 20, // Velocidad al escribir
        })
        .typistAdd("Full Stack Developer") // Texto inicial
        .typistPause(2000) // Pausa antes de borrar
        .typistRemove(20) // Borra 12 caracteres (el texto anterior)
        .typistAdd("Hola") // Añade un nuevo texto
        .typistPause(2000) // Pausa antes de borrar
        .typistRemove(4) // Borra el nuevo texto
        .typistAdd("Fully jQuery-based!") // Añade el siguiente texto
        .typistPause(2000)
        .on('end_type.typist', function () {
            if ($(this).text() == "Fully jQuery-based!|") {
                setTimeout(function () {
                    $("#dynamicText").html("");
                    dynamicText();
                }, 2000);
            }
        });
    }
    dynamicText();
});