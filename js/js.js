function showPlans(t) {
    let e = document.querySelectorAll(".plan");
    e.forEach((t) => {
        t.classList.remove("active");
    });
    let o = document.querySelectorAll(`.plan[data-duration="${t}"]`);
    o.forEach((t) => {
        t.classList.add("active");
    });
    let n = document.querySelectorAll(".duration-btn");
    n.forEach((t) => {
        t.classList.remove("active");
    });
    let l = document.querySelector(`.duration-btn[onclick*="${t}"]`);
    l.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
    let t = document.getElementById("navbar-logo");
    window.addEventListener("scroll", function () {
        window.scrollY > 50
            ? (t.style.width = "100px")
            : (t.style.width = "140px");
    });
}),
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: !0,
            nav: !1,
            autoplay: !0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                1e3: { items: 1 },
            },
        });
    }),
    document.addEventListener("DOMContentLoaded", () => {
        showPlans("30mins");
    });
const phoneInputField = document.querySelector("#phone"),
    phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function (t, e) {
            fetch("https://ipinfo.io/json?token=your_token_here")
                .then((t) => t.json())
                .then((e) => t(e.country))
                .catch(() => t("US"));
        },
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
