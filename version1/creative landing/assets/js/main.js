$(document).ready(function () {
    $('.sponsors__slider').owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            580: {
                items: 5
            },
            965: {
                items: 6
            }
        }
    });


    $('.screens-slider').owlCarousel({
        // items: 3,
        dots: true,
        loop: true,
        autoplay: true,
        dotsEach: true,
        // margin: 100,
        // stagePadding: 220,
        responsive: {
            0: {
                items: 1,
                margin: 30,
                stagePadding: 70
            },
            768: {
                items: 3,
                margin: 50,
                stagePadding: 135
            },
            991: {
                items: 3,
                margin: 100,
                stagePadding: 150
            },
            1024: {
                margin: 100,
                stagePadding: 220
            }
        }
    });

    $('.events-slider').owlCarousel({
        dots: false,
        items: 3,
        margin: 50,
        responsive:{
            0:{
                items: 1,
                dots: true
            },
            580:{
                items: 2,
                margin: 25,
                dots: true
            },
            991:{
                items: 3,
                margin: 30,
                dots: false
            }
        }
    });

});
