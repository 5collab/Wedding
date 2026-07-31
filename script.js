document.addEventListener("DOMContentLoaded", function(){

    // Tap To Open - scroll to page 2
    document.getElementById("openInvitation").onclick = function(){

        document.getElementById("page2").scrollIntoView({
            behavior:"smooth"
        });

    };


    // Continue buttons - scroll to next page
    document.querySelectorAll(".next-btn").forEach(button=>{

        button.onclick = function(){

            const nextPage = this.getAttribute("data-next");

            document.getElementById(nextPage).scrollIntoView({
                behavior:"smooth"
            });

        };

    });


    // View Again - scroll back to cover
    document.getElementById("replayInvitation").onclick = function(){

        document.getElementById("cover").scrollIntoView({
            behavior:"smooth"
        });

    };


    // Countdown
    const weddingDate = new Date("August 16, 2026 11:00:00").getTime();


    setInterval(function(){

        const now = new Date().getTime();
        const distance = weddingDate - now;


        if(distance < 0) return;


        document.getElementById("days").innerHTML =
        Math.floor(distance / (1000*60*60*24));


        document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000*60*60*24)) / (1000*60*60));


        document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000*60*60)) / (1000*60));


        document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000*60)) / 1000);


    },1000);


});
