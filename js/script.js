const nav = document.querySelector('.navigation');
const menu = document.querySelector('.menu');
const mainText = document.querySelector('.hero');
const button = document.querySelector('.btn');
const circleCntc = document.querySelector('.contact-circle');

gsap.to(mainText, { opacity: '1', duration: 1, x: '0%' });
gsap.to(button, { opacity: '1', duration: 0.5 }, '-=0');


function showMenu(e) {
    if (!nav.classList.contains('active')) {

        nav.classList.add('active');
        gsap.fromTo(nav, { opacity: '0' }, { opacity: '1', duration: 0.5 });

    } else {

        console.log("byebye");
        gsap.fromTo(nav, { opacity: '1' }, { opacity: '0', duration: 0.5 });
        setTimeout(
            function () { nav.classList.remove('active') }, 500
        );
    }
}

function Showcase() {
    const a1 = document.querySelector('.showcase_a_1');
    const b1 = document.querySelector('.showcase_b_1');
    const c1 = document.querySelector('.showcase_a_1-alt');
    const PhotosTimeLine = gsap.timeline({ defaults: { duration: 4, ease: 'none', repeat: -1, delay: 1 } });
    PhotosTimeLine.to(a1, { opacity: 0, yoyo: true });
    PhotosTimeLine.to(b1, { opacity: 0, yoyo: true });
    PhotosTimeLine.to(c1, { opacity: 0, yoyo: true });
}

function showCircle(e) {
    // console.log(e);
    if (e.target.classList.contains('contact-circle')) {
        gsap.to(circleCntc, { opacity: 1, duration: 2 });
        console.log('miau');
    }
}

Showcase();
menu.addEventListener('click', showMenu);
window.addEventListener('mouseover', showCircle);