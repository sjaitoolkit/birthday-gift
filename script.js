// ===========================
// Password Check
// ===========================

function checkPassword() {

    const password = document.getElementById("password").value.trim();

    if (password === "sj7823") {

        sessionStorage.setItem("giftUnlocked", "true");

        window.location.replace("gift.html");

    } else {

        document.getElementById("error").innerHTML =
        "❌ Incorrect Password";

    }
}
// ===========================
// Open Gift
// ===========================

function openGift() {

    document.getElementById("giftBox").style.display = "none";

    document.getElementById("giftText").style.display = "block";

    document.getElementById("giftMessage").style.display = "block";

    document.getElementById("gallery").style.display = "block";

    document.getElementById("countdownSection").style.display = "block";


    startSlideshow();

    startCountdown();

}


// ===========================
// Slideshow
// ===========================

function startSlideshow() {

    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) return;


    let current = 0;


    function nextSlide() {


        slides[current].classList.remove("active");


        current++;


        if (current >= slides.length) {

            current = slides.length - 1;

            return;

        }


        slides[current].classList.add("active");


        if (current < slides.length - 1) {

            setTimeout(nextSlide, 2000);

        }

    }


    setTimeout(nextSlide, 2000);

}

// ===========================
// Countdown
// ===========================

let timeLeft = 23;


function startCountdown() {


    const timer = document.getElementById("countdownTimer");

    const nextBtn = document.getElementById("nextBtn");


    if (!timer || !nextBtn) return;


    const countdown = setInterval(() => {


        timer.innerHTML =
        "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);


        timeLeft--;


        if (timeLeft < 0) {


            clearInterval(countdown);


            timer.style.display = "none";


            nextBtn.style.display = "inline-block";


        }


    },1000);


}


// ===========================
// Next Surprise Button
// ===========================

function showLetter() {


    document.getElementById("surpriseTitle").style.display = "none";


    document.getElementById("giftText").style.display = "none";


    document.getElementById("giftMessage").style.display = "none";


    document.getElementById("gallery").style.display = "none";


    document.getElementById("countdownSection").style.display = "none";


    document.getElementById("letterSection").style.display = "block";


}

// ===========================
// Open Letter
// ===========================

function openLetter() {


    const envelope = document.getElementById("envelope");
    const tapText = document.getElementById("tapText");
    const letterBox = document.getElementById("letterBox");


    if(envelope){
        envelope.style.display = "none";
    }


    if(tapText){
        tapText.style.display = "none";
    }


    if(letterBox){
        letterBox.style.display = "block";
    }



    const message = `Happy Birthday, Poornendhu! 🎉❤️

Wishing you a day filled with happiness, laughter, and unforgettable memories.

You are an amazing friend, and I truly appreciate all the wonderful moments we've shared together.

May this new year of your life bring success, good health, peace, and countless reasons to smile.

Stay the kind, caring, and wonderful person you are.

Once again, Happy Birthday! 🎂✨

— With Best Wishes,
Saran`;



    const letter = document.getElementById("letterText");


    if(!letter) return;


    letter.innerHTML = "";


    let i = 0;

    const speed = 40;



    function typeWriter(){


               if(i < message.length){

            if(message.charAt(i) === "\n"){

                letter.innerHTML += "<br>";

            } else {

                letter.innerHTML += message.charAt(i);

            }


            i++;

            setTimeout(typeWriter, speed);


        } else {


            const continueBtn = document.getElementById("continueBtn");


            if(continueBtn){

                continueBtn.style.display = "inline-block";

            }

        }

    }


    typeWriter();

}
// ===========================
// Final Page
// ===========================

function showFinalPage() {

    document.getElementById("letterSection").style.display = "none";

    document.getElementById("finalSection").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}