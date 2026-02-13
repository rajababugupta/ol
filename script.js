let yesBtn=document.getElementById("yesBtn");
let noBtn=document.getElementById("noBtn");
let proposal=document.getElementById("proposal");
let afterYes=document.getElementById("afterYes");

let scale=1;

noBtn.addEventListener("click",function(){
scale+=0.2;
yesBtn.style.transform="scale("+scale+")";
noBtn.style.transform="scale("+(1/scale)+")";
});

yesBtn.addEventListener("click",function(){
proposal.style.display="none";
afterYes.style.display="block";
launchFireworks();
createHearts();
observeSections();
});

/* Fireworks */
function launchFireworks(){
confetti({
particleCount:200,
spread:120,
origin:{y:0.6}
});
}

/* Floating hearts */
function createHearts(){
setInterval(()=>{
let heart=document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(Math.random()*20+15)+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},600);
}

/* Smooth scroll fade reveal */
function observeSections(){
let faders=document.querySelectorAll(".fade");

let observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

faders.forEach(section=>{
observer.observe(section);
});
}

/* Voice */
function playVoice(){
document.getElementById("voice").play();
}

/* Glitter cursor */
document.addEventListener("mousemove",function(e){
let sparkle=document.createElement("div");
sparkle.style.position="fixed";
sparkle.style.left=e.clientX+"px";
sparkle.style.top=e.clientY+"px";
sparkle.style.width="8px";
sparkle.style.height="8px";
sparkle.style.background="white";
sparkle.style.borderRadius="50%";
sparkle.style.pointerEvents="none";
sparkle.style.opacity="0.8";
sparkle.style.transition="all 0.5s ease";
document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.style.opacity="0";
sparkle.style.transform="scale(2)";
},10);

setTimeout(()=>{
sparkle.remove();
},500);
});
