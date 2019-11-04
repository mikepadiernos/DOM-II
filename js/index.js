// Your code goes here

// EVENT: copy
const copy = document.querySelector('.intro h2');
copy.addEventListener('copy', () => {
    copy.style.textTransform = 'uppercase';
});

// EVENT: drag & dragend
const drag = document.querySelector('.intro');
drag.addEventListener('drag', () => {
    drag.style.background = 'pink';
});
drag.addEventListener('dragend', () => {
    drag.style.background = 'white';
});

// EVENT: click & dblclick
const destination = document.querySelector('.content-destination');
destination.addEventListener('click', () => {
    destination.style.width = '100%';
});
destination.addEventListener('dblclick', () => {
    destination.style.width = '75%';
});

// EVENT: mouseenter & mouseleave
const destImage = document.querySelector('.content-destination img');
destImage.addEventListener('mouseenter', () => {
    destImage.style.width = '100%';
    destImage.style.transform = 'scale(1.2)';
    destImage.style.transition = 'all 0.3s';
});
destImage.addEventListener('mouseleave', () => {
    destImage.style.transform = 'scale(1)';
});

// EVENT: wheel
const btnHover = document.querySelectorAll('div.btn');
let btnGroup = [...btnHover];
btnGroup.forEach(btn => {
    btn.addEventListener('wheel', (event) => {
        event.target.style.borderRadius = '4px';
    });
});

// EVENT: contextmenu
const reset = document.querySelector('.footer p');
reset.addEventListener('contextmenu', () => {
    reset.style.fontSize = '1.8rem';
});

// EVENT: resize
const fullScreen = document.querySelector('.nav-container');
window.onresize = () => fullScreen.style.maxWidth = '90%';

// EXECUTE: stopPropagation
let mainNav = document.querySelector('.main-navigation');
mainNav.addEventListener('click', () => {
    mainNav.style.background = 'lime';
});
let navDiv = document.querySelector('nav.nav');
// navDiv.addEventListener('click', () => {
//     navDiv.style.visibility = 'hidden';
navDiv.addEventListener('click', (event) => {
    navDiv.style.visibility = 'hidden';
    event.stopPropagation();
});

// EXECUTE: preventDefault
const noRefresh = document.querySelectorAll('.nav-link');
noRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});