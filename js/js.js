document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("navbar-logo");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            // Adjust the value as needed
            logo.style.width = "100px"; // Shrink logo width
        } else {
            logo.style.width = "140px"; // Original logo width
        }
    });
});



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
