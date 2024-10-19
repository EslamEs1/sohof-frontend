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


function showPlans(duration) {
    // Hide all plans first
    const plans = document.querySelectorAll(".plan");
    plans.forEach((plan) => {
        plan.classList.remove("active");
    });

    // Show the plans for the selected duration
    const selectedPlans = document.querySelectorAll(
        `.plan[data-duration="${duration}"]`
    );
    selectedPlans.forEach((plan) => {
        plan.classList.add("active");
    });

    // Change active button state
    const buttons = document.querySelectorAll(".duration-btn");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    const activeButton = document.querySelector(
        `.duration-btn[onclick*="${duration}"]`
    );
    activeButton.classList.add("active");
}

// Show the default duration (e.g., 30mins) on page load
document.addEventListener("DOMContentLoaded", () => {
    showPlans("30mins");
});






const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: function(success, failure) {
        fetch("https://ipinfo.io/json?token=your_token_here")
            .then(response => response.json())
            .then(data => success(data.country))
            .catch(() => success("US"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // for formatting
});

