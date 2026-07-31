/* ======================================
   Wedding Invitation - script.js
   Part 1A
====================================== */

// Page Elements
const pages = document.querySelectorAll(".page");
const openBtn = document.getElementById("openInvitation");
const replayBtn = document.getElementById("replayInvitation");
const nextButtons = document.querySelectorAll(".next-btn");

// Show a page
function showPage(id){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    const target=document.getElementById(id);

    if(target){
        target.classList.add("active");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

}

// Tap To Open
if(openBtn){

    openBtn.addEventListener("click",()=>{

        document.body.classList.add("opened");

        showPage("page2");

    });

}

// Continue Buttons
nextButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const next=button.dataset.next;

        showPage(next);

    });

});

// View Again
if(replayBtn){

    replayBtn.addEventListener("click",()=>{

        showPage("cover");

    });

}
/* ======================================
   Wedding Invitation - script.js
   Part 1B
====================================== */

// ===== Wedding Countdown =====

// Wedding Date
const weddingDate = new Date("August 16, 2026 11:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

// Run Countdown
updateCountdown();
setInterval(updateCountdown, 1000);
/* ======================================
   Wedding Invitation - script.js
   Part 2
====================================== */

// ===== Fade Animation =====

function animateBoxes() {

    const boxes = document.querySelectorAll(".detail-box,.count-box");

    boxes.forEach((box, index) => {

        box.style.opacity = "0";
        box.style.transform = "translateY(40px)";

        setTimeout(() => {

            box.style.transition =
                "all .7s ease";

            box.style.opacity = "1";
            box.style.transform =
                "translateY(0px)";

        }, index * 180);

    });

}

// Animate whenever page changes
const oldShowPage = showPage;

showPage = function(id){

    oldShowPage(id);

    setTimeout(() => {

        animateBoxes();

    },200);

};

// Initial animation
window.addEventListener("load",()=>{

    animateBoxes();

});

// ===== Button Ripple Effect =====

document.querySelectorAll(
".open-btn,.next-btn,.location-btn"
).forEach(btn=>{

    btn.addEventListener("click",function(e){

        const ripple =
        document.createElement("span");

        ripple.className="ripple";

        const rect =
        this.getBoundingClientRect();

        ripple.style.left =
        (e.clientX-rect.left)+"px";

        ripple.style.top =
        (e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/* ======================================
   Wedding Invitation - script.js
   Part 3 (Final)
====================================== */

// ===== Floating Stars =====

const starsContainer = document.querySelector(".stars");

if (starsContainer) {

    for (let i = 0; i < 40; i++) {

        const star = document.createElement("span");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 6 + "s";

        star.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        starsContainer.appendChild(star);

    }

}

// ===== Page Loaded =====

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    updateCountdown();

});

// ===== Keyboard Navigation =====

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        const current =
            document.querySelector(".page.active");

        if (!current) return;

        if (current.id === "cover") showPage("page2");
        else if (current.id === "page2") showPage("page3");
        else if (current.id === "page3") showPage("page4");

    }

    if (e.key === "ArrowLeft") {

        const current =
            document.querySelector(".page.active");

        if (!current) return;

        if (current.id === "page4") showPage("page3");
        else if (current.id === "page3") showPage("page2");
        else if (current.id === "page2") showPage("cover");

    }

});

// ===== Console Message =====

console.log(
"%c✨ Wedding Invitation Loaded Successfully ✨",
"color:#FFD700;font-size:18px;font-weight:bold;"
);
