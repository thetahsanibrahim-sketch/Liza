/* =========================================
   1000 LANGUAGES BIRTHDAY TYPING SYSTEM
   ========================================= */

const birthdayLanguages = [

    ["English", "Happy Birthday"],

    ["Bangla", "শুভ জন্মদিন"],

    ["Arabic", "عيد ميلاد سعيد"],

    ["Spanish", "Feliz cumpleaños"],

    ["French", "Joyeux anniversaire"],

    ["German", "Alles Gute zum Geburtstag"],

    ["Italian", "Buon compleanno"],

    ["Portuguese", "Feliz aniversário"],

    ["Russian", "С днём рождения"],

    ["Japanese", "お誕生日おめでとう"],

    ["Korean", "생일 축하합니다"],

    ["Chinese", "生日快乐"],

    ["Hindi", "जन्मदिन मुबारक हो"],

    ["Urdu", "سالگرہ مبارک"],

    ["Turkish", "Doğum günün kutlu olsun"],

    ["Persian", "تولدت مبارک"],

    ["Greek", "Χρόνια πολλά"],

    ["Hebrew", "יום הולדת שמח"],

    ["Thai", "สุขสันต์วันเกิด"],

    ["Vietnamese", "Chúc mừng sinh nhật"],

    ["Indonesian", "Selamat ulang tahun"],

    ["Malay", "Selamat hari jadi"],

    ["Filipino", "Maligayang kaarawan"],

    ["Swedish", "Grattis på födelsedagen"],

    ["Norwegian", "Gratulerer med dagen"],

    ["Danish", "Tillykke med fødselsdagen"],

    ["Dutch", "Gefeliciteerd met je verjaardag"],

    ["Polish", "Wszystkiego najlepszego z okazji urodzin"],

    ["Czech", "Všechno nejlepší k narozeninám"],

    ["Slovak", "Všetko najlepšie k narodeninám"],

    ["Romanian", "La mulți ani"],

    ["Hungarian", "Boldog születésnapot"],

    ["Ukrainian", "З днем народження"],

    ["Serbian", "Срећан рођендан"],

    ["Croatian", "Sretan rođendan"],

    ["Bulgarian", "Честит рожден ден"],

    ["Finnish", "Hyvää syntymäpäivää"],

    ["Icelandic", "Til hamingju með afmælið"],

    ["Irish", "Lá breithe shona duit"],

    ["Welsh", "Pen-blwydd hapus"],

    ["Latin", "Felix sit natalis dies"],

    ["Swahili", "Heri ya kuzaliwa"],

    ["Afrikaans", "Gelukkige verjaardag"],

    ["Zulu", "Usuku lokuzalwa oluhle"],

    ["Amharic", "መልካም ልደት"],

    ["Somali", "Dhalasho wacan"],

    ["Nepali", "जन्मदिनको शुभकामना"],

    ["Tamil", "பிறந்தநாள் வாழ்த்துக்கள்"],

    ["Telugu", "పుట్టినరోజు శుభాకాంక్షలు"],

    ["Kannada", "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು"],

    ["Malayalam", "ജന്മദിനാശംസകൾ"],

    ["Marathi", "वाढदिवसाच्या हार्दिक शुभेच्छा"],

    ["Gujarati", "જન્મદિવસની શુભકામનાઓ"],

    ["Punjabi", "ਜਨਮਦਿਨ ਮੁਬਾਰਕ"],

    ["Sinhala", "සුභ උපන්දිනයක්"],

    ["Mongolian", "Төрсөн өдрийн мэнд хүргэе"],

    ["Armenian", "Ծնունդդ շնորհավոր"],

    ["Georgian", "გილოცავ დაბადების დღეს"],

    ["Albanian", "Gëzuar ditëlindjen"],

    ["Basque", "Zorionak zure urtebetetzean"],

    ["Catalan", "Feliç aniversari"],

    ["Galician", "Feliz aniversario"],

    ["Esperanto", "Feliĉan naskiĝtagon"],

    ["Hawaiian", "Hauʻoli lā hānau"],

    ["Maori", "Hari huritau"],

    ["Samoan", "Manuia lou aso fanau"],

    ["Yoruba", "Ẹ ku ọjọ́ ibi"],

    ["Igbo", "Ezi ụbọchị ọmụmụ"],

    ["Hausa", "Barka da ranar haihuwa"],

    ["Malagasy", "Tratry ny tsingerintaona nahaterahana"],

    ["Kinyarwanda", "Isabukuru nziza"],

    ["Luxembourgish", "Alles Guddes fir de Gebuertsdag"],

    ["Estonian", "Palju õnne sünnipäevaks"],

    ["Latvian", "Daudz laimes dzimšanas dienā"],

    ["Lithuanian", "Su gimtadieniu"],

    ["Slovenian", "Vse najboljše za rojstni dan"],

    ["Bosnian", "Sretan rođendan"],

    ["Macedonian", "Среќен роденден"],

    ["Maltese", "Għeluq is-sena t-tajba"]

];


/* =========================================
   ELEMENTS
   ========================================= */

const languageNameElement =
    document.getElementById("languageName");

const birthdayWordElement =
    document.getElementById("birthdayWord");

const languageNumberElement =
    document.getElementById("languageNumber");


/* =========================================
   VARIABLES
   ========================================= */

let languageIndex = 0;

let characterIndex = 0;

let deleting = false;


/* =========================================
   TYPING FUNCTION
   ========================================= */

function languageTyping() {

    const currentLanguage =
        birthdayLanguages[languageIndex];

    const language =
        currentLanguage[0];

    const text =
        currentLanguage[1];


    /* Language name */

    languageNameElement.textContent =
        language;


    /* Counter */

    languageNumberElement.textContent =
        languageIndex + 1;


    /* Typing */

    if (!deleting) {

        birthdayWordElement.textContent =
            text.substring(0, characterIndex);


        characterIndex++;


        /* Finished typing */

        if (characterIndex > text.length) {

            deleting = true;

            setTimeout(languageTyping, 1800);

            return;
        }


        setTimeout(
            languageTyping,
            90
        );

    }


    /* Deleting */

    else {

        birthdayWordElement.textContent =
            text.substring(0, characterIndex);


        characterIndex--;


        /* Finished deleting */

        if (characterIndex < 0) {

            deleting = false;

            characterIndex = 0;


            /* Next language */

            languageIndex++;


            /* Start again */

            if (
                languageIndex >=
                birthdayLanguages.length
            ) {

                languageIndex = 0;
            }


            setTimeout(
                languageTyping,
                500
            );

            return;
        }


        setTimeout(
            languageTyping,
            45
        );
    }
}


/* =========================================
   START
   ========================================= */

languageTyping();
