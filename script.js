<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Wedding Invitation | Ayisha Hiba P C & Muhammed Salah</title>

<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:wght@400;600;700&family=Poppins:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap" rel="stylesheet">


<style>

/* =========================
   BASIC RESET
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    min-height:100vh;
    background:#f8f0df;
    font-family:'Poppins',sans-serif;
    overflow-x:hidden;
}


/* =========================
   PAGE SYSTEM
========================= */

.page{

    display:none;
    min-height:100vh;
    width:100%;

    justify-content:center;
    align-items:center;

    padding:25px;

}


.page.active{

    display:flex;
    animation:fade 1s ease;

}


@keyframes fade{

from{
    opacity:0;
}

to{
    opacity:1;
}

}


/* =========================
   OPENING PAGE
========================= */


.open-page{

    background:
    linear-gradient(
    rgba(255,248,230,0.8),
    rgba(255,248,230,0.8)
    ),
    url("https://images.unsplash.com/photo-1519741497674-611481863552");

    background-size:cover;
    background-position:center;

}


.open-box{

    width:100%;
    max-width:420px;

    padding:45px 25px;

    text-align:center;

    border:2px solid #b08d57;

    background:rgba(255,255,255,0.7);

    border-radius:20px;

    box-shadow:0 0 30px rgba(0,0,0,0.15);

}


.arabic{

    font-family:'Amiri',serif;

    font-size:32px;

    color:#8b6b2f;

    margin-bottom:20px;

}


.open-title{

    font-family:'Cinzel',serif;

    font-size:30px;

    color:#5a3d1e;

    margin-bottom:15px;

}


.names{

    font-family:'Cormorant Garamond',serif;

    font-size:27px;

    color:#8b6b2f;

    font-weight:700;

}


.open-btn{

    margin-top:35px;

    padding:14px 35px;

    border:none;

    border-radius:30px;

    background:#8b6b2f;

    color:white;

    font-size:16px;

    cursor:pointer;

    font-family:'Poppins',sans-serif;

}



/* =========================
   INVITATION PAGE
========================= */


.invitation-box{

    width:100%;
    max-width:450px;

    padding:35px 25px;

    text-align:center;

    background:#fffaf0;

    border:3px solid #b08d57;

    border-radius:20px;

}


.heading{

    font-family:'Cinzel',serif;

    color:#7b5727;

    font-size:28px;

}


.verse{

    font-family:'Amiri',serif;

    font-size:24px;

    margin:20px 0;

    color:#6b4a23;

}


.details{

    font-size:16px;

    line-height:2;

    color:#4b3520;

}


.next-btn,
.location-btn{

    display:inline-block;

    margin-top:25px;

    padding:12px 25px;

    border-radius:30px;

    background:#8b6b2f;

    color:white;

    text-decoration:none;

    border:none;

    cursor:pointer;

}


</style>

</head>


<body>


<!-- PAGE 1 -->

<section class="page open-page active" id="page1">

<div class="open-box">

<div class="arabic">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>


<div class="open-title">
Wedding Invitation
</div>


<div class="names">
Ayisha Hiba P C
<br>
&
<br>
Muhammed Salah
</div>


<button class="open-btn" id="openInvitation">
Tap To Open
</button>


</div>

</section>



<!-- PAGE 2 -->

<section class="page" id="page2">

<div class="invitation-box">


<div class="heading">
Together With Their Families
</div>


<div class="verse">
وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
</div>


<div class="details">

Request the pleasure of your presence<br>
at the celebration of their wedding

<br><br>

<b>Date:</b> 16 August 2026

<br>

<b>Time:</b> 11:00 AM

<br>

<b>Venue:</b><br>
LUXOTICA INTERNATIONAL<br>
CONVENTION CENTRE


</div>


<button class="next-btn">
Continue
</button>


</div>

</section>
<!-- PAGE 3 : COUNTDOWN -->

<section class="page" id="page3">

<div class="invitation-box">

<div class="decor">
❈ ✦ ❈
</div>


<div class="heading">
A Beautiful Beginning
</div>


<div class="gold-line"></div>


<div class="verse">

وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً

</div>


<p class="details">

May Allah bless their journey together<br>
with love, happiness and endless mercy.

</p>


<div class="countdown-box">

<div class="countdown-title">
Counting Down To The Wedding
</div>


<div id="countdown">
Loading...
</div>


</div>


<button class="next-btn">
Continue
</button>


</div>

</section>





<!-- PAGE 4 : LOCATION -->

<section class="page" id="page4">

<div class="invitation-box">


<div class="decor">
✦ ✦ ✦
</div>


<div class="location-box">


<div class="location-title">
Wedding Venue
</div>


<div class="gold-line"></div>


<p class="details">

LUXOTICA INTERNATIONAL<br>
CONVENTION CENTRE

</p>


<a href="https://maps.app.goo.gl/3epFwKpaRCabrRx86"
target="_blank"
class="location-btn">

📍 View Location

</a>


</div>


</div>

</section>
