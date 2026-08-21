/* =========================================
   PARTICLES
========================================= */

const particleBox =
    document.getElementById("particles");


for(let i = 0; i < 90; i++){

    const p =
        document.createElement("div");

    p.className = "particle";

    p.style.left =
        Math.random() * 100 + "%";

    p.style.animationDuration =
        (5 + Math.random() * 12) + "s";

    p.style.animationDelay =
        Math.random() * 10 + "s";

    const size =
        1 + Math.random() * 3;

    p.style.width =
        size + "px";

    p.style.height =
        size + "px";

    particleBox.appendChild(p);
}



/* =========================================
   ALPHABET ANIMATION
========================================= */

function showAlphabet(){

    const box =
        document.getElementById("alphabet");

    box.innerHTML = "";

    const text =
        "HAPPY BIRTHDAY";

    [...text].forEach((letter,index)=>{

        const span =
            document.createElement("span");

        span.textContent =
            letter === " "
            ? "\u00A0"
            : letter;

        span.style.animationDelay =
            (index * 0.08) + "s";

        box.appendChild(span);

    });
}


showAlphabet();



/* =========================================
   1000 LANGUAGE EXPERIENCE
========================================= */

/*
   Authentic seed translations.
   The interface contains 1000 steps.
   The seed set is cycled through those steps.

   You can extend this array with
   additional verified translations.
*/

const languages = [

    ["English","Happy Birthday"],

    ["Spanish","Feliz cumpleaños"],

    ["French","Joyeux anniversaire"],

    ["German","Alles Gute zum Geburtstag"],

    ["Italian","Buon compleanno"],

    ["Portuguese","Feliz aniversário"],

    ["Dutch","Fijne verjaardag"],

    ["Swedish","Grattis på födelsedagen"],

    ["Norwegian","Gratulerer med dagen"],

    ["Danish","Tillykke med fødselsdagen"],

    ["Finnish","Hyvää syntymäpäivää"],

    ["Icelandic","Til hamingju með afmælið"],

    ["Irish","Lá breithe shona duit"],

    ["Welsh","Pen-blwydd hapus"],

    ["Polish","Wszystkiego najlepszego z okazji urodzin"],

    ["Czech","Všechno nejlepší k narozeninám"],

    ["Slovak","Všetko najlepšie k narodeninám"],

    ["Hungarian","Boldog születésnapot"],

    ["Romanian","La mulți ani"],

    ["Greek","Χρόνια πολλά"],

    ["Turkish","Doğum günün kutlu olsun"],

    ["Arabic","عيد ميلاد سعيد"],

    ["Hebrew","יום הולדת שמח"],

    ["Persian","تولدت مبارک"],

    ["Urdu","سالگرہ مبارک"],

    ["Hindi","जन्मदिन मुबारक"],

    ["Bengali","শুভ জন্মদিন"],

    ["Punjabi","ਜਨਮਦਿਨ ਮੁਬਾਰਕ"],

    ["Gujarati","જન્મદિવસની શુભેચ્છા"],

    ["Marathi","वाढदिवसाच्या हार्दिक शुभेच्छा"],

    ["Nepali","जन्मदिनको शुभकामना"],

    ["Sinhala","සුභ උපන්දිනයක් වේවා"],

    ["Tamil","பிறந்தநாள் வாழ்த்துக்கள்"],

    ["Telugu","పుట్టినరోజు శుభాకాంక్షలు"],

    ["Kannada","ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು"],

    ["Malayalam","ജന്മദിനാശംസകൾ"],

    ["Thai","สุขสันต์วันเกิด"],

    ["Vietnamese","Chúc mừng sinh nhật"],

    ["Indonesian","Selamat ulang tahun"],

    ["Malay","Selamat hari jadi"],

    ["Filipino","Maligayang kaarawan"],

    ["Chinese","生日快乐"],

    ["Japanese","お誕生日おめでとう"],

    ["Korean","생일 축하합니다"],

    ["Mongolian","Төрсөн өдрийн мэнд хүргэе"],

    ["Russian","С днём рождения"],

    ["Ukrainian","З днем народження"],

    ["Bulgarian","Честит рожден ден"],

    ["Serbian","Srećan rođendan"],

    ["Croatian","Sretan rođendan"],

    ["Slovenian","Vse najboljše"],

    ["Estonian","Palju õnne sünnipäevaks"]

];


let languageIndex = 0;


function showLanguage(){

    const item =
        languages[
            languageIndex %
            languages.length
        ];

    const number =
        languageIndex + 1;


    document.getElementById(
        "langNumber"
    ).textContent =
        String(number).padStart(3,"0");


    document.getElementById(
        "languageName"
    ).textContent =
        item[0];


    document.getElementById(
        "birthdayWord"
    ).textContent =
        item[1];


    document.getElementById(
        "langProgress"
    ).style.width =
        (number / 1000 * 100) + "%";

}


showLanguage();



/* NEXT LANGUAGE */

document
    .getElementById("nextLang")
    .addEventListener("click",()=>{

        languageIndex++;

        if(languageIndex >= 1000){

            languageIndex = 0;

        }

        showLanguage();

        changeTheme();

    });



/* PREVIOUS LANGUAGE */

