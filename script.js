var int;
var stani;
var ifr = document.querySelector("iframe");
var bg = document.querySelector(".background");
var mario = document.createElement("img");
mario.src = "./mario.png";
bg.appendChild(mario);
mario.style.position = "absolute";
mario.style.bottom = "5vh";
mario.style.width = "150px";
mario.style.left = "300px";
var marioRun = document.createElement("img");
marioRun.src = "./mario_running.gif";
marioRun.style.position = "absolute";
marioRun.style.bottom = "5vh";
marioRun.style.width = "130px";
marioRun.style.left = "300px";
var marioJump = document.createElement("img");
marioJump.src = "./mariojump.png";
marioJump.style.position = "absolute";
marioJump.style.bottom = "5vh";
marioJump.style.width = "200px";
marioJump.style.left = "300px";
var logo = document.createElement("img");
bg.appendChild(logo);
logo.src = "./marioLogo.png";
logo.style.position = "absolute";
logo.style.top = "50px";
logo.style.width = "400px";
logo.classList.add("logo");
setTimeout(function () {
  bg.removeChild(logo);
}, 4000);
var logo2 = document.createElement("img");
logo2.src = "./marioLogo.png";
logo2.style.position = "absolute";
logo2.style.top = "-50px";
logo2.style.width = "400px";
var death = document.createElement("img");
death.src = "./danger.png";
death.style.width = "300px";
death.style.position = "absolute";
death.style.top = "30px";
death.style.left = "600px";
death.classList.add("shakeImg");
var marioRide = document.createElement("img");
marioRide.src = "./marioride.gif";
marioRide.style.position = "absolute";
marioRide.style.bottom = "5vh";
marioRide.style.width = "200px";
marioRide.style.left = "300px";
//var audio= document.getElementById("mariosong")

document.addEventListener("keypress", function (e) {
  if (e.key === "r") {
    console.log("hello");
    bg.appendChild(death);
    bg.appendChild(logo2);
    logo2.style.top = "30px";
    bg.removeChild(mario);
    bg.appendChild(marioRide);
    var i = 0;
    logo2.classList.add("shakeLogo");
    stani = setInterval(function () {
      bg.classList.toggle("blink");
      i -= 100;
      bg.style.backgroundPosition = i + "px 0";
    }, 40);
    ifr.src = "metalMario.mp3";
  }
});

document.addEventListener("keypress", function (e) {
  if (e.key === "s") {
    bg.removeChild(death);
    bg.removeChild(logo2);
    bg.appendChild(mario);
    bg.removeChild(marioRide);
    ifr.src = "/mario.mp3";
    clearInterval(stani);
    bg.classList.remove("blink");
    ifr.src = "mario.mp3";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    bg.removeChild(mario);
    bg.appendChild(marioRun);
    var i = 0;
    int = setInterval(function () {
      i -= 10;
      bg.style.backgroundPosition = i + "px 0";
    }, 100);
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowRight") {
    bg.appendChild(mario);
    bg.removeChild(marioRun);
    clearInterval(int);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    bg.removeChild(mario);
    bg.appendChild(marioRun);
    marioRun.classList.add("rotate");
    var i = 0;
    int = setInterval(function () {
      i += 10;
      bg.style.backgroundPosition = i + "px 0";
    }, 100);
  }
});
document.addEventListener("keyup", function (e) {
  if (e.key === "ArrowLeft") {
    bg.appendChild(mario);
    bg.removeChild(marioRun);
    clearInterval(int);
    marioRun.classList.remove("rotate");
  }
});

document.addEventListener("keypress", function (e) {
  if (e.key === " ") {
    bg.removeChild(mario);
    bg.appendChild(marioJump);
    marioJump.classList.add("animation");
    setTimeout(function () {
      bg.removeChild(marioJump);
      bg.appendChild(mario);
    }, 500);
  }
});
