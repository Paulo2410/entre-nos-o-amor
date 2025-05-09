document.addEventListener("DOMContentLoaded", () => {
    const poema = document.querySelector(".poema p");
    poema.style.opacity = 0;
    setTimeout(() => {
      poema.style.transition = "opacity 2s";
      poema.style.opacity = 1;
    }, 500);
  });
  const audio = document.getElementById('audioHomenagem');
  const btn = document.getElementById('btnAudio');

  let tocando = false;

  btn.addEventListener('click', () => {
    if (!tocando) {
      audio.play();
      btn.textContent = '💖'; // Coração preenchido
    } else {
      audio.pause();
      btn.textContent = '❤️'; // Coração contorno
    }
    tocando = !tocando;
  });


  