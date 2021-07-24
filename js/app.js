$(document).ready(function () {

    var sectionIds = $('a.nav-link');

    $(document).scroll(function () {
        //scroll
        if ($(document).scrollTop() > 100) {
            $('.navbar').addClass('color-change');
            $('#toTop').fadeIn();
        } else {
            $('.navbar').removeClass('color-change');
            $('#toTop').fadeOut();
        }
        if (sectionIds.length) {
            sectionIds.each(function () {
                var container = $(this).attr('href');
                var containerOffset = $(container).offset().top;
                var containerHeight = $(container).outerHeight();
                var containerBottom = containerOffset + containerHeight;
                var scrollPosition = $(document).scrollTop();

                if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                    $(this).addClass('active');
                    $(this).addClass('no-nav-link');

                } else {
                    $(this).removeClass('active');
                    $(this).removeClass('no-nav-link');
                }
            });
        }
    });

    $("#toTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 0);
    });
});
