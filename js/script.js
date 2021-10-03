const nav = document.querySelector('.navigation');
const menu = document.querySelector('.menu');
const mainText = document.querySelector('.hero');
const button = document.querySelector('.btn');

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

menu.addEventListener('click', showMenu);