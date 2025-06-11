// Por que <Audio> me deja un gap feo
var sound = new Howl({
  src: ["entrega/music.ogg", "entrega/music.mp3"],
  autoplay: false,
  loop: true,
  volume: 0.5,
  html5: false,
  // Para hacer el loop perfecto sin gap
  onend: function () {
    restartLoop();
  },
});

// Muestra el contenido escondido, cierra el popup, reproduce la musica, mueve el bg
function showContent() {
  const popup = document.getElementById("pop-up");
  const miniweb = document.getElementById("miniweb");
  const moveElement = document.getElementById("move-fuckingplese");

  // Primero ocultar el pop-up con animación
  popup.style.opacity = "0";
  //popup.style.transform = 'scale(0.95)';

  // Cuando termine la transición de ocultar
  popup.addEventListener("transitionend", function handler() {
    popup.removeEventListener("transitionend", handler);
    popup.style.display = "none";

    // Mostrar miniweb
    miniweb.style.display = "block";
    setTimeout(() => {
      miniweb.style.opacity = "1";
      miniweb.style.animation =
        "LinearMove 2s linear infinite, cursor-idle 1.2s infinite";
      moveElement.style.cssText = `
                    animation: LinearMove 2s linear infinite, bright-up 0.5s ease, cursor-click 0.5s !important;
                    background-color: #919191;
                `;
      sound.play();
    }, 20);
  });

  // Animaciones adicionales

  // Control de audio
  //sound.play();
  setInterval(() => {
    if (sound.playing() && sound.seek() >= 19.266) {
      sound.seek(0);
    }
  }, 50);
}

const preloadImages = () => {
  const img1 = new Image();
  img1.src = "catblob_play.gif";
  const img2 = new Image();
  img2.src = "catblob_stop.gif";
};
const sndctrl = document.getElementById("sndctrl");
const jumper = document.getElementById("jumper");
let isPlaying = true;

sndctrl.addEventListener("click", () => {
  if (!isPlaying) {
    sound.play();
    sndctrl.classList.add("sndctrlplay");
    sndctrl.textContent = "Playing";
    jumper.src = "entrega/catblob_play.gif";
  } else {
    sound.stop();
    sndctrl.classList.remove("sndctrlplay");
    sndctrl.textContent = "Stopped";
    jumper.src = "entrega/catblob_stop.gif";
  }
  isPlaying = !isPlaying; // Toggle
});

// SFX Botones
var audio = document.getElementById("SFX1");
audio.volume = 0.05;
