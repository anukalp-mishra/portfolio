$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){

        mobileNav.classList.add('open');
    });

    var typed = new Typed(".typing",{
        strings: ["Developer", "Programmer", "Designer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');
    });
});