document.addEventListener('DOMContentLoaded', ()=> {
  const modal = document.getElementById('music-modal');
  const acceptBtn = document.getElementById('accept-music');
  const audio = document.getElementById('bg-audio');

  // Intenta cargar el audio
  audio.load();

  // Modal música
  acceptBtn.addEventListener('click', async () => {
    try {
      await audio.play();
      acceptBtn.textContent = "Reproduciendo";
      acceptBtn.disabled = true;
      setTimeout(()=> { modal.style.display = 'none'; }, 300);
    } catch (err) {
      modal.style.display = 'none';
      console.warn("Reproducción automática bloqueada:", err);
    }
  });

  // Logo: play/pause música
  const logo = document.querySelector('.logo-circle');
  logo.addEventListener('click', ()=>{
    if (audio.paused){
      audio.play().catch(()=>{});
    } else {
      audio.pause();
    }
  });

  // Botones de contacto
  document.getElementById('btn-whatsapp').addEventListener('click', ()=>{
    window.open('https://wa.me/+573009555880','_blank');
  });
  document.getElementById('btn-email').addEventListener('click', ()=>{
    window.location.href = 'mailto:carlosdelgado.neska@gmail.com?subject=Soporte%20Waifu%20MarketLT&body=Hola%20necesito%20ayuda%20con...';
  });
});