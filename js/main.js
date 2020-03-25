$(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: 3000,
        fade: true
    });

    $('.header-btn').on('click', function() {
        $('.menu').addClass('active');
        $('.menu').addClass('z-index', '7');
        $('.slick-dots').css('z-index', '0');
    });

    $('.close-btn').on('click', function() {
        $('.menu').removeClass('active');
    })
});