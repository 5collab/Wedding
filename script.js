/* ==========================================
   WEDDING INVITATION SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const pages = document.querySelectorAll(".page");

    // Show selected page
    window.showPage = function (id) {

        pages.forEach(page => {
            page.classList.remove("active");
        });

        document.getElementById(id).classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    // Open Invitation Button
    const openBtn = document.getElementById("openInvitation");

    if (openBtn) {

        openBtn.addEventListener("click", function () {

            showPage("page2");

        });

    }

});

/* ==========================================
   OPTIONAL COUNTDOWN
   (Add this only if you have a countdown box)
========================================== */

const weddingDate = new Date("August 16, 2026 11:00:00").getTime();

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(timer);

        const countdown = document.getElementById("countdown");

        if (countdown) {
            countdown.innerHTML = "💍 Today is the Nikkah!";
        }

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) /
        (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = document.getElementById("countdown");

    if (countdown) {

        countdown.innerHTML =
            days + " Days " +
            hours + " Hours " +
            minutes + " Minutes " +
            seconds + " Seconds";

    }

}, 1000);
