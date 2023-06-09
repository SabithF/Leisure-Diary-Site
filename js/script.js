let menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll =() =>{
    menu.classList.remove('menu-icon');
    navlist.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true
})

sr.reveal('.home-text', {delay:300, origin:'left'})
sr.reveal('.about,.services,.portfolio, .contact,.copyright', {delay:100, origin:'left'})