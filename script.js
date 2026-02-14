let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let popup = document.getElementById("popup");
let bgm = document.getElementById("bgm");

let yesSize = 1;
let noSize = 1;

/* Typing effect */
let text = "Oshu";
let i = 0;
function typing(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,500);
    }
}
typing();

/* Falling hearts generator */
function createHearts(){
    let heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random()*3+3)+"s";
    document.querySelector(".falling-hearts").appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
setInterval(createHearts,500);

/* YES click */
yesBtn.addEventListener("click", function() {

    // Show popup
    popup.style.display = "flex";

    // Play music smoothly
    bgm.volume = 0;
    bgm.play().catch(error => {
        console.log("Audio blocked:", error);
    });

    // Soft fade-in effect
    let fade = setInterval(() => {
        if (bgm.volume < 0.5) {
            bgm.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);

    // Confetti effect
    confetti({
        particleCount: 200,
        spread: 120
    });
});

/* NO click */
noBtn.addEventListener("click", function() {
    document.body.classList.add("shake");
    setTimeout(()=>document.body.classList.remove("shake"),300);

    yesSize += 0.2;
    noSize -= 0.1;

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;

    if(noSize <= 0.3){
        noBtn.style.display = "none";
    }
});

/* Voice */
function playVoice(){
    let voice = document.getElementById("voice");
    voice.play().catch(error => {
        console.log("Voice blocked:", error);
    });
}
