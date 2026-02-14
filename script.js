let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let popup = document.getElementById("popup");

let bgm = document.getElementById("bgm");
let favSong = document.getElementById("favSong");
let voice = document.getElementById("voice");

let yesSize = 1;
let noSize = 1;

/* Play bgm when clicking anywhere (only once) */
window.addEventListener("click", function startMusic() {
    bgm.volume = 0.05;
    bgm.play().catch(()=>{});
}, { once: true });

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

/* Falling hearts */
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

    popup.style.display = "flex";

    // Stop bgm
    bgm.pause();
    bgm.currentTime = 0;

    // Play favorite song
    favSong.volume = 0.5;
    favSong.play().catch(()=>{});

    // Confetti
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

/* Voice button */
function playVoice(){

    // Lower background music
    bgm.volume = 0.05;
    favSong.volume = 0.1;

    // Make voice louder
    voice.volume = 1.0;
    voice.play().catch(()=>{});

    // When voice ends, restore music volume
    voice.onended = function(){
        bgm.volume = 0.2;
        favSong.volume = 0.5;
    };
}



