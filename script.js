document.addEventListener("DOMContentLoaded", function(){

    const pages = document.querySelectorAll(".page");

    function showPage(id){

        pages.forEach(page=>{
            page.classList.remove("active");
        });

        document.getElementById(id).classList.add("active");

    }


    document.getElementById("openInvitation").onclick=function(){
        showPage("page2");
    };


    document.querySelectorAll(".next-btn").forEach(button=>{

        button.onclick=function(){

            let nextPage=this.dataset.next;

            showPage(nextPage);

        };

    });


    document.getElementById("replayInvitation").onclick=function(){
        showPage("cover");
    };

});
