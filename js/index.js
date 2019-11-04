// Your code goes here

// EVENT: resize
const fullScreen = document.querySelector('.nav-container');
function navWidth() {
    fullScreen.style.maxWidth = '90%';
}
window.onresize = navWidth;

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
        event.target.style.borderRadius = '3px';
    });
});

// EVENT: contextmenu
const reset = document.querySelector('.footer p');
reset.addEventListener('contextmenu', () => {
    reset.style.fontSize = '1.8rem';
});

// EXECUTE: preventDefault
const noRefresh = document.querySelectorAll('.nav-link');
noRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});