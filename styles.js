const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerMenuLinks = document.querySelectorAll('a');

hamburgerBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('hidden');
});

hamburgerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    })
});