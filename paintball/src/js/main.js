$(document).ready(function () {
    $('.review-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotEach: true
    });


    // Home Banner Justify
    // let currentHeight = document.documentElement.clientWidth * 0.8;
    // document.querySelector('.banner').style.height = `${currentHeight}px`;
    // console.log(document.height * 0.85 + "px")

    window.onchange = () => {
        console.log("on scrolling:", currentHeight)
        document.querySelector('.banner').style.height = `${document.documentElement.clientWidth * 0.8}px`;
    }


    // Add class active when click in listItemLink
    let headerItems = document.querySelectorAll(".list__item")
    let headerItemsLink = document.querySelectorAll(".list__item-link")

    console.log(headerItems)
    console.log(headerItemsLink[0].href)

    // function addActiveClass(this) {
    //     this.classList.add("active")
    // }

    for (let i = 0; i < 5; i++) {
        // headerItems[i].classList.remove("active");
        headerItems[i].addEventListener("click", () => {
            headerItemsLink[i].classList.toggle("active")
            console.log("clicked")
        })


        // headerItems[i].onclick = () => {
        //     headerItems[i].classList.add("active");
        //     headerItems[i + 5].classList.add("active");
        //     console.log("clicked")
        // }
        // console.log(" run here")
    }

    // Wow Js
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();


    // Set count up numbers
    const counters = document.querySelectorAll('.counter');
    // console.log(counters);
    const speed = 1000; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;
            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 50);
            }
            else {
                counter.innerText = target;
            }
        };

        updateCount();
    });



    // Justify navbar when scroll > 100
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector(".header").classList.add("scrolled");
        } else {
            document.querySelector(".header").classList.remove("scrolled");
        }
    }



    // Open / Close Sidenav
    function openNav() {
        document.querySelector('.body-overlay').style.display = "block";
        document.querySelector(".sidenav").style.width = "250px";
        document.querySelector("#top").style.left = "-125px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        document.querySelector('.body-overlay').style.display = "none";
        document.querySelector(".sidenav").style.width = "0";
        document.querySelector("#top").style.left = "0";
        document.body.style.backgroundColor = "white";
    }

    document.querySelector('.menu-toggle').onclick = openNav;
    document.querySelector('.close').onclick = closeNav;
    document.querySelector('.body-overlay').onclick = closeNav;


    // Preloader
    // let windows = $(window)
    // windows.on("load", function () {
    //     $(".preloader").removeClass("preloader-active");
    // });

    // jQuery(window).on("load", function () {
    //     setTimeout(function () {
    //         jQuery(".preloader__main").addClass("d-none");
    //         jQuery(".open-preloader").addClass("loaded");
    //     }, 1000);
    // });

    // Lazyload
    $(function () {
        $('.lazy').Lazy();
    });







});


