var spieler = document.querySelector(".player");
var playground = document.querySelector(".playground");
var scoreBoard = document.querySelector(".counter");
var startGame = document.querySelector(".startGame");
spieler.style.top = 300 + "px";
spieler.style.left = 700 + "px";

let timerDirection = new Timer(40);

//game over, sobald spieler über diesem punkt im feld ist
var overLeft = 50;
var overRight = parseInt(playground.innerHTML.length) - 50;

//sound
//var hintergrundmusik = new Audio("GFX/musik.mp3");
//hintergrundmusik.play();

//punktanzeige
var counter = 0;

//nach rechts/links bewegen
var theMovement = 0;

//BEWEGUNG, random zahl 0 oder 1
let randomBewegung = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//ob nach rechts oder links bewegen
var direction = getRandomInt(2);
//um wie viel bewegen
var movement = 6;

function initialMoving() {
  if (timerDirection.ready()) {
    direction = getRandomInt(2);
  }

  if (direction == 0) {
    //move right
    spieler.style.left = parseInt(spieler.style.left) + movement + "px";
    //bereich für bewegung definieren
    if (parseInt(spieler.style.left) > 500) {
      //wenn rand erreicht, bewegung zurücksetzen
      direction = 1;
      theMovement = 0;
    }
  } else {
    //move left
    spieler.style.left = parseInt(spieler.style.left) - movement + "px";
    if (parseInt(spieler.style.left) < 0) {
      direction = 0;
      theMovement = 0;
    }
  }
  //theMovement += movement;
}

function loop() {
  //grundbewegung spieler
  initialMoving();

  //counter
  if (parseInt(spieler.style.top) > 0) {
    counter = counter + 1;
    scoreBoard.textContent = counter;
  }

  //game over
  if (
    parseInt(spieler.style.left) < overLeft ||
    parseInt(spieler.style.left) > overRight
  ) {
    //alert("Game over!");
    //location.href = "start.html";
    //return;
    scoreBoard.textContent = 0;
  }

  //steuerung
  if (keyboard(39)) {
    spieler.style.left = parseInt(spieler.style.left) + 10 + "px";
  }
  if (keyboard(37)) {
    spieler.style.left = parseInt(spieler.style.left) - 10 + "px";
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

//allgemein
//highscore wird gespeichert und ausgegeben https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
//Math.floor(Math.random() * 6 + 4);

//probleme
//movement flugzeug
//game over
//steuerung tastatur
//counter punkteanzeige
