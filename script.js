document.addEventListener("DOMContentLoaded", function(){

    const pages = document.querySelectorAll(".page");

    function showPage(id){
        pages.forEach(page=>{
            page.classList.remove("active");
        });

        document.getElementById(id).classList.add("active");
    }


    // Tap To Open
    document.getElementById("openInvitation").onclick = function(){
        showPage("page2");
    };


    // Continue Buttons
    document.querySelectorAll(".next-btn").forEach(button=>{

        button.onclick = function(){

            const nextPage = this.getAttribute("data-next");

            showPage(nextPage);

        };

    });


    // View Again Button
    document.getElementById("replayInvitation").onclick = function(){

        showPage("cover");

    };


});
