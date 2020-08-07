$(function(){

	$('.menu__title').on('click', function (){
	    $('.menu').addClass('active');
        $('.menu__list').slideToggle();
    });
    $('.menu__close').on('click', function (){
        $('.menu').removeClass('active');
        $('.menu__list').slideToggle();
    });
    $('.menu__list-item-1').on('click', function(){
        $('.menu__list-item-1').addClass('active');
    });
    $('.menu__list-item-2').on('click', function(){
        $('.menu__list-item-2').addClass('active');
    });
    $('.menu__list-item-3').on('click', function(){
        $('.menu__list-item-3').addClass('active');
    });
    $('.menu__list-item-4').on('click', function(){
        $('.menu__list-item-4').addClass('active');
    });
    $('.menu__list-item-5').on('click', function(){
        $('.menu__list-item-5').addClass('active');
    });
    $('.menu__list-item-6').on('click', function(){
        $('.menu__list-item-6').addClass('active');
    });
    $('.menu__list-item-7').on('click', function(){
        $('.menu__list-item-7').addClass('active');
    });
    $('.yoga-slider').slick({
        arrows: false,
        asNavFor: '.yoga-dots'
    });
    $('.yoga-dots').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.yoga-slider'
    });
    $('.trainers-slider').slick({
        arrows: false,
        asNavFor: '.trainers-dots'
    });
    $('.trainers-dots').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.trainers-slider'
    });
    $('.reviews-slider').slick({
        arrows: false,
        asNavFor: '.reviews-dots'
    });
    $('.reviews-dots').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews-slider'
    });
    $(document).ready(function() {
        $('#fullpage').fullpage({
            autoScrolling:true,
            scrollHorizontally: true,
            sectionSelector: '.page-section',
            scrollBar:true,
        });
    });
    new WOW().init();
});