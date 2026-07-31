document.addEventListener("DOMContentLoaded", function(){


const pages = document.querySelectorAll(".page");


// Show selected page

function showPage(id){

    pages.forEach(page => {

        page.classList.remove("active");

    });


    document.getElementById(id).classList.add("active");


    window.scrollTo(0,0);

}



// Tap To Open Button

const openButton = document.getElementById("openInvitation");


if(openButton){

    openButton.onclick = function(){

        showPage("page2");

    };

}



// Continue buttons

const nextButtons = document.querySelectorAll(".next-btn");


let currentPage = 2;


nextButtons.forEach(button => {


    button.onclick = function(){


        currentPage++;


        if(currentPage <= 5){

            showPage("page" + currentPage);

        }


    };


});



});
// =========================
// WEDDING COUNTDOWN
// =========================


const weddingDate = new Date("August 16, 2026 11:00:00").getTime();


const countdown = document.getElementById("countdown");


function updateCountdown(){


    if(!countdown) return;



    const now = new Date().getTime();


    const distance = weddingDate - now;



    if(distance < 0){

        countdown.innerHTML = "The Wedding Day Has Arrived ❤️";

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



    countdown.innerHTML =

    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes " +
    seconds + " Seconds";


}



updateCountdown();


setInterval(updateCountdown,1000);
