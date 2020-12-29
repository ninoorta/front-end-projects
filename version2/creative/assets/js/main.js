$(document).ready(() => {
    $(".portfolio__item-link").fancybox({
        loop: true,
    });
})



// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            if (document.body.clientWidth < 992) {
                document.querySelector('.header__menu-btn').click();
            }
            $('html, body').animate({
                scrollTop: (target.offset().top - 92)
            }, 800, "easeInOutExpo");
            return false;
        }
    }
});


// Collapse header
document.querySelector('.header__menu-btn').onclick = () => {
    document.querySelector('.header__menu-list').classList.toggle("show");
}

// Justify navbar when scroll > 100
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.querySelector('.header').classList.remove('scrolled');
    }
}



// Vanilla Menu //
function functionScroll() {
    var section = document.querySelectorAll(".page-section"),
        sections = {}, i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    for (i in sections) {
        if (sections[i] <= window.pageYOffset + 92 || sections[i] <= window.pageYOffset + 120) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
    }
}
window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);


// Fix After Click Menu , Resize to Screen > 992px
window.onresize = () => {
    if (document.body.clientWidth > 992) {
        document.querySelector('.header__menu-list').classList.remove("show");
    }
}

// Fix Close Brand Logo 
var closeMenuWhenClickLogo = document.querySelector(".menu-logo__link");
closeMenuWhenClickLogo.onclick = function () {
    document.querySelector(".header__menu-list").classList.remove("show");
};
