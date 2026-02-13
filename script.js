let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let popup = document.getElementById("popup");

let yesSize = 1;
let noSize = 1;

yesBtn.addEventListener("click", function() {
    popup.style.display = "flex";
});

noBtn.addEventListener("click", function() {
    yesSize += 0.2;
    noSize -= 0.1;

    yesBtn.style.transform = `scale(${yesSize})`;
    noBtn.style.transform = `scale(${noSize})`;

    if(noSize <= 0.3){
        noBtn.style.display = "none";
    }
});
