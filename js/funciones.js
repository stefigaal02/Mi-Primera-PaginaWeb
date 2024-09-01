jQuery('document').ready(function ($) {

    var navBtn = $('#main-menu .nav-button'),
        menu = $('#main-menu .menu');

    navBtn.click(function () {

        if (menu.css('display') == 'none') {

            $(this).addClass('open');
            menu.addClass('open');

        } else {

            $(this).removeClass('open');
            menu.removeClass('open');
        }


    });

});