document
    .getElementById("prevLang")
    .addEventListener("click",()=>{

        languageIndex--;

        if(languageIndex < 0){

            languageIndex = 999;

        }

        showLanguage();

        changeTheme();

    });



/* =========================================
   SPECIAL QUOTES
========================================= */

const quotes = [

    "May your birthday be the beginning of a chapter you will one day remember with the biggest smile.",

    "Some people are remembered for what they do. Rare people are remembered for how they make others feel. Keep being rare.",

    "May life give you the courage to chase what you want, the patience to wait for what you deserve, and the happiness to enjoy what you already have.",

    "Today, the universe gets one more reason to celebrate: you. Happy Birthday, Liza.",

    "May every ordinary day ahead hide an extraordinary little reason for you to smile.",

    "May the coming year be softer, brighter and kinder to your heart than the year before.",

    "You deserve a life filled with moments that make you stop and think: this is exactly what I wished for."

];


let quoteIndex = 0;


document.getElementById(
    "specialQuote"
).textContent =
    quotes[0];



document
    .getElementById("newQuote")
    .addEventListener("click",()=>{

        quoteIndex++;

        if(
            quoteIndex >= quotes.length
        ){

            quoteIndex = 0;

        }


        const quote =
            document.getElementById(
                "specialQuote"
            );


        quote.style.opacity = 0;


        setTimeout(()=>{

            quote.textContent =
                quotes[quoteIndex];

            quote.style.opacity = 1;

        },180);


        changeTheme();

    });



/* =========================================
   COUNTDOWN
========================================= */

const birthday =
    new Date(
        "2026-08-24T00:00:00+06:00"
    ).getTime();


let alreadyCelebrated = false;


function updateCountdown(){

    const now =
        Date.now();


    const distance =
        birthday - now;


    if(distance <= 0){

        document.getElementById(
            "days"
        ).textContent = "00";

        document.getElementById(
            "hours"
        ).textContent = "00";

        document.getElementById(
            "minutes"
        ).textContent = "00";

        document.getElementById(
            "seconds"
        ).textContent = "00";


        if(!alreadyCelebrated){

            celebrate();

            alreadyCelebrated = true;

        }

        return;

    }


    const days =
        Math.floor(
            distance /
            86400000
        );


    const hours =
        Math.floor(
            (distance % 86400000)
            / 3600000
        );


    const minutes =
        Math.floor(
            (distance % 3600000)
            / 60000
        );


    const seconds =
        Math.floor(
            (distance % 60000)
            / 1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2,"0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2,"0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2,"0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2,"0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);



/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById("music");


const musicBtn =
    document.getElementById("musicBtn");


musicBtn.addEventListener(
    "click",
    ()=>{

        if(music.paused){

            music
                .play()
                .then(()=>{

                    musicBtn.textContent =
                        "◉ Music";

                })
                .catch(()=>{

                    alert(
                        "Please put your music file inside assets/birthday.mp3"
                    );

                });

        }

        else{

            music.pause();

            musicBtn.textContent =
                "♫ Music";

        }

    }
);



/* =========================================
   THEME SYSTEM
========================================= */

const themes = [

    "",

    "theme-gold",

    "theme-blue",

    "theme-purple"

];


let themeIndex = 0;


function changeTheme(){

    document.body.classList.remove(
        "theme-gold",
        "theme-blue",
        "theme-purple"
    );


    themeIndex++;


    if(
        themeIndex >= themes.length
    ){

        themeIndex = 0;

    }


    if(themes[themeIndex]){

        document.body.classList.add(
            themes[themeIndex]
        );

    }

}



/* =========================================
   ENTER BUTTON
========================================= */

document
    .getElementById("enterBtn")
    .addEventListener("click",()=>{

        changeTheme();

        document
            .getElementById("specialQuote")
            .scrollIntoView({
                behavior:"smooth"
            });

    });



/* =========================================
   MAKE A WISH
========================================= */

document
    .getElementById("wishBtn")
    .addEventListener("click",()=>{

        changeTheme();

        celebrate();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });



/* =========================================
   CONFETTI
========================================= */

function celebrate(){

    for(
        let i = 0;
        i < 100;
        i++
    ){

        const confetti =
            document.createElement("div");


        confetti.className =
            "wish";


        confetti.style.left =
            "50%";


        confetti.style.top =
            "50%";


        confetti.style.width =
            "8px";


        confetti.style.height =
            "8px";


        confetti.style.background =
            [
                "var(--pink)",
                "#ffffff",
                "#ffd166",
                "#b56cff"
            ][
                Math.floor(
                    Math.random() * 4
                )
            ];


        confetti.style.borderRadius =
            "2px";


        document.body.appendChild(
            confetti
        );


        const x =
            (Math.random() - .5)
            * window.innerWidth
            * 1.5;


        const y =
            (Math.random() - .5)
            * window.innerHeight
            * 1.5;


        confetti.animate(

            [

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",

                    opacity:1

                },

                {

                    transform:
                        `translate(${x}px,${y}px)
                         rotate(${Math.random()*1000}deg)`,

                    opacity:0

                }

            ],

            {

                duration:
                    1800 +
                    Math.random()*1400,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );


        setTimeout(()=>{

            confetti.remove();

        },3400);

    }

}
