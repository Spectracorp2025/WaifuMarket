// Archivo: script.js
document.addEventListener('DOMContentLoaded', ()=> {
  const modal = document.getElementById('music-modal');
  const acceptBtn = document.getElementById('accept-music');
  const audio = document.getElementById('bg-audio');

  // Intenta cargar el audio (preload)
  audio.load();

  // Al aceptar, reproducir música y ocultar modal
  acceptBtn.addEventListener('click', async () => {
    try {
      await audio.play();
      // efecto visual al comenzar
      acceptBtn.textContent = "Reproduciendo";
      acceptBtn.disabled = true;
      setTimeout(()=> { modal.style.display = 'none'; }, 300);
    } catch (err) {
      // Si la reproducción falla (política del navegador), hacemos fallback:
      acceptBtn.textContent = "Permitir reproducción manual";
      acceptBtn.disabled = false;
      // Ocultamos igualmente para que el usuario pueda usar la web y pueda darle play manual si lo desea
      modal.style.display = 'none';
      console.warn("Reproducción automática bloqueada por navegador:", err);
    }
  });

  // Permitir que el usuario active audio también tocando el logo (útil en móviles)
  const logo = document.querySelector('.logo-circle');
  logo.addEventListener('click', ()=>{
    if (audio.paused){
      audio.play().catch(()=>{ /* ignorar errores */ });
    } else {
      audio.pause();
    }
  });

  // Añadir pequeño efecto tactile en logo
  logo.addEventListener('touchstart', ()=> logo.classList.add('touched'));
  logo.addEventListener('touchend', ()=> logo.classList.remove('touched'));
});