document.addEventListener("DOMContentLoaded", function(){

    const pages = document.querySelectorAll(".page");

    function showPage(id){

        pages.forEach(page=>{
            page.classList.remove("active");
        });

        document.getElementById(id).classList.add("active");

        window.scrollTo(0,0);
    }


    // Tap to Continue button
    document.getElementById("openInvitation").onclick = function(){
        showPage("page2");
    };


    // All Continue buttons
    document.querySelectorAll(".next-btn").forEach(button=>{

        button.onclick = function(){

            let nextPage = this.getAttribute("data-next");

            showPage(nextPage);

        };

    });


    // View Again button
    document.getElementById("replayInvitation").onclick = function(){

        showPage("cover");

    };


});
