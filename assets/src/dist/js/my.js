$(document).ready(function() {
    $('.index-navbar__link, .footer-menu__link').not('.not-scroll').on( "click", function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900);
    });
});