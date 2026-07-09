if('IntersectionObserver' in window){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
  }, {threshold:.1});
  els.forEach(el=>io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
}

const navToggle = document.getElementById('navToggle');
const navDrawer = document.getElementById('navDrawer');
if(navToggle && navDrawer){
  navToggle.addEventListener('click', ()=>{
    const open = navDrawer.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });
}
