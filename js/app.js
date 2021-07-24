!function ($) {
    "use strict";
    const MainApp = function () {
    };

    MainApp.prototype.initScroll = function () {
        var navbarHeight = $('nav').outerHeight();
        $('.nav-item .link').click(function (e) {
            var targetHref = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(targetHref).offset().top - navbarHeight
            }, 1000);
            e.preventDefault();
        });
    }

    MainApp.prototype.init = function () {
        this.initScroll();
    },
        $.MainApp = new MainApp,
        $.MainApp.Constructor = MainApp
}(window.jQuery),

    function ($) {
        "use strict";
        $.MainApp.init();
    }(window.jQuery);
