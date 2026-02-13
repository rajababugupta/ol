let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let popup = document.getElementById("popup");

let yesSize = 1;
let noSize = 1;

/* YES BUTTON */
yesBtn.addEventListener("click", function() {
    popup.style.display = "flex";
});

/* NO BUTTON */
noBtn.addEventListener("click", function() {
    yesSize += 0.2;
    noSize -= 0.1;

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;

    if(noSize <= 0.3){
        noBtn.style.display = "none";
    }
});

/* Floating Hearts Generator */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
