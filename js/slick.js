$(function () {
    //carousel
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        dots: false
    });

    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.top'),
        nextArrow: $('.bottom'),
        vertical: true,
        dots: false
    });
})