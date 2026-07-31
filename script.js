document.addEventListener("DOMContentLoaded",()=>{

const openBtn=document.getElementById("openInvitation");

openBtn.onclick=()=>{
document.getElementById("page2").scrollIntoView({
behavior:"smooth"
});
};


document.querySelectorAll(".next-btn").forEach(btn=>{

btn.onclick=()=>{

let page=btn.dataset.next;

document.getElementById(page).scrollIntoView({
behavior:"smooth"
});

};

});


document.getElementById("replayInvitation").onclick=()=>{

document.getElementById("cover").scrollIntoView({
behavior:"smooth"
});

};



let target=new Date("August 16, 2026 11:00:00").getTime();


setInterval(()=>{

let now=new Date().getTime();
let diff=target-now;


if(diff<0)return;


document.getElementById("days").innerHTML=
Math.floor(diff/(1000*60*60*24));


document.getElementById("hours").innerHTML=
Math.floor((diff%(1000*60*60*24))/(1000*60*60));


document.getElementById("minutes").innerHTML=
Math.floor((diff%(1000*60*60))/(1000*60));


document.getElementById("seconds").innerHTML=
Math.floor((diff%(1000*60))/1000);


},1000);


});
