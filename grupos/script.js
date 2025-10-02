// Datos de grupos (links y descripciones)
const groups = {
  1: {
    title: 'Minecraft Realms',
    desc: 'Servidor y comunidad enfocada en aventuras y survival. Comparte seeds, builds y eventos semanales.',
    link: 'https://chat.whatsapp.com/EDBwnohI7EsDMjGhTo1YoY?mode=ems_copy_t'
  },
  2: {
    title: 'Transmisiones Anime',
    desc: 'Transmisiones en vivo de episodios, comentarios y eventos especiales de anime.',
    link: 'https://chat.whatsapp.com/LrQF1adLBs67YMRYHPonY4?mode=ems_copy_t'
  },
  3: {
    title: 'Team Wplace',
    desc: 'Equipo y comunidad para proyectos, colaboración y torneos amigables.',
    link: 'https://chat.whatsapp.com/HlwOqahVKGT7UzwRteiLtv?mode=ems_copy_t'
  },
  vip: {
    title: 'Crunchyroll Account (VIP)',
    desc: 'Acceso VIP a cuentas compartidas de Crunchyroll. Pago único para ingresar. Incluye soporte y canal privado.',
    link: 'https://wa.me/573009555880',
    price: '4.500 COP'
  }
};

// Modal y audio
const musicModal = document.getElementById('music-modal');
const bgAudio = document.getElementById('bg-audio');
const acceptBtn = document.getElementById('music-accept');
const declineBtn = document.getElementById('music-decline');
const groupModal = document.getElementById('group-modal');
const groupContent = document.getElementById('group-content');

// Mostrar modal de música al cargar
window.addEventListener('load', ()=>{
  musicModal.classList.add('show');
});

acceptBtn.addEventListener('click', async ()=>{
  try{
    await bgAudio.play();
  }catch(e){
    console.warn('Autoplay bloqueado, el usuario debe tocar para reproducir');
  }
  musicModal.classList.remove('show');
});

declineBtn.addEventListener('click', ()=>{
  musicModal.classList.remove('show');
});

// Abrir modal del grupo
document.querySelectorAll('.btn.more').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.group;
    openGroupModal(id);
  });
});

document.querySelectorAll('.vip-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.group;
    openGroupModal(id);
  });
});

function openGroupModal(id){
  const g = groups[id];
  if(!g) return;
  // Construir HTML
  let html = `<div class="group-desc">`;
  html += `<h2>${g.title}</h2>`;
  html += `<p>${g.desc}</p>`;
  if(id === 'vip'){
    html += `<div class="price"><strong>Precio ingreso:</strong> ${g.price}</div>`;
    html += `<p><em>Para pagar y recibir acceso, contacta al número de soporte:</em></p>`;
    html += `<a class="btn vip-btn" href="${g.link}" target="_blank">Contactar & Pagar (WhatsApp)</a>`;
  } else {
    html += `<a class="btn" href="${g.link}" target="_blank">Unirme al grupo</a>`;
  }
  html += `</div>`;
  groupContent.innerHTML = html;
  groupModal.classList.add('show');
}

// Cerrar modal
groupModal.addEventListener('click', (e)=>{
  if(e.target === groupModal || e.target.classList.contains('close-modal')){
    groupModal.classList.remove('show');
  }
});

// Pequeño efecto: respawn neon cuando se da click en icono central para reactivar audio
const icon = document.querySelector('.icon-circle');
icon && icon.addEventListener('click', ()=>{
  if(bgAudio.paused){
    bgAudio.play().catch(()=>{});
  } else {
    bgAudio.pause();
  }
});

// Prevent accidental navigation on mobile
window.addEventListener('beforeunload', (e)=>{
  // Opcional: uncomment to warn user when leaving
  // e.preventDefault(); e.returnValue='';
});

// End of script