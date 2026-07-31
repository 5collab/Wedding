document.addEventListener("DOMContentLoaded", function(){

    // Tap To Open
    document.getElementById("openInvitation").onclick = function(){

        document.getElementById("page2").scrollIntoView({
            behavior:"smooth"
        });

    };


    // Continue Buttons
    document.querySelectorAll(".next-btn").forEach(button=>{

        button.onclick = function(){

            let nextPage = this.getAttribute("data-next");

            document.getElementById(nextPage).scrollIntoView({
                behavior:"smooth"
            });

        };

    });


    // View Again Button
    document.getElementById("replayInvitation").onclick = function(){

        document.getElementById("cover").scrollIntoView({
            behavior:"smooth"
        });

    };


    // Countdown
    let weddingDate = new Date("August 16, 2026 11:00:00").getTime();


    setInterval(function(){

        let now = new Date().getTime();
        let distance = weddingDate - now;


        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


    },1000);


});
