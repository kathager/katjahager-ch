const menuTrigger = document.getElementById('menu-button');
if (menuTrigger) {
  menuTrigger.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if(!nav) return;
    nav.classList.toggle('open');
    nav.classList.contains('open') ? menuTrigger.innerHTML = 'schliessen' : menuTrigger.innerHTML = 'Menü';
  });
}