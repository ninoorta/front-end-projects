$(document).ready(function () {
    $('.banner__slider').owlCarousel({
        loop: true,
        // autoplay: true,
        dots: true,
        items: 1

    });
    // console.log("run to here")

    $('.bestSellers-slider').owlCarousel({
        nav: true,
        navSpeed: 1200,
        dots: false,
        items: 5,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1,
                nav: true
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.popular-slider').owlCarousel({
        items: 3,
        margin: 20,
        dots: false,
        nav: true,
        navSpeed: 1200,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1
            },
            768: {
                items: 2,
                margin: 20
            },
            991: {
                items: 3,
                margin: 20
            }
        }
    });

    $('.hot-deal__slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1200,
        navSpeed: 1200,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1
            }
        }
    });


    $('.new-arrival__slider').owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        margin: 10,
        navSpeed: 800,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });

    $('.recently-slider').owlCarousel({
        items: 6,
        margin: 20,
        dots: false,
        nav: true,
        navSpeed: 700,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            360: {
                items: 1
            },
            500: {
                items: 2,
                margin: 20
            },
            1024: {
                items: 4,
                margin: 20
            },
            1200: {
                items: 5
            },
            1300: {
                items: 6
            }
        }
    });

    // console.log('run to here')
    $('.featured-slider').owlCarousel({
        items: 4,
        dots: false,
        nav: true,
        margin: 30,
        navSpeed: 800,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                nav: false
            },
            360: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });


    $('.sponsors-slider').owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });


    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    console.log(document.getElementsByClassName('day-value'));

    let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            for (let i = 0; i < 8; i++) {

                document.getElementsByClassName('day-value')[i].innerText = Math.floor(distance / (day));
                document.getElementsByClassName('hour-value')[i].innerText = Math.floor((distance % (day)) / (hour));
                document.getElementsByClassName('minute-value')[i].innerText = Math.floor((distance % (hour)) / (minute));
                document.getElementsByClassName('second-value')[i].innerText = Math.floor((distance % (minute)) / second);
            }


            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //  'IT'S MY BIRTHDAY!;
            //}

        }, second)


});