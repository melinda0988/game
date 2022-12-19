const spieler = document.querySelector(".player");
const playground = document.querySelector(".playground");
let scoreBoard = document.querySelector(".counter");
const startGame = document.querySelector(".startGame");
spieler.style.top = 300 + "px";
spieler.style.left = 700 + "px";

let timerDirection = new Timer(20);

//sound
//var hintergrundmusik = new Audio("GFX/musik.mp3");
//hintergrundmusik.play();

//punktanzeige
let counter = 0;

//nach rechts/links bewegen
//let theMovement = 0;

//BEWEGUNG, random zahl 0 oder 1
function getRandomInt(max) {
  return Math.floor(Math.random());
}

//random richtun wechseln
let randomDirection = Math.floor(Math.random() * 6 + 4);
//ob nach rechts oder links bewegen
let direction = getRandomInt(2);
//console.log(getRandomInt(2));
//wie schnell bewegen
const movement = 6;

//nach wie viel die richtung gewechselt wird
let distance = Math.floor(Math.random() * 1250 + 1000);

function initialMoving() {
  if (timerDirection.ready()) {
    direction = getRandomInt(2);
    if (direction == 0) {
      //move right
      spieler.style.left = parseInt(spieler.style.left) + movement + "px";
      //bereich für bewegung definieren
      if (parseInt(spieler.style.left) > distance) {
        //wenn rand erreicht, bewegung zurücksetzen
        direction = 1;
        //theMovement = 0;
      }
    } else {
      //move left
      spieler.style.left = parseInt(spieler.style.left) - movement + "px";
      if (parseInt(spieler.style.left) < distance) {
        direction = 0;
        //theMovement = 0;
      }
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
    parseInt(spieler.style.left) < 250 ||
    parseInt(spieler.style.left) > 1000
  ) {
    //location.href = "start.html";
    scoreBoard.textContent = 0;
  }

  //steuerung
  if (keyboard(39)) {
    spieler.style.left = parseInt(spieler.style.left) + movement + "px";
  }
  if (keyboard(37)) {
    spieler.style.left = parseInt(spieler.style.left) - movement + "px";
  }

  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
//Math.floor(Math.random() * 6 + 4);
//(parseInt(playground.innerHTML.length) -00)
//theMovement löschen?

//todo
//
//random bewegung hin und her in angenehmer geschwindigkeit
//gegensteuern in gleichmässiger geschwindigkeit
