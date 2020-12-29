// Smooth scrolling using jQuery easing
// Scroll to exact position
$('a.js-scroll-trigger[href*="#"]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            if(document.body.clientWidth < 992){
                document.querySelector('.header__menu-btn').click();
            }
            $('html, body').animate({
                scrollTop: (target.offset().top - 70)

            }, 200, "easeInOutExpo");
            return false;
        }
    }
});

window.onresize = () => {
    if (document.body.clientWidth > 992) {
        document.querySelector('.header__menu-list').classList.remove("show");
    }
}


var closeMenuWhenClickLogo = document.querySelector(".menu-logo__link");
closeMenuWhenClickLogo.onclick = function () {
    document.querySelector(".header__menu-list").classList.remove("show");
};


// Justify navbar when scroll > 100
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".header").style.padding = "8px 16px";
        document.querySelector(".header__menu-logo").style.fontSize = "24px";
    } else {
        document.querySelector(".header").style.padding = "20px 16px";
        document.querySelector(".header__menu-logo").style.fontSize = "28px";
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
        if (sections[i] <= window.pageYOffset + 94) {
            document.querySelector('.active').classList.remove('active');
            document.querySelector('a[href*=' + i + ']').classList.add('active');
        }
    }
}
window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);


// Collapse navbar
document.querySelector('.header__menu-btn').onclick = () => {
    document.querySelector('.header__menu-list').classList.toggle("show")
}




// Show / Close Modal Box
let item = document.getElementsByClassName('portfolio__item')
let btnCloseModal = document.getElementsByClassName('close')
let btnCloseModalFooter = document.getElementsByClassName('content-body__btn')


for (let i = 1; i < 7; i++) {
    item[i - 1].onclick = () => {
        document.getElementById(`modal${i}`).style.display = "block";
        document.getElementsByTagName("body")[0].className = "modal-open";
        document.querySelector(".modal-layout").className = "modal-layout fade";
        document.getElementsByClassName('portfolio__modal-wrapper')[`${i - 1}`].style.transform = "none";

    }
    btnCloseModal[i - 1].onclick = () => {
        document.getElementById(`modal${i}`).style.display = "none";
        document.getElementsByTagName("body")[0].className = ""
        document.querySelector(".modal-layout").className = "modal-layout";
    }
    btnCloseModalFooter[i - 1].onclick = () => {
        document.getElementById(`modal${i}`).style.display = "none";
        document.getElementsByTagName("body")[0].className = ""
        document.querySelector(".modal-layout").className = "modal-layout";
    }
}


// Create animation modal go down 50px