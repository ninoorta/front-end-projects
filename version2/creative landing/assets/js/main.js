$(document).ready(function () {
    $('.screens-slider').owlCarousel({
        loop: true,
        dots: true,
        dotsEach: true,
        items: 3,
        margin: 120,
        stagePadding: 200,
        responsive: {
            0: {
                items: 1,
                margin: 20,
                stagePadding: 70
            },
            768: {
                items: 3,
                margin: 30,
                stagePadding: 120
            },
            1024: {
                items: 3,
                margin: 100,
                stagePadding: 150
            },
            1440: {
                items: 3,
                margin: 150,
                stagePadding: 200
            }
        }
    });

    $('.events-slider').owlCarousel({
        items: 3,
        responsive: {
            0: {
                items: 1,
                dots: true,
                dotsEach: true,
            },
            580: {
                items: 2,
                margin: 20
            },
            991: {
                items: 3,
                dots: false,
                dotsEach: false,
                margin: 50
            }
        }

    });

    $('.sponsors-slider').owlCarousel({
        items: 5,
        dots: false,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        responsive: {
            0: {
                items: 3
            },
            580: {
                items: 5
            },
            991: {
                items: 6
            }
        }
    })

    $(".slider__item-link").fancybox({
        loop: false,
        inforbar: false
    });

    // Collapse navbar
    // document.querySelector('.header__btn').onclick = () => {
    //   
    // }

    document.querySelector('.header__btn').onclick = () => {
        document.querySelector('.header').classList.toggle("active");
        document.querySelector('.collapse-nav').classList.toggle("show");
        document.querySelector('.header__menu-nav').classList.toggle("show");
        document.querySelector('.header__btn').classList.toggle("change");
    }

});