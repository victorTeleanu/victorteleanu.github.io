(function($) {
    $.fn.bounceImage = function(options) {
        var settings = $.extend({
            moveDistance: 5,
            bounceSpeed: 300,
            bounceInterval: 500
        }, options);

        this.each(function() {
            var $img = $(this);

            function bounce() {
                $img.animate({
                    translateY: settings.moveDistance
                }, settings.bounceSpeed, 'easeInOutQuad', function() {
                    $img.animate({
                        translateY: -settings.moveDistance
                    }, settings.bounceSpeed, 'easeInOutQuad', function() {
                        setTimeout(bounce, settings.bounceInterval);
                    });
                });
            }
            bounce();
        });
        return this;
    };
})(jQuery);
